const apiUrl = "https://api.themoviedb.org/3"
const apiKey = "fd7bff04ac1e8d64d6c38c9200b46fb8";

export default {
    getMovies() {
        return fetch(`${apiUrl}/movie/top_rated?api_key=${apiKey}`)
            .then((res) => res.json())
    },
    getDiscoverActionAndAdventure() {
        return fetch(`${apiUrl}/discover/movie?api_key=${apiKey}&with_genres=28,12`)
            .then((res) => res.json())
    },
    getDiscoverRomanticComedics() {
        return fetch(`${apiUrl}/discover/movie?api_key=${apiKey}&with_genres=35,10749`)
            .then((res) => res.json())
    },
    getDiscoverTvHorror() {
        return fetch(`${apiUrl}/discover/movie?api_key=${apiKey}&with_genres=27`)
            .then((res) => res.json())
    },
    getPopular() {
        return fetch(`${apiUrl}/movie/popular?api_key=${apiKey}`)
            .then((res) => res.json())
    },
    getVideo(id) {
        return fetch(`${apiUrl}/movie/${id}/videos?api_key=${apiKey}`)
            .then((res) => res.json())
    }
}