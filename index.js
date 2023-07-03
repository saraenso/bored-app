const titleNode = document.querySelector('.js-title');
const activityNode = document.querySelector('.js-activity');
const btnNode = document.querySelector('.js-button');
const bodyNode = document.querySelector('body');

btnNode.addEventListener('click', getActivity);

function getActivity() {
    fetch('https://www.boredapi.com/api/activity/')
    .then(data => data.json())
    .then(res => {
        if (res.status !== 'success') {
            activityNode.innerText = res.activity;
        } else {
            console.log('error');
        }
        updateTitle();
        updateBackground();
    });
}

function updateTitle() {
    titleNode.innerText = '🌊 Cheers! Now you have something to do!';
}

function updateBackground() {
    bodyNode.classList.add('body_modified')
}