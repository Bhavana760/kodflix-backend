const axios = require('axios');

// @desc    Get trending movies from TMDB
// @route   GET /api/movies/trending
// @access  Public
const getTrendingMovies = async (req, res) => {
    try {
        const tmdbApiKey = process.env.TMDB_API_KEY;

        if (!tmdbApiKey || tmdbApiKey === 'your_tmdb_api_key_here') {
            return res.status(500).json({ message: 'TMDB API key is missing or invalid in server configuration' });
        }

        const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${tmdbApiKey}`);

        // Send back the data from TMDB
        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error fetching trending movies:', error.response?.data || error.message);
        res.status(500).json({ message: 'Failed to fetch movies from TMDB' });
    }
};

module.exports = { getTrendingMovies };
