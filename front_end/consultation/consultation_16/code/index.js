const resultButton = document.querySelector("#get-data");
const dataContainer = document.querySelector(".data-container");

/* 
{results: Array(1), info: {…}}
info
: 
{seed: 'da5f74abb7531b74', results: 1, page: 1, version: '1.4'}
results
: 
Array(1)
0
: 
cell
: 
"8039530999"
dob
: 
{date: '2000-02-19T23:19:04.688Z', age: 24}
email
: 
"raj.jain@example.com"
gender
: 
"male"
id
: 
{name: 'UIDAI', value: '328912375362'}
location
: 
{street: {…}, city: 'Amaravati', state: 'Goa', country: 'India', postcode: 64574, …}
login
: 
{uuid: 'b5707049-b173-412f-aeb1-7f998a462967', username: 'sadbird522', password: 'thunder', salt: 'SgEmfi0P', md5: '6f4df0958469e31d8de5e8e3baf58895', …}
name
: 
{title: 'Mr', first: 'Raj', last: 'Jain'}
nat
: 
"IN"
phone
: 
"8624163487"
picture
: 
{large: 'https://randomuser.me/api/portraits/men/58.jpg', medium: 'https://randomuser.me/api/portraits/med/men/58.jpg', thumbnail: 'https://randomuser.me/api/portraits/thumb/men/58.jpg'}
registered
: 
{date: '2014-05-12T19:01:35.897Z', age: 10}
[[Prototype]]
: 
Object
length
: 
1 */



const getUserData = async () => {
   try {
      const response = await fetch("https://randomuser.me/api/");
      const userData = await response.json();
      /* console.log(response); */
      console.log(userData);

   //обработка ошибок 400-500
   if(response.ok){
      const person = {
         /*  const fullName = `${userData.results[0].name.title} ${userData.results[0].name.first} ${userData.results[0].name.last}`;
   const userEmail = userData.results[0].email;
   const pictureUrl = userData.results[0].picture.medium; */
         fullName: `${userData.results[0].name.title} ${userData.results[0].name.first} ${userData.results[0].name.last}`,
         userEmail: userData.results[0].email,
         pictureUrl: userData.results[0].picture.medium,
      };

      /* const imgBlock = document.createElement('img');
   imgBlock.setAttribute('src',pictureUrl);
   dataContainer.append(imgBlock);

   const nameBlock = document.createElement('div');
   nameBlock.textContent = fullName;
   dataContainer.append(nameBlock);

   const emailBlock = document.createElement('div');
   emailBlock.textContent = userEmail;
   dataContainer.append(userEmail); */

      dataContainer.innerHTML = `
      <img src = ${person.pictureUrl}>
      <div>${person.fullName}</div>
      <div>${person.userEmail}</div>
   `;

      /*  console.log(fullName);
   console.log(userEmail);
   console.log(pictureUrl); */
   }else{
      throw (new Error('status 400 or 500'));
   }
   } catch(error) {
      console.log(error); 
   }
};

/* setInterval(getUserData, 50); */

resultButton.addEventListener("click", getUserData);

