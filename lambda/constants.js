/* CONSTANTS */

exports.skill = {
  appId: '',
  dynamoDBTableName: 'dreamtime',
};

/* This outputs 2021-07-02 if today is 2021-07-03, this is the format they use for their audio file*/
function playerdate() {
    var d = new Date((new Date()).valueOf() - 1000*60*60*24);
    var month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
    
}

exports.audioData = [
  {
    title: 'Bedtime Stories',
    url: 'https://abcradiomodhls-vh.akamaihd.net/i/kidslisten/audio/kbe-' + playerdate() + '.m4a/master.m3u8',
    small: "Media/bedtimestories-13099436-16x9-small.png",
    large: "Media/bedtimestories-13099436-16x9-large.png"
  },
  {
    title: 'Lullabies',
    url: 'https://abcradiomodhls-vh.akamaihd.net/i/kidslisten/audio/klu-' + playerdate() + '.m4a/master.m3u8',
    small: "Media/lullabies-9324100-16x9-large.png",
    large: "Media/lullabies-9324100-16x9-small.png"
  },
  {
    title: 'Dream Time',
    url: 'https://abcradiomodhls-vh.akamaihd.net/i/kidslisten/audio/kdt-' + playerdate() + '.m4a/master.m3u8',
    small: "Media/dreamtime-9318230-16x9-small.png",
    large: "Media/dreamtime-9318230-16x9-large.png"
  },
];