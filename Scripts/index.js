function openPopup(title, description) {
    const popUp = document.getElementById('detailsPopup');
    const popTitle = document.getElementById('popupTitle');
    const popDescription = document.getElementById('popupDescription');

    popTitle.textContent = title;
    popDescription.textContent = description;
    popUp.style.display = 'flex';
}

function closePopup() {
    const close = document.getElementById('detailsPopup');
    close.style.display = 'none';
}