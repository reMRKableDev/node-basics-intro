/**
 * @function getCharacters
 * @description - This function will get all the characters from the API and display them in the DOM
 */
const getCharacters = () => {
  axios
    .get("https://ih-crud-api.herokuapp.com/characters")
    .then((response) => {
      const { data } = response;

      let str = "";

      // Each item is updated with an onclick() for updating and deleting
      data.forEach((character) => {
        str += `
              <li class="list-group-item">
                  ID: ${character.id} - ${character.name}
                  <span class="float-right">
                      <button class="btn btn-success" onclick="updateCharacter(${character.id})" >Update</button>
                      <button class="btn btn-danger" onclick="deleteCharacter(${character.id})" >Delete</button>
                  </span>
              </li>`;
      });

      // insert characters in the list in the html
      document.getElementById("characters-list").innerHTML = str;
    })
    .catch((err) =>
      console.log(`Error while getting the list of characters: ${err}`)
    );
};

// Automatically invoke function so the list renders when the DOM is ready
getCharacters();

/* ************************************************ */
/* ************************************************ */
/* ************************************************ */

// POST USING AXIOS (Create)
document
  .getElementById("new-character-form")
  .addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name-input").value;
    const occupation = document.getElementById("occupation-input").value;
    const weapon = document.getElementById("weapon-input").value;

    console.log(name);
    console.log(occupation);
    console.log(weapon);

    const newCharacterInfo = {
      name,
      occupation,
      weapon,
    };

    // ADD TO API
    axios
      .post("https://ih-crud-api.herokuapp.com/characters", newCharacterInfo)
      .then(() => {
        // call the getCharacters() function again
        // to get the array of all characters and display them on the DOM
        getCharacters();

        // Clear the form after submitting:
        document.getElementById("new-character-form").reset();
      })
      .catch((err) =>
        console.log(`Error while saving a new character: ${err}`)
      );
    // ...
  });

/* ************************************************ */
/* ************************************************ */
/* ************************************************ */

// PUT USING AXIOS (Update)
const charName = document.getElementById("update-name-input");
const charOccupation = document.getElementById("update-occupation-input");
const charWeapon = document.getElementById("update-weapon-input");
const charId = document.getElementById("char-id");

// 1. Render form with the current user data to edit.
const updateCharacter = (id) => {
  axios
    .get(`https://ih-crud-api.herokuapp.com/characters/${id}`)
    .then((response) => {
      const { id, name, occupation, weapon } = response.data;
      charName.value = name;
      charOccupation.value = occupation;
      charWeapon.value = weapon;
      charId.value = id;

      document.getElementById("update-form-div").style.display = "block";
    })
    .catch((error) => {
      error.response.status === 404
        ? alert(`The id ${charId} doesn't exist.`)
        : alert("Server error! Sorry.");

      console.log(
        "The error while getting a single character is: ",
        error.response
      );
    });
};

// 2. Update and submit form
document
  .getElementById("update-character-form")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    const charId = document.getElementById("char-id").value;

    const updatedCharacter = {
      name: charName.value,
      occupation: charOccupation.value,
      weapon: charWeapon.value,
    };

    axios
      .put(
        `https://ih-crud-api.herokuapp.com/characters/${charId}`,
        updatedCharacter
      )
      .then(() => {
        getCharacters();
        // clear the update form
        document.getElementById("update-character-form").reset();
        // hide the update form
        document.getElementById("update-form-div").style.display = "none";
      })
      .catch((error) =>
        console.log(`Error while updating a character: ${error}`)
      );
  });

/* ************************************************ */
/* ************************************************ */
/* ************************************************ */

// DELETE USING AXIOS (Delete)
const deleteCharacter = (id) => {
  // protect from deleting
  if (id == 1 || id == 2) {
    alert(`Character with id ${id} can't be deleted!`);
    return;
  }
  const toDelete = confirm("Are you sure you want to delete?");
  if (toDelete) {
    axios
      .delete(`https://ih-crud-api.herokuapp.com/characters/${id}`)
      .then((response) => {
        // Alert the success message
        alert(response.data);
        // fetch all characters
        getCharacters();
      })
      .catch((err) => console.log(`Err while deleting character: ${err}`));
  }
};
