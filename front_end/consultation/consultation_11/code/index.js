let viewEpisodeButton = document.querySelector('#view-episode-button');
console.log(viewEpisodeButton);

let episodePicture = document.querySelector('.episode-picture-container > img');
console.log(episodePicture);

let episodeCard = document.querySelector('.episode-card');

let changePicture = () => {

   episodePicture.setAttribute("src", "./images/simpsons.png");
      //Метод 4 как изменить сразу несколько стилей при помощи свойства .className
      //в CSS надо создать еще один класс episode-card_mod и добавить туда новые стили
   episodeCard.className = 'episode-card episode-card_mod';
}

viewEpisodeButton.addEventListener('click', changePicture);