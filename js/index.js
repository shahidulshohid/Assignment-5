

// show the section by history button
document.getElementById('history-btn').addEventListener('click', function(){

    showSectionById('history-section')

    document.getElementById('history-btn').classList.add('bg-[#B4F461]' );

    document.getElementById('donation-btn').classList.remove('bg-[#B4F461]');
}); 

// show the section by donation button
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

    // history section update 
    const historyContainer = document.getElementById('history-section')
    const heading = document.getElementById('heading1').innerText;
    const div = document.createElement('div');
    div.classList.add('border-2', 'border-gray-100', 'p-6', 'rounded-xl',)
    div.innerHTML = `
    <h4 class='text-xl font-bold my-3'>${noakhaliBalanceNumber} Taka is ${heading}</h4>
    <p> Date :${new Date()} </p>
    `
    historyContainer.appendChild(div);
})

// All section button handle 
// function buttonHandle(e){
// }
// ata index.html a kora ase somadhan korte hobe