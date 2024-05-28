document.addEventListener("DOMContentLoaded", function() {
    const numbersContainer = document.getElementById('numbers-container');

    for (let i = 1; i <= 75; i++) {
        const numberElement = document.createElement('div');
        numberElement.classList.add('number');
        numberElement.textContent = i;
        numberElement.addEventListener('click', function() {
            this.classList.toggle('clicked');
        });
        numbersContainer.appendChild(numberElement);
    }
});
