function isEven(num){
    if(num%2 === 0){
        return true;
    }else return false;
}

const displayController = (() => {
    const container = document.querySelector('.container');

    //creating and displaying elements to take input
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
    paidAmount.type = 'number';

    //adding event listeners to input elements (Checks for Enter key press)
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

    //displaying denominations for calculated amount
    const notesDisplay = (notesArray) => {
        const denominations = [2000,500,100,20,10,5,1];
        
        //creating the display for denominations
        const notesContainer = document.createElement('div');
        notesContainer.classList.add('notes-container');
        container.appendChild(notesContainer);

        const h1 = document.createElement('h2');
        h1.classList.add('remaining-amount');
        h1.textContent = 'Amount to be returned: Rs. '+ `${notesArray[7]}`;
        notesContainer.appendChild(h1);

        const h2 = document.createElement('h3');
        const h3 = document.createElement('h3');
        h2.classList.add('table-heading');
        h3.classList.add('table-heading');
        h2.textContent = 'Denomination';
        h3.textContent = 'No. of notes';
        notesContainer.appendChild(h2);
        notesContainer.appendChild(h3);

        //different colors for alternate rows 
        let tableDark = getComputedStyle(document.body).getPropertyValue('--tableDark');
        let tableLight = getComputedStyle(document.body).getPropertyValue('--tableLight');
        let textDark = getComputedStyle(document.body).getPropertyValue('--textDark');
        let textLight = getComputedStyle(document.body).getPropertyValue('--textLight');
      

        for(let i = 0; i < notesArray.length-1; i++){
            
            const p2 = document.createElement('p');
            const p3 = document.createElement('p');
           
            p2.classList.add('denomination');
            p3.classList.add('no-of-notes');

            p2.textContent = denominations[i];
            p3.textContent = notesArray[i];
            notesContainer.appendChild(p2);
            notesContainer.appendChild(p3);
            if(isEven(i)){  
                p2.setAttribute('style',`background:${tableDark};color:${textLight}`);
                p3.setAttribute('style',`background:${tableDark};color:${textLight}`);

            }else {
                p2.setAttribute('style',`background:${tableLight};color:${textDark}`);
                p3.setAttribute('style',`background:${tableLight};color:${textDark}`);  
            }
        }
    }
    //function to clear display
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

//function to calculate minimum number of notes required
const changeCalculator = () => {
    let difference = parseInt(displayController.paidAmount.value) - parseInt(displayController.billAmount.value);
    let notesArray = [0,0,0,0,0,0,0,difference]; //this array will contain number of notes required for each denomination
    const denominations = [2000,500,100,20,10,5,1]; //denominations available
    const container = document.querySelector('.container');

    //clears display and shows an error in case of invalid input
    if(difference < 0 || parseInt(displayController.paidAmount.value) < 0 || parseInt(displayController.billAmount.value) < 0){
        displayController.clearNotesDisplay();

        const errorMsg = document.createElement('div');
        errorMsg.classList.add('error-msg');
        errorMsg.textContent = 'Error: Invalid Input'
        
        container.appendChild(errorMsg);
        return;
    }
    //logic to calculate minimum number of notes required
    for(let i = 0;i < denominations.length;i++){
        if(difference >= denominations[i]){
            notesArray[i] = parseInt(difference/denominations[i]);
            difference -= notesArray[i]*denominations[i];
        }
    }
    displayController.notesDisplay(notesArray);
    return notesArray;
}
