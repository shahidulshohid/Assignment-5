

// show the section by donation and history button
document.getElementById('history-btn').addEventListener('click', function(){

    showSectionById('history-section')

    document.getElementById('history-btn').classList.add('bg-[#B4F461]' );

    document.getElementById('donation-btn').classList.remove('bg-[#B4F461]');
}); 


document.getElementById('donation-btn').addEventListener('click', function(){

    document.getElementById('donation-btn').classList.add('bg-[#B4F461]')

    document.getElementById('history-btn').classList.remove('bg-[#B4F461]')

    showSectionById('donation-section');
});

// section button of noakhali
document.getElementById('noakhali-btn').addEventListener('click', function(){

    const inputValue = getTextFieldValueById('noakhali-input');

    // inputValue validation here 
    if(isNaN(inputValue) || inputValue <= 0 || inputValue === ''){
        
        return alert('Invalid Number');
    }
    
    // noakhali-balance update 
    const noakhaliBalance = document.getElementById('noakhali-balance').innerText;
    let noakhaliBalanceNumber = parseFloat(noakhaliBalance);
    noakhaliBalanceNumber += inputValue;
    document.getElementById('noakhali-balance').innerText = noakhaliBalanceNumber;

    // main balance update 
    const mainBalance = document.getElementById('main-balance').innerText;
    let mainBalanceNumber = parseFloat(mainBalance);
    mainBalanceNumber -= inputValue;
    document.getElementById('main-balance').innerText = mainBalanceNumber;
    
})
