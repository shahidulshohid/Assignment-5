

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

// section button
document.getElementById('noakhali-btn').addEventListener('click', function(){
    const value = getTextFieldValueById('noakhali-input');
    console.log(value);
    
})
