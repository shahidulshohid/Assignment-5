
// show the section by donation and history button 
function showSectionById(id){
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');

    //show the section with the provided id as parameter
    document.getElementById(id).classList.remove('hidden')
}
