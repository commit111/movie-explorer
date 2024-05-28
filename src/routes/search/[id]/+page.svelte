<script>
    import MovieCard from "../../../components/MovieCard.svelte";
    /** @type {import('./$types').PageData} */
    export let data;

    //gives you the searched movie results
    let searchedMovie = data.props.searchedMovie.results;
    console.log(searchedMovie);
</script>

<div class="searched-movies">
    {#each searchedMovie as movie}
        <MovieCard {movie}/>
    {/each}
</div>

<style>
    .searched-movies {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-column-gap: 1rem;
        grid-row-gap: 2rem;
        height: 20vh;
    }
</style>