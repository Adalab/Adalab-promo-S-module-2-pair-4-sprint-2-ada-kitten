"use strict";

const newForm = document.querySelector('.js-new-form');
/*newForm.classList.remove("collapsed")*/
const listElement = document.querySelector(".js-list");
const input_search_desc = document.querySelector('.js_in_search_desc');
const input_search_race = document.querySelector ('.js-in-search-race');
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const inputRace = document.querySelector('.js-input-race');
const labelMessageError = document.querySelector('.js-label-error');
const btnAdd = document.querySelector('.js-btn-add');
const btnCancel = document.querySelector('.js-btn-cancel');
const button = document.querySelector('.js-button');
const btnSearch = document.querySelector('.js-btn-search');
const msjBtnSearch = document.querySelector('.msj-btn-search');

const kittenData1 = {
  image: 'https://dev.adalab.es/gato-siames.webp',
  name: 'Anastacio',
  desc: ' Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.',
  race: 'Siamés',
};

const kittenData2 = {
   image: 'https://dev.adalab.es/sphynx-gato.webp',
   name: 'Fiona',
   desc:
  'Produce fascinación y curiosidad. Exótico, risueño, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo. ',
  race: 'Sphynx',
};

const kittenData3 = { 
 image: 'https://dev.adalab.es/maine-coon-cat.webp"',
 name: 'Cielo',
 desc:
  'Tienen la cabeza cuadrada y los ojos simétricos, risueño, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.',
  race: 'Maine Coon',
};

const kittenDataList = [kittenData1, kittenData2, kittenData3];

// ---------------------------ESTAS SON FUNCIONES-------------------- 

function renderkittenList (kittenDataList) {

  for (let i = 0; i < kittenDataList.length; i++) {
    listElement.innerHTML += renderKitten(kittenDataList[i]);
  }

}
renderkittenList(kittenDataList);

function renderKitten(kitten) {

const kittenContent = `<li class="card">
<article>
  <img
    class="card_img"
    src= "${kitten.image}"
    alt="gatito"
    
  />
  <h3 class="card_title">${kitten.name}</h3>
  <h4 class="card_race">${kitten.race}</h4>
  <p class="card_description">
            ${kitten.desc}
   </p>
</article>
</li>`;
return kittenContent;

}


function addNewKitten(event) {
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;

  if (valueDesc === '' || valuePhoto === '' || valueName === '') {

  labelMessageError.innerHTML = "¡Uy! parece que has olvidado algo"
  //completa el código
} else {
  //completa el código
}
}


function showNewCatForm() {
  newFormElement.classList.remove('collapsed');

}


function hideNewCatForm() {
  newFormElement.classList.add('collapsed');
}

const filterKitten = (event) => {
  
  event.preventDefault();
  const descrSearchText = input_search_desc.value;
  const descrSearchRace = input_search_race.value;


  if (descrSearchText === '')   {
    msjBtnSearch.innerHTML += 'no se ha rellenado el campo de descripción'
  }
  if (descrSearchRace === '' ) {
    msjBtnSearch.innerHTML = 'no ha rellenado el campo raza';    

  for (const kittenItem of kittenDataList) {
    //console.log(kittenData3.desc);
    kittenData1.innerHTML = `<li> ${kittenItem} </li>`;
    kittenData2.innerHTML = `<li> ${kittenItem} </li>`;
    kittenData3.innerHTML = `<li> ${kittenItem} </li>`;

  } 

if( kittenData1.desc.includes(descrSearchText) ) {
 listElement.innerHTML = renderKitten(kittenData1);
}

if( kittenData2.desc.includes(descrSearchText) ) {
 listElement.innerHTML += renderKitten(kittenData2);
}

if( kittenData3.desc.includes(descrSearchText) ) {
 listElement.innerHTML += renderKitten(kittenData3);
}
 }
}

const cancelNewKitten = (event) => {
  event.preventDefault();
  newForm.classList.add('collapsed');
}




// -------------------------ESTOS SON LOS EVENTOS-------------------------------
button.addEventListener('click', (event) => {
  //console.log('Holiis');
  event.preventDefault();
if (newForm.classList.contains('collapsed')) {
  newForm.classList.remove('collapsed');
} else {
 newForm.classList.add('collapsed');
}
});

btnAdd.addEventListener('click', addNewKitten);



btnCancel.addEventListener('click', cancelNewKitten);

btnSearch.addEventListener('click', filterKitten);
