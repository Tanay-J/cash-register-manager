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
            clearNotesDisplay();
            container.appendChild(p2);
            container.appendChild(paidAmount);
            paidAmount.focus();
        }

    })
    paidAmount.addEventListener('keypress',(e) => {
        if(e.key === 'Enter'){
            clearNotesDisplay();
            changeCalculator();
        }
    })

    const notesDisplay = (notesArray) => {
        const notesContainer = document.createElement('div');
        notesContainer.classList.add('notes-container');
        container.appendChild(notesContainer);

        const h1 = document.createElement('h2');
        h1.classList.add('remaining-amount');
        h1.textContent = 'Amount to be returned: Rs. '+ `${notesArray[9]}`;
        notesContainer.appendChild(h1);

        const h2 = document.createElement('h3');
        const h3 = document.createElement('h3');
        h2.classList.add('table-heading');
        h3.classList.add('table-heading');
        h2.textContent = 'Denomination';
        h3.textContent = 'No. of notes';
        notesContainer.appendChild(h2);
        notesContainer.appendChild(h3);

        let tableDark = getComputedStyle(document.body).getPropertyValue('--tableDark');
        let tableLight = getComputedStyle(document.body).getPropertyValue('--tableLight');
        let textDark = getComputedStyle(document.body).getPropertyValue('--textDark');
        let textLight = getComputedStyle(document.body).getPropertyValue('--textLight');
      

        for(let i = 0; i < notesArray.length-1; i++){
            
            const p2 = document.createElement('p');
            const p3 = document.createElement('p');
           
            p2.classList.add('denomination');
            p3.classList.add('no-of-notes');


            if(i == 0){
                p2.textContent = '1000';
                p3.textContent = `${notesArray[i]}`;
                p2.setAttribute('style',`background:${tableDark};color:${textLight}`);
                p3.setAttribute('style',`background:${tableDark};color:${textLight}`);
                notesContainer.appendChild(p2);
                notesContainer.appendChild(p3);
            }else if(i == 1){
                p2.textContent = '500';
                p3.textContent = `${notesArray[i]}`;
                p2.setAttribute('style',`background:${tableLight};color:${textDark}`);
                p3.setAttribute('style',`background:${tableLight};color:${textDark}`);  
                notesContainer.appendChild(p2);
                notesContainer.appendChild(p3);
            }else if(i == 2){
                p2.textContent = '100';
                p3.textContent = `${notesArray[i]}`;
                p2.setAttribute('style',`background:${tableDark};color:${textLight}`);
                p3.setAttribute('style',`background:${tableDark};color:${textLight}`);
                notesContainer.appendChild(p2);
                notesContainer.appendChild(p3);
            }else if(i == 3){
                p2.textContent = '50';
                p3.textContent = `${notesArray[i]}`;
                p2.setAttribute('style',`background:${tableLight};color:${textDark}`)
                p3.setAttribute('style',`background:${tableLight};color:${textDark}`);
                notesContainer.appendChild(p2);
                notesContainer.appendChild(p3);
            }else if(i == 4){
                p2.textContent = '20';
                p3.textContent = `${notesArray[i]}`;
                p2.setAttribute('style',`background:${tableDark};color:${textLight}`);
                p3.setAttribute('style',`background:${tableDark};color:${textLight}`);
                notesContainer.appendChild(p2);
                notesContainer.appendChild(p3);
            }else if(i == 5){
                p2.textContent = '10';
                p3.textContent = `${notesArray[i]}`;
                p2.setAttribute('style',`background:${tableLight};color:${textDark}`)
                p3.setAttribute('style',`background:${tableLight};color:${textDark}`);
                notesContainer.appendChild(p2);
                notesContainer.appendChild(p3);
            }else if(i == 6){
                p2.textContent = '5';
                p3.textContent = `${notesArray[i]}`;
                p2.setAttribute('style',`background:${tableDark};color:${textLight}`);
                p3.setAttribute('style',`background:${tableDark};color:${textLight}`);
                notesContainer.appendChild(p2);
                notesContainer.appendChild(p3);
            }else if(i == 7){
                p2.textContent = '2';
                p3.textContent = `${notesArray[i]}`;
                p2.setAttribute('style',`background:${tableLight};color:${textDark}`)
                p3.setAttribute('style',`background:${tableLight};color:${textDark}`);
                notesContainer.appendChild(p2);
                notesContainer.appendChild(p3);
            }else if(i == 8){
                p2.textContent = '1';
                p3.textContent = `${notesArray[i]}`;
                p2.setAttribute('style',`background:${tableDark};color:${textLight}`);
                p3.setAttribute('style',`background:${tableDark};color:${textLight}`);
                notesContainer.appendChild(p2);
                notesContainer.appendChild(p3);
            }

        }
    }
    const clearNotesDisplay = () => {
        const notesContainer = document.querySelector('.notes-container');
        const errorMsg = document.querySelector('.error-msg');
        if(notesContainer){            
            container.removeChild(notesContainer);
        }
        if(errorMsg){
            container.removeChild(errorMsg);
        }
    }
    return {billAmount,paidAmount,notesDisplay,clearNotesDisplay}
})();

const changeCalculator = () => {
    let difference = parseInt(displayController.paidAmount.value) - parseInt(displayController.billAmount.value);
    let notesArray = [0,0,0,0,0,0,0,0,0,difference];
    const container = document.querySelector('.container');

    if(difference < 0 || parseInt(displayController.paidAmount.value) < 0 || parseInt(displayController.billAmount.value) < 0){
        displayController.clearNotesDisplay();

        const errorMsg = document.createElement('div');
        errorMsg.classList.add('error-msg');
        errorMsg.textContent = 'Error: Bill amount greater than cash given'
        
        container.appendChild(errorMsg);
        return;
    }

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