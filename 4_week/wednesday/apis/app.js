const getResidentsBtn = document.querySelector(".getResidents");

const getResidents = () => {
  axios
    .get("https://swapi.dev/api/planets/?search=Alderaan")
    .then(function (response) {
      // handle success
      console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
};

getResidentsBtn.addEventListener("click", getResidents);
