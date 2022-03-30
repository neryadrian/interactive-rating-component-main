let score = 0;

function scoreBtn(btnId) {
    let errorScore = document.getElementById('error-score');
    errorScore.style.display = 'none';

    let btn = document.getElementById(btnId);
    if(btn) {
        //console.log("Clicked button " + btnId);
        btn.focus();
        if(btnId == 'btn-1') score = 1;
        else if(btnId == 'btn-2') score = 2;
        else if(btnId == 'btn-3') score = 3;
        else if(btnId == 'btn-4') score = 4;
        else if(btnId == 'btn-5') score = 5;
    }
}

function submitBtn() {
    //console.log("Clicked submit button");
    if(score != 0) {
        let thankyouModal = document.getElementById('thankyou-modal');
        let ratingModal = document.getElementById('rating-modal');
        let scoreResult = document.getElementById('score-result');
        
        thankyouModal.style.display = 'flex';
        ratingModal.style.display = 'none';
        scoreResult.textContent = 'You selected ' + score + ' out of 5';
    }
    else {
        let errorScore = document.getElementById('error-score');
        errorScore.style.display = 'initial';
    }
}