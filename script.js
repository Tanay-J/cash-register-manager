const displayController = (() => {
    const container = document.querySelector('.container');
    
    const p1 = document.createElement('p');
    p1.textContent = 'Enter Bill Amount';
    container.appendChild(p1);

    const p2 = document.createElement('p');
    p2.textContent = 'Enter Cash Given';
    
    const billAmount = document.createElement('input');
    billAmount.classList.add('amount');
    billAmount.type = 'number';
    container.appendChild(billAmount);

    const paidAmount = document.createElement('input');
    paidAmount.classList.add('amount');

    billAmount.addEventListener('keypress',(e) => {
        if(e.key === 'Enter'){
            container.appendChild(p2);
            container.appendChild(paidAmount);
        }
    })
    paidAmount.addEventListener('keypress',(e) => {
        if(e.key === 'Enter'){
            changeCalculator();
        }
    })

    return {billAmount,paidAmount}
})();

const changeCalculator = () => {
    let difference = displayController.paidAmount.value - displayController.billAmount.value;
    // let thousandNotes = 0;
    // let fivehundredNotes = 0;
    // let hundredNotes = 0;
    // let fiftyNotes = 0;
    // let twentyNotes = 0;
    // let tenNotes = 0;
    // let fiveCoins = 0
    // let twoCoins = 0;
    // let oneCoins = 0;

    let notesArray = [0,0,0,0,0,0,0,0,0];

    for(let i = 0; i < notesArray.length; i++){
        if(difference > 1000){
            notesArray[0] = parseInt(difference/1000);
            difference -= notesArray[0]*1000;
        }else if(difference > 500){
            notesArray[1] = parseInt(difference/500);
            difference -= notesArray[1]*500;
        }else if(difference > 100){
            notesArray[2] = parseInt(difference/100);
            difference -= notesArray[2]*100;       
        }else if(difference > 50){
            notesArray[3] = parseInt(difference/50);
            difference -= notesArray[3]*50;       
        }else if(difference > 20){
            notesArray[4] = parseInt(difference/20);
            difference -= notesArray[4]*20;       
        }else if(difference > 10){
            notesArray[5] = parseInt(difference/10);
            difference -= notesArray[5]*10;       
        }else if(difference > 5){
            notesArray[6] = parseInt(difference/5);
            difference -= notesArray[6]*5;       
        }else if(difference > 2){
            notesArray[7] = parseInt(difference/2);
            difference -= notesArray[7]*2;       
        }else if(difference = 1){
            notesArray[8] = parseInt(difference);
            difference -= notesArray[8];     
        }
    }
   

    return notesArray;
}

// displayController();