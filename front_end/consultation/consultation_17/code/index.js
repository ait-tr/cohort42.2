const resultButton = document.querySelector("#get-data");
const dataContainer = document.querySelector(".data-container");
const loadingId = document.querySelector("#load-ind");

let dataArray = [];
const getUserData = async () => {
   //Очистка контейнера перед новым запросом
   dataContainer.innerHTML = '';
   try {
      loadingId.classList.remove("hidden");
      resultButton.setAttribute("disabled", "");

      const response = await fetch("https://randomuser.me/api/");
      const userData = await response.json();

      if (response.ok) {
         const person = {
            fullName: `${userData.results[0].name.title} ${userData.results[0].name.first} ${userData.results[0].name.last}`,
            userEmail: userData.results[0].email,
            pictureUrl: userData.results[0].picture.medium,
         };
         //Второй вариант, мутируем массив
         dataArray.push(person);
         //Третий вариант с массивом
         /* dataArray = [...dataArray, person]; */
         //Первый вариант
         /* const dataDiv = document.createElement("div");
         dataDiv.innerHTML = `
      <img src = ${person.pictureUrl}>
      <div>${person.fullName}</div>
      <div>${person.userEmail}</div>
      dataContainer.appendChild(dataDiv);
      ` */
         
         dataArray.forEach((person)=>{
         const dataDiv = document.createElement("div");
         dataDiv.innerHTML = `
      <img src = ${person.pictureUrl}>
      <div>${person.fullName}</div>
      <div>${person.userEmail}</div>
      `;
      dataContainer.appendChild(dataDiv);
         })
      } else {
         throw new Error("status 400 or 500");
      }
   } catch (error) {
      console.log(error);
   } finally {
      loadingId.classList.add("hidden");
      resultButton.removeAttribute("disabled");
   }

};

resultButton.addEventListener("click", getUserData);
