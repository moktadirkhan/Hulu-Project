export const Server={
    API_KEY : process.env.API_KEY
}

export default{
    fetchTrending:{
        title:'Trending',
        url: `/trending/all/week?api_key=${Server.API_KEY}&language=en-US`
    },
    fetchAnimation:{
        title:'Animation',
        url: `/search/company?api_key=${Server.API_KEY}&query=Animation&page=1`
    },
    fetchTopRated:{
        title:'Top Rated',
        url: `/movie/top_rated?api_key=${Server.API_KEY}&language=en-US&page=1`
    },
    fetchActionMovies:{
        title:'Action Movies',
        url: `/search/company?api_key=${Server.API_KEY}&query=action`
    },
    fetchComedyMovies:{
        title:'Comedy Movies',
        url: `/search/company?api_key=${Server.API_KEY}&query=comedy&page=1`
    },
    fetchHorrorMovies:{
        title:'Horror Movies',
        url: `/search/company?api_key=${Server.API_KEY}&query=Horror&page=1`
    },
    fetchRomanceMovies:{
        title:'Romance Movies',
        url: `/search/company?api_key=${Server.API_KEY}&query=Romance&page=1`
    },
    fetchMystery:{
        title:'Mystery',
        url: `/search/company?api_key=${Server.API_KEY}&query=Mystery&page=1`
    },
    fetchTV:{
        title:'TV',
        url: `/search/company?api_key${Server.API_KEY}&query=Tv&page=1`
    },
    fetchSciFi:{
        title:'SciFi',
        url: `/search/company?api_key=${Server.API_KEY}&query=Sci-Fi&page=1`
    },
    fetchWestern:{
        title:'Western',
        url: `/search/company?api_key=${Server.API_KEY}&query=Western&page=1`
    },
}