<script>
    import PopularMovies from "../components/PopularMovies.svelte"
    import SearchMovies from "../components/SearchMovies.svelte"
    import {fly} from "svelte/transition";

    /** @type {import('./$types').PageData} */
    export let data;

    //gives you the list of movies
    //console.log(data.props.popular);

    let popular = data.props.popular;
</script>

<section in:fly={{y: 50, duration: 500, delay: 500}} out:fly={{y: 0, duration: 500}}>
    <SearchMovies/>
    <PopularMovies movies={popular} />
</section>
