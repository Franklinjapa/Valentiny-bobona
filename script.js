const questionDiv = document.getElementById('question');
const answerNoBtn = document.getElementById('answer-no');
const answerYesBtn = document.getElementById('answer-yes');
const acertoDiv = document.getElementById('acerto');

answerNoBtn.addEventListener('click', () => {
    questionDiv.style.transform = 'translateX(200%)';
});

answerYesBtn.addEventListener('click', () => {
    questionDiv.style.display = 'none';
    acertoDiv.style.display = 'block';
});
