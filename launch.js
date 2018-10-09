const xhrLast = new XMLHttpRequest();
const xhrNext = new XMLHttpRequest();
const host = 'https://api.spacexdata.com/v2/';
const last = 'launches/latest';
const next = 'launches/next';

const lastName = document.getElementById('lastMissionName');
const lastInfo = document.getElementById('lastMissionInfo');
const lastDate = document.getElementById('lastMissionLaunch');

const nextName = document.getElementById('nextMissionName');
const nextInfo = document.getElementById('nextMissionInfo');
const nextDate = document.getElementById('nextMissionLaunch');

xhrLast.open('GET', host+last, false);
xhrLast.send();
const lastObj = JSON.parse(xhrLast.response);


lastName.innerHTML = lastObj.mission_name;
lastInfo.innerHTML = lastObj.details;
lastDate.innerHTML = lastObj.launch_date_utc.slice(0,10);

xhrNext.open('GET', host+next, false);
xhrNext.send();
const nextObj = JSON.parse(xhrNext.response);
console.log(nextObj);

nextName.innerHTML = nextObj.mission_name;
nextInfo.innerHTML = nextObj.rocket.rocket_name;
nextDate.innerHTML = nextObj.launch_date_utc.slice(0,10);
