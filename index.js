const activityNode = document.querySelector('.js-activity');
const btnNode = document.querySelector('.js-button');

function getActivity() {
    fetch('https://www.boredapi.com/api/activity/')
    .then(data => data.json())
    .then(res => {
        if (res.status !== 'success') {
            activityNode.innerText = res.activity;
        } else {
            console.log('error');
        }
    });
}

btnNode.addEventListener('click', getActivity);