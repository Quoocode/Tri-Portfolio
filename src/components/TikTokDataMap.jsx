import { useMemo, useState } from 'react';
import { TIKTOK_OVERVIEW } from '../data/tiktokOverview';

function fullNumber(value) {
  return Number(value || 0).toLocaleString('en-US');
}

function parseDateLabel(value, index) {
  const raw = String(value || '').trim();

  // Data starts from Jun 29, 2025.
  // Each row is one day, so using index is more reliable than guessing by month.
  const baseDate = new Date(2025, 5, 29);
  const parsed = new Date(baseDate);
  parsed.setDate(baseDate.getDate() + index);

  return {
    shortLabel: parsed.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    }),
    fullLabel: parsed.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }),
    rawLabel: raw
  };
}

function buildTickIndexes(length, count = 10) {
  if (length <= count) {
    return Array.from({ length }, (_, i) => i);
  }

  const indexes = new Set([0, length - 1]);

  for (let i = 1; i < count - 1; i += 1) {
    indexes.add(Math.round((i * (length - 1)) / (count - 1)));
  }

  return [...indexes].sort((a, b) => a - b);
}

export default function TikTokDataMap() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const data = useMemo(() => {
    return TIKTOK_OVERVIEW.map((row, index) => {
      const labels = parseDateLabel(row.date, index);

      return {
        ...row,
        index,
        shortDate: labels.shortLabel,
        fullDate: labels.fullLabel,
        rawDate: labels.rawLabel,
        engagement: (row.likes || 0) + (row.comments || 0) + (row.shares || 0)
      };
    });
  }, []);

  const width = 980;
  const height = 390;
  const padLeft = 56;
  const padRight = 28;
  const padTop = 22;
  const padBottom = 84;

  const chartWidth = width - padLeft - padRight;
  const chartHeight = height - padTop - padBottom;

  const maxViews = Math.max(...data.map((d) => d.videoViews || 0), 1);
  const maxMini = Math.max(...data.map((d) => d.engagement || 0), 1);

  const points = data.map((row, index) => {
    const x =
      data.length === 1
        ? width / 2
        : padLeft + (index / (data.length - 1)) * chartWidth;

    const y = padTop + (1 - (row.videoViews || 0) / maxViews) * chartHeight;

    const miniBarHeight = ((row.engagement || 0) / maxMini) * 36;

    return {
      ...row,
      x,
      y,
      miniBarHeight
    };
  });

  const linePath = points
    .map((point, index) => {
      return `${index === 0 ? 'M' : 'L'} ${point.x.toFixed(2)} ${point.y.toFixed(2)}`;
    })
    .join(' ');

  const tickIndexes = buildTickIndexes(points.length, 12);

  const activePoint =
    hoveredIndex !== null && points[hoveredIndex]
      ? points[hoveredIndex]
      : null;

  const tooltipStyle = activePoint
    ? {
        left: `${(activePoint.x / width) * 100}%`,
        top: `${(activePoint.y / height) * 100}%`,
        transform:
          activePoint.x > width * 0.82
            ? 'translate(-100%, -115%)'
            : activePoint.x < width * 0.18
              ? 'translate(0%, -115%)'
              : 'translate(-50%, -115%)'
      }
    : null;

  const horizontalGuides = [0.25, 0.5, 0.75];

  return (
    <div className="data-map">
      <div className="data-map__copy">
        <h3>viral momentum map</h3>
        <p>
          A handmade read of how views, likes, comments and shares moved across the year.
        </p>
      </div>

      <div
        className="data-map__chart-shell"
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {activePoint && (
          <div className="data-map__tooltip" style={tooltipStyle}>
            <div className="data-map__tooltip-date">
              {activePoint.fullDate}
            </div>

            <div className="data-map__tooltip-grid">
              <div>
                <span>views</span>
                <b>{fullNumber(activePoint.videoViews)}</b>
              </div>

              <div>
                <span>profile</span>
                <b>{fullNumber(activePoint.profileViews)}</b>
              </div>

              <div>
                <span>likes</span>
                <b>{fullNumber(activePoint.likes)}</b>
              </div>

              <div>
                <span>comments</span>
                <b>{fullNumber(activePoint.comments)}</b>
              </div>

              <div>
                <span>shares</span>
                <b>{fullNumber(activePoint.shares)}</b>
              </div>
            </div>
          </div>
        )}

        <div className="data-map__svg-wrap">
          <svg
            className="data-map__svg"
            viewBox={`0 0 ${width} ${height}`}
            role="img"
            aria-label="TikTok performance chart"
          >
            {horizontalGuides.map((ratio, idx) => {
              const y = padTop + ratio * chartHeight;

              return (
                <line
                  key={idx}
                  x1={padLeft}
                  y1={y}
                  x2={width - padRight}
                  y2={y}
                  className="data-map__grid"
                />
              );
            })}

            <line
              x1={padLeft}
              y1={height - padBottom}
              x2={width - padRight}
              y2={height - padBottom}
              className="data-map__axis"
            />

            <line
              x1={padLeft}
              y1={padTop}
              x2={padLeft}
              y2={height - padBottom}
              className="data-map__axis"
            />

            {points.map((point) => {
              if (point.miniBarHeight < 2) return null;

              return (
                <rect
                  key={`bar-${point.index}`}
                  x={point.x - 2.5}
                  y={height - padBottom - point.miniBarHeight}
                  width="5"
                  height={point.miniBarHeight}
                  rx="2.5"
                  className="data-map__bar"
                />
              );
            })}

            <path d={linePath} className="data-map__line" />

            {points.map((point, index) => {
              const isActive = hoveredIndex === index;
              const isMajor =
                point.videoViews >= maxViews * 0.45 ||
                point.engagement >= maxMini * 0.5;

              if (!isMajor && !isActive) return null;

              return (
                <circle
                  key={`point-${point.index}`}
                  cx={point.x}
                  cy={point.y}
                  r={isActive ? 8 : 5.5}
                  className={
                    isActive
                      ? 'data-map__point data-map__point--active'
                      : 'data-map__point'
                  }
                />
              );
            })}

            {activePoint && (
              <>
                <line
                  x1={activePoint.x}
                  y1={padTop}
                  x2={activePoint.x}
                  y2={height - padBottom}
                  className="data-map__hover-line"
                />

                <circle
                  cx={activePoint.x}
                  cy={activePoint.y}
                  r="8.5"
                  className="data-map__point data-map__point--active"
                />
              </>
            )}

            <text x={padLeft} y={18} className="data-map__label">
              views
            </text>

            <text
              x={width - padRight - 100}
              y={height - 20}
              className="data-map__label"
            >
              timeline →
            </text>

            {tickIndexes.map((tickIndex, idx) => {
              const point = points[tickIndex];

              let anchor = 'middle';
              if (idx === 0) anchor = 'start';
              if (idx === tickIndexes.length - 1) anchor = 'end';

              return (
                <g key={`tick-${tickIndex}`}>
                  <line
                    x1={point.x}
                    y1={height - padBottom}
                    x2={point.x}
                    y2={height - padBottom + 8}
                    className="data-map__tick-line"
                  />

                  <text
                    x={point.x}
                    y={height - 40}
                    textAnchor={anchor}
                    className="data-map__tick-label"
                  >
                    {point.shortDate}
                  </text>
                </g>
              );
            })}

            {points.map((point, index) => {
              const prevX =
                index === 0
                  ? padLeft
                  : (points[index - 1].x + point.x) / 2;

              const nextX =
                index === points.length - 1
                  ? width - padRight
                  : (points[index + 1].x + point.x) / 2;

              return (
                <rect
                  key={`hover-${point.index}`}
                  x={prevX}
                  y={padTop}
                  width={nextX - prevX}
                  height={chartHeight}
                  fill="transparent"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseMove={() => setHoveredIndex(index)}
                />
              );
            })}
          </svg>
        </div>
      </div>
    </div>
  );
}