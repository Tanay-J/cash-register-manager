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

    const notesDisplay = (notesArray) => {
        const notesContainer = document.createElement('div');
        notesContainer.classList.add('notes-container');
        // notesContainer.textContent = 'Amount to be returned: '+ `${notesArray[9]}`;
        container.appendChild(notesContainer);

        const h1 = document.createElement('h2');
        h1.classList.add('remaining-amount');
        h1.textContent = 'Amount to be returned: '+ `${notesArray[9]}`;
        notesContainer.appendChild(h1);

        const h2 = document.createElement('h3');
        const h3 = document.createElement('h3');
        h2.classList.add('table-heading');
        h3.classList.add('table-heading');
        h2.textContent = 'Denomination';
        h3.textContent = 'No. of notes';
        notesContainer.appendChild(h2);
        notesContainer.appendChild(h3);

        for(let i = 0; i < notesArray.length-1; i++){
            
            const p2 = document.createElement('p');
            const p3 = document.createElement('p');
           
            p2.classList.add('note');
            p3.classList.add('no-of-notes');


            if(i == 0){
                p2.textContent = '1000';
                p3.textContent = `${notesArray[i]}`;
                // p2.setAttribute('style','backgroundColor')
                notesContainer.appendChild(p2);
                notesContainer.appendChild(p3);
            }else if(i == 1){
                p2.textContent = '500';
                p3.textContent = `${notesArray[i]}`;
                notesContainer.appendChild(p2);
                notesContainer.appendChild(p3);
            }else if(i == 2){
                p2.textContent = '100';
                p3.textContent = `${notesArray[i]}`;
                notesContainer.appendChild(p2);
                notesContainer.appendChild(p3);
            }else if(i == 3){
                p2.textContent = '50';
                p3.textContent = `${notesArray[i]}`;
                notesContainer.appendChild(p2);
                notesContainer.appendChild(p3);
            }else if(i == 4){
                p2.textContent = '20';
                p3.textContent = `${notesArray[i]}`;
                notesContainer.appendChild(p2);
                notesContainer.appendChild(p3);
            }else if(i == 5){
                p2.textContent = '10';
                p3.textContent = `${notesArray[i]}`;
                notesContainer.appendChild(p2);
                notesContainer.appendChild(p3);
            }else if(i == 6){
                p2.textContent = '5';
                p3.textContent = `${notesArray[i]}`;
                notesContainer.appendChild(p2);
                notesContainer.appendChild(p3);
            }else if(i == 7){
                p2.textContent = '2';
                p3.textContent = `${notesArray[i]}`;
                notesContainer.appendChild(p2);
                notesContainer.appendChild(p3);
            }else if(i == 8){
                p2.textContent = '1';
                p3.textContent = `${notesArray[i]}`;
                notesContainer.appendChild(p2);
                notesContainer.appendChild(p3);
            }

            
           

        }
    }
    return {billAmount,paidAmount,notesDisplay}
})();

const changeCalculator = () => {
    let difference = displayController.paidAmount.value - displayController.billAmount.value;
    let notesArray = [0,0,0,0,0,0,0,0,0,difference];

    for(let i = 0; i < notesArray.length-1; i++){
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
        }else if(difference == 1){
            notesArray[8] = parseInt(difference);
            difference -= notesArray[8];     
        }
    }
    displayController.notesDisplay(notesArray);
   

    return notesArray;
}

// displayController();