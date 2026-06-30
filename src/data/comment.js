const VIDEO_LINKS = {
  video1: 'https://www.tiktok.com/@anhlontrivo/video/7650071948034084116?is_from_webapp=1&sender_device=pc&web_id=7635565055111972360',
  video2: 'https://www.tiktok.com/@anhlontrivo/video/7604872300701224212?is_from_webapp=1&sender_device=pc&web_id=7635565055111972360',
  video3: 'https://www.tiktok.com/@anhlontrivo/video/7637529130728574229?is_from_webapp=1&sender_device=pc&web_id=7635565055111972360',
  video4: 'https://www.tiktok.com/@anhlontrivo/video/7602975222530149652?is_from_webapp=1&sender_device=pc&web_id=7635565055111972360',
  video5: 'https://www.tiktok.com/@anhlontrivo/video/7650094003962170645?is_from_webapp=1&sender_device=pc&web_id=7635565055111972360',
  video6: 'https://www.tiktok.com/@anhlontrivo/video/7576283596370103572?is_from_webapp=1&sender_device=pc&web_id=7635565055111972360',
  video7: 'https://www.tiktok.com/@anhlontrivo/video/7650099152843492629?is_from_webapp=1&sender_device=pc&web_id=7635565055111972360',
  video8: 'https://www.tiktok.com/@anhlontrivo/video/7543310132038356241?is_from_webapp=1&sender_device=pc&web_id=7635565055111972360',
  video9: 'https://www.tiktok.com/@anhlontrivo/video/7588611307021028628?is_from_webapp=1&sender_device=pc&web_id=7635565055111972360',
  video10: 'https://www.tiktok.com/@anhlontrivo/video/7563180786866720021?is_from_webapp=1&sender_device=pc&web_id=7635565055111972360',
  video11: 'https://www.tiktok.com/@anhlontrivo/video/7575938573489147156?is_from_webapp=1&sender_device=pc&web_id=7635565055111972360',
  video12: 'https://www.tiktok.com/@anhlontrivo/video/7543902275018755344?is_from_webapp=1&sender_device=pc&web_id=7635565055111972360',
  video13: 'https://www.tiktok.com/@anhlontrivo/video/7599598851640577301?is_from_webapp=1&sender_device=pc&web_id=7635565055111972360'
};

const COMMENT_GROUPS = [
  {
    folder: 'vid1',
    videoUrl: VIDEO_LINKS.video1,
    from: 1,
    to: 4
  },
  {
    folder: 'vid2',
    videoUrl: VIDEO_LINKS.video2,
    from: 5,
    to: 9
  },
  {
    folder: 'vid3',
    videoUrl: VIDEO_LINKS.video3,
    from: 10,
    to: 18
  },
  {
    folder: 'vid4',
    videoUrl: VIDEO_LINKS.video4,
    from: 79,
    to: 85
  },
  {
    folder: 'vid5',
    videoUrl: VIDEO_LINKS.video5,
    from: 19,
    to: 21
  },
  {
    folder: 'vid6',
    videoUrl: VIDEO_LINKS.video6,
    from: 22,
    to: 30
  },
  {
    folder: 'vid7',
    videoUrl: VIDEO_LINKS.video7,
    from: 31,
    to: 34
  },
  {
    folder: 'vid8',
    videoUrl: VIDEO_LINKS.video8,
    from: 35,
    to: 45
  },
  {
    folder: 'vid9',
    videoUrl: VIDEO_LINKS.video9,
    from: 46,
    to: 52
  },
  {
    folder: 'vid10',
    videoUrl: VIDEO_LINKS.video10,
    from: 53,
    to: 54
  },
  {
    folder: 'vid11',
    videoUrl: VIDEO_LINKS.video11,
    from: 55,
    to: 63
  },
  {
    folder: 'vid12',
    videoUrl: VIDEO_LINKS.video12,
    from: 64,
    to: 72
  },
  {
    folder: 'vid13',
    videoUrl: VIDEO_LINKS.video13,
    from: 73,
    to: 78
  }
];

function padCommentNumber(number) {
  return String(number).padStart(3, '0');
}

function createCommentList(groups) {
  let id = 1;

  return groups.flatMap((group) => {
    const numbers = Array.from(
      { length: group.to - group.from + 1 },
      (_, index) => group.from + index
    );

    return numbers.map((number) => {
      const comment = {
        id,
        image: `/images/comments/${group.folder}/cmts_${padCommentNumber(number)}.png`,
        videoUrl: group.videoUrl
      };

      id += 1;
      return comment;
    });
  });
}

export const COMMENTS = createCommentList(COMMENT_GROUPS);