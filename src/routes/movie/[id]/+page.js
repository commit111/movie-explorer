/** @type {import('./$types').PageLoad} */
export async function load({fetch, params}) {
    //console.log(params.id);
    //get movie details from api
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZjY5ZDI5ZWI5MGZmMzJkM2FiYWI0MTI1NDJmZjdlMCIsInN1YiI6IjY1OGZhZmU0NjRmNzE2NjVkNjhlODY1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uCHwGo6Z6eCBkjEkxJiIcT4Ej2DeqZPM6ygRuWR4Xas'
        }
      };
      
    const res = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?language=en-US`, options)
    const movieDetail = await res.json()
    //console.log(movieDetail);
    if (res.ok) {
        return {
            props: { movieDetail }
        }
    }
} 
