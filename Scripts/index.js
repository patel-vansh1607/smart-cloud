function openPopup(title, description) {
    const popUp = document.getElementById('detailsPopup');
    const popTitle = document.getElementById('popupTitle');
    const popDescription = document.getElementById('popupDescription');

    popTitle.textContent = title;
    popDescription.textContent = description;
    popUp.style.display = 'flex';
}
