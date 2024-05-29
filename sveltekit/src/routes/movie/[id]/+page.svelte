<script>
    import {fly} from "svelte/transition";
    /** @type {import('./$types').PageData} */
    export let data;

    //gives you the movie details
    let movieDetail = data.props.movieDetail;
    //console.log(movieDetail);
</script>

<div class="movie-details" 
    in:fly={{y: 50, duration: 500, delay: 500}} 
    out:fly={{y: 0, duration: 500}}>
    <div class="img-container">
        <img 
            src={"https://image.tmdb.org/t/p/original" + movieDetail.backdrop_path} 
            alt={movieDetail.title}
        />
    </div>
    <div class="txt-container">
        <h1>{movieDetail.title}</h1>
        <p class="overview">{movieDetail.overview}</p>
        <p> 
            <span>Release Date:</span> {movieDetail.release_date} <br/>
            <span>Genre: </span> {movieDetail.genres[0].name}<br/>
            <span>Budget:</span> ${movieDetail.budget / 1000000}M<br/>
            <span>Rating:</span> {movieDetail.vote_average} <br/>
            <span>Runtime:</span> {movieDetail.runtime}mins
        </p>
    </div>
</div>

<style>
    h1 {
        padding: 1rem 0rem 1rem;
    }
    p {
        padding: 0.5rem 0rem;
    }
    .img-container {
        width: 100%;
    }
    img {
        width: 100%;
        border-radius: 1rem;
    }
    .movie-details {
        margin: 2rem 20%;
    }
    span {
        font-weight: bold;
    }
</style>
