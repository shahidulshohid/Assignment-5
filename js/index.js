

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

    // noakhali-balance update 
    const noakhaliBalance = document.getElementById('noakhali-balance').innerText;
    let noakhaliBalanceNumber = parseFloat(noakhaliBalance);
    let currentBalance = noakhaliBalanceNumber += inputValue;
    document.getElementById('noakhali-balance').innerText = currentBalance;
    console.log(currentBalance);
    
    
})
