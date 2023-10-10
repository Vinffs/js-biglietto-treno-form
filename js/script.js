const costKm = 0.21;
const discountMinor = 0.20;
const discountElder = 0.40;
let totalCost, discountedCost, passengerCar;

const submitData = document.querySelector('.btn-genera');
console.log(submitData);

submitData.addEventListener('click',
  function () {
    const fullName = document.getElementById('fullName').value;
    const totalKm = parseInt(document.getElementById('totalKm').value);
    const age = document.getElementById('age').value;

    if (fullName === '' || !isNaN(fullName)) {
      alert('Attezione! Il nome inserito non è valido. Si prega di verificare')

    } else if ((totalKm === '' || isNaN(totalKm))) {
      alert('Attezione! Il valore inserito non è valido. Si prega di verificare')

    } else if (age === 'no-selection') {
      alert('Attezione! Si prega di selezione la fascia d\'età')

    } else {

      totalCost = (costKm * totalKm);

      if (age === 'minor') {
        totalCost -= (totalCost * discountMinor);
        document.getElementById('ticketType').innerHTML = `Biglietto Under 18`;
      } else if (age === 'elder') {
        totalCost -= (totalCost * discountElder);
        document.getElementById('ticketType').innerHTML = `Biglietto Over 65`;
      } else {
        totalCost;
        document.getElementById('ticketType').innerHTML = `Biglietto Standard`;
      }
    }

    function numGenerator(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min)
    }
    passengerCar = numGenerator(1, 10);
    numberCP = numGenerator(1, 100000);

    const displayNone = document.getElementById('ticketGenerator');
    displayNone.classList.remove('d-none');

    document.getElementById('namePassenger').innerHTML = `${fullName}`;
    document.getElementById('ticketPrice').innerHTML = `${totalCost.toFixed(2)} &euro;`;
    document.getElementById('passengerCar').innerHTML = `${passengerCar}`;
    document.getElementById('numberCP').innerHTML = `${numberCP}`;


  }
)
