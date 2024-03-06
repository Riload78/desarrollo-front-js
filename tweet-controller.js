import { getTweets } from "./tweet-model.js";
import { buildTweet } from "./tweet-view.js";

// Controlador

export function tweetListController (tweetList) {

  const showTweetsButton = document.createElement( 'button' );
  showTweetsButton.textContent="Mostrar Tweets"
  tweetList.appendChild(showTweetsButton)
  
  // Asignar evento
  showTweetsButton.addEventListener('click', () => {
    getTweets()
      .then((tweets)=>{
      tweets.forEach(tweet => {
      
        const tweetItem = document.createElement('div');
      
        tweetItem.innerHTML = buildTweet(tweet);
      
        tweetList.appendChild(tweetItem)
      })

    })
    .catch((error)=>console.log("Error al obtener los tweets", error))
  })

}






