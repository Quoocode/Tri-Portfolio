const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

const inputPath = path.join(__dirname, '../src/data/raw/Overview.xlsx');
const outputPath = path.join(__dirname, '../src/data/tiktokOverview.js');

function toNumber(value) {
  if (value === null || value === undefined || value === '') return 0;

  const cleaned = String(value)
    .replace(/,/g, '')
    .trim();

  const num = Number(cleaned);
  return Number.isFinite(num) ? num : 0;
}

function normalizeRow(row, index) {
  const date = String(row['Date'] || '').trim();

  return {
    id: index + 1,
    date,
    videoViews: toNumber(row['Video Views']),
    profileViews: toNumber(row['Profile Views']),
    likes: toNumber(row['Likes']),
    comments: toNumber(row['Comments']),
    shares: toNumber(row['Shares'])
  };
}

const workbook = XLSX.readFile(inputPath);
const sheet = workbook.Sheets['Overview'] || workbook.Sheets[workbook.SheetNames[0]];

const rawRows = XLSX.utils.sheet_to_json(sheet, {
  defval: ''
});

const rows = rawRows
  .map(normalizeRow)
  .filter((row) => row.date);

const totals = rows.reduce(
  (acc, row) => {
    acc.videoViews += row.videoViews;
    acc.profileViews += row.profileViews;
    acc.likes += row.likes;
    acc.comments += row.comments;
    acc.shares += row.shares;
    return acc;
  },
  {
    videoViews: 0,
    profileViews: 0,
    likes: 0,
    comments: 0,
    shares: 0
  }
);

const peakViews = rows.reduce((best, row) => {
  return row.videoViews > best.videoViews ? row : best;
}, rows[0] || {});

const bestEngagement = rows.reduce((best, row) => {
  const rowEngagement = row.likes + row.comments + row.shares;
  const bestEngagementScore = best.likes + best.comments + best.shares;

  return rowEngagement > bestEngagementScore ? row : best;
}, rows[0] || { likes: 0, comments: 0, shares: 0 });

const output = `// Auto-generated from Overview.xlsx.
// Do not edit manually. Run: npm run convert:tiktok

export const TIKTOK_OVERVIEW = ${JSON.stringify(rows, null, 2)};

export const TIKTOK_TOTALS = ${JSON.stringify(totals, null, 2)};

export const TIKTOK_INSIGHTS = ${JSON.stringify(
  {
    peakViews,
    bestEngagement,
    daysTracked: rows.length
  },
  null,
  2
)};
`;

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, output, 'utf8');

console.log(`Converted ${rows.length} rows`);
console.log(`Saved to ${outputPath}`);