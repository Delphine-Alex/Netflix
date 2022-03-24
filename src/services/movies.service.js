const apiUrl = "https://api.themoviedb.org/3"
const apiKey = "fd7bff04ac1e8d64d6c38c9200b46fb8";

export default {
    getMovies() {
        return fetch(`${apiUrl}/movie/top_rated?api_key=${apiKey}`)
            .then((res) => res.json())
    },
    getVideo(id) {
        return fetch(`${apiUrl}/movie/${id}/videos?api_key=${apiKey}`)
            .then((res) => res.json())
    }
}