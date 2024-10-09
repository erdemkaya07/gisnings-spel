const gissaForm = document.querySelector('#gissa-form');
const gissaInput = document.querySelector('#gissa-input');
const gissaCount = document.querySelector('#gissaCount');
const message = document.querySelector('#message');
const btn = document.getElementById('submit');

const nummer = 33;

let gissa= 0;
const maxGissa = 10;


gissaForm.addEventListener('submit', e => {
  e.preventDefault();

gissa++;

if(gissaInput.value == nummer){
  console.log(`Bravo!  Du gissade rätt på ${gissa} försöket.`);
} else if (gissaInput.value > nummer) {
  console.log('Skriv ett mindre tal')
} else if (gissaInput.value < nummer) {
  console.log('Skriv ett större tal')
}

gissaCount.textContent = maxGissa - gissa;

if(gissa >= maxGissa && gissaInput.value !== nummer){
  message.textContent = `Tyvär! Nummre är ${nummer}`
  btn.disabled = true;
}
 
})


 /*  console.log(gissaInput)
  if(gissaInput.value == nummer) {
    console.log('dogru sayiyi girdiniz');
  } else if(gissaInput.value <= nummer){
    console.log('Girdigniz sayi kucuktur');
  } else {
    console.log('Girdigniz sayi buyuktur');
  } */


