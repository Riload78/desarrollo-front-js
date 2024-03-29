// MODEL
 const tweets = [{
    handler: '@usuario1',
    date: new Date().toISOString(),
    message: 'Eligendi fugiat veniam a neque omnis doloribus sequi porro expedita ullam excepturi.',
    likes: 40,
},
{
    handler: '@usuario2',
    date: new Date().toISOString(),
    message: 'Laborum ad animi officia dolore nisi necessitatibus a porro! Odit!',
    likes: 3,
},
{
    handler: '@usuario3',
    date: new Date().toISOString(),
    message: 'Ayer estuve en le parque y me lo pasé genial',
    likes: 34,
},
{
    handler: '@usuario4',
    date: new Date().toISOString(),
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    likes: 400,
}];


function parseTweets(data) {
    return data.map(data => ({
        handler : data.author,
        date: new Date().toISOString(),
        message: data.message,
        likes: data.likes.length
    }))
}

export async function getTweets() {
    //const tweets = [];

    const url = 'https://fake-tweets-api-kc.vercel.app/posts';

    return new Promise( (resolve, reject ) => {
        fetch(url)
            .then(response => response.json())
            .then(data => { 
                const tweets = parseTweets(data)
                resolve(tweets)
            })  // va estre llaves para evitar el retunr implicito del arrow function
            .catch( () => reject())
    })
}


