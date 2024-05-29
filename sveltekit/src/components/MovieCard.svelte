<script>
    export let movie;
</script>

<div class="movie-card">
    <a data-sveltekit-preload-data data-sveltekit-noscroll href={"/movie/" + movie.id}>
        <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt={movie.title} />
    </a>
    <div class="description">
        <h2>{movie.title}</h2>
        <p>{movie.release_date}</p>
    </div>
</div>

<style>
    img {
        width: 100%;
        height: 50vh;
        object-fit: cover;
        border-radius: 1rem;
        margin-bottom: 0.2rem;
    }
    h2 {
        font-size: 1.4rem;
    }
    .description {
        height: 15vh;
    }
    p {
        font-size: 0.9rem;
    }
    .movie-card {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 0.3rem;
    }
</style>