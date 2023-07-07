function getAllCharacters() {
  axios
    .get(`${baseURL}/characters`)
    .then((res) => {
      console.log(res.data);
      let characters = res.data;
      clearCharacters();
      for (let i = 0; i < characters.length; i++) {
        createCharacterCard(characters[i]);
      }
    })
    .catch((error) => console.log(error));
}

function getOneCharacter(evt) {
  let name = evt.target.getAttribute("id");

  axios
    .get(`${baseURL}/character/${name}`)
    .then((res) => {
      console.log(res.data);
      clearCharacters();
      createCharacterCard(res.data);
    })
    .catch((error) => console.log(error));
}

function getOldCharacter(evt) {
  evt.preventDefault();
  let inputAge = ageInput.value;

  axios
    .get(`${baseURL}/character?age=${inputAge}`)
    .then((res) => {
      console.log(res.data);
      let characters = res.data;
      clearCharacters();
      for (let i = 0; i < characters.length; i++) {
        createCharacterCard(characters[i]);
      }
    })
    .catch((error) => console.log(error));
}

function createNewCharacter(evt) {
  evt.preventDefault();

  let body = {
    firstName: newFirstInput.value,
    lastName: newLastInput.value,
    gender: newGenderDropDown.value,
    age: newAgeInput.value,
    likes: newLikesText.value,
  };

  axios
    .post(`${baseURL}/character`, body)
    .then((res) => {
      console.log(res.data);
      let characters = res.data;
      clearCharacters();
      for (let i = 0; i < characters.length; i++) {
        createCharacterCard(characters[i]);
      }
    })
    .catch((error) => console.log(error));
}

createForm.addEventListener("submit", createNewCharacter);

ageForm.addEventListener("submit", getOldCharacter);

for (let i = 0; i < charBtns.length; i++) {
  charBtns[i].addEventListener("click", getOneCharacter);
}

getAllBtn.addEventListener("click", getAllCharacters);
