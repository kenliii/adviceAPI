const adviceId = document.querySelector('#adviceId');
const adviceText = document.querySelector('#adviceText');
const btn = document.querySelector('#btn');

function getAdvice(){
    fetch('https://api.adviceslip.com/advice').then(response =>{
     return response.json();

    
}).then(adviceData =>
    {
        const adviceNum = adviceData.slip.id;
        const advice = adviceData.slip.advice;

        adviceId.innerHTML = adviceNum;
        adviceText.innerHTML = advice;

    }).catch(error =>{
        console.log(error);
    })
}

btn.addEventListener('click', function(){
    getAdvice();
})

window.onload = ( ) => {
    getAdvice();
}