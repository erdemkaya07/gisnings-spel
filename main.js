const gissaForm = document.querySelector('#gissa-form');
const gissaInput = document.querySelector('#gissa-input');
const gissaCount = document.querySelector('#gissaCount');
const message = document.querySelector('#message');
const helpToUser = document.querySelector('#helpToUser');
const btn = document.getElementById('submit');

const nummer = 33;
let gissa= 0;
const maxGissa = 10;


gissaForm.addEventListener('submit', e => {
  e.preventDefault();

  if(gissaInput.value < 1 || gissaInput.value > 100) {
    alert('Du måste skriva mellan 1 och 100');
    return
  } else if (isNaN(gissaInput.value)) {
    alert('Du måste skriva ett nummer')
    return
  }

gissa++;

  if(gissaInput.value == nummer){
    message.textContent =`Bra!  Du gissade rätt på ${gissa} försöket.`;
    message.style.fontWeight = '700';
    message.style.color = 'white';
  } else if (gissaInput.value > nummer) {
    helpToUser.textContent = `Skriv ett mindre tal`
    helpToUser.style.fontWeight = '700';
  } else if (gissaInput.value < nummer) {
    helpToUser.textContent = `Skriv ett större tal`
    helpToUser.style.fontWeight = '700';
  }
gissaCount.textContent = maxGissa - gissa;

if(gissa >= maxGissa && gissaInput.value !== nummer){
  message.textContent = `Tyvär! Nummer är ${nummer}`
  btn.disabled = true;
}

})


