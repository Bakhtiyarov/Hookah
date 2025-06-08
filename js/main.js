const range = document.getElementById('duration');
const durationText = document.getElementById('duration-value');
const priceText = document.getElementById('price');

function updatePrice(value) {
    const basePrice = 160; // for 1 hour
    const pricePerHour = 60;
    return basePrice + (value - 1) * pricePerHour;
}

range.addEventListener('input', () => {
    const hours = range.value;
    durationText.textContent = `${hours} hours`;
    priceText.textContent = `$${updatePrice(hours)}`;
});


function openStep1Modal() {
    document.getElementById('overlay').classList.add('active');
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('modalStep1').classList.add('active');
}

function goToStep2() {
    document.getElementById('modalStep1').classList.remove('active');
    document.getElementById('modalStep2').classList.add('active');
}

function finishOrder() {
    document.getElementById('modalStep2').classList.remove('active');
    document.getElementById('modalThankYou').classList.add('active');
}

function closeAllModals() {
    document.getElementById('modalStep1').classList.remove('active');
    document.getElementById('modalStep2').classList.remove('active');
    document.getElementById('modalThankYou').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
    document.getElementById('overlay').style.display = 'none';
}

function closeOnOutsideClick(event) {
    if (event.target.classList.contains('overlay')) {
        closeAllModals();
    }
}