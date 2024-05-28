/** @type {import('./$types').PageLoad} */
import 'dotenv/config'
export async function load({fetch}) {
    //get popular movies from api
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${process.env.TOKEN}`
        }
      };
      
    const res = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
        // .then(response => response.json())
        // .then(response => console.log(response))
        // .catch(err => console.error(err));
    const data = await res.json()
    //console.log(data);
    if (res.ok) {
        return {
            props: {popular: data.results}
        }
    }
    
} 
