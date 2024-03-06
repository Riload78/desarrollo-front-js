import { tweets } from "./tweet-model.js";
import { buildTweet } from "./tweet-view.js";

// Controlador

export function tweetListController (tweetList) {

  const showTweetsButton = document.createElement( 'button' );
  showTweetsButton.textContent="Mostrar Tweets"
  tweetList.appendChild(showTweetsButton)
  
  // Asignar evento
  showTweetsButton.addEventListener('click', () => {
  
    tweets.forEach(tweet => {
    
      const tweetItem = document.createElement('div');
    
      tweetItem.innerHTML = buildTweet(tweet);
    
      tweetList.appendChild(tweetItem)
    })
  })

}






