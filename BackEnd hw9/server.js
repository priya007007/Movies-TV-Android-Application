//server.js
var express = require('express');
const path = require('path');
var app = express();
const cors = require('cors');
const e = require('express');
app.use(cors());
app.use(express.static(path.join(__dirname, 'dist/frontend')))

app.get('/Typehead/:name', function (req, res) {   //
    const name = req.params.name
    const axios = require('axios');
    axios.get('https://api.themoviedb.org/3/search/multi?api_key=apiKey&language=en-US&query=' + name).then(resp => {
        let array_typehead = resp.data["results"]
        var count = 0;
        let list_7 = [];
        let name = "";
        let length_array = array_typehead.length;
        for (var i = 0; i < length_array; i++) {
            if (count < 7) {
                if (array_typehead[i].media_type === "movie" || array_typehead[i].media_type === "tv") {
                    if (array_typehead[i].backdrop_path === null || array_typehead[i].backdrop_path === "" || array_typehead[i].poster_path === null || array_typehead[i].poster_path === "") {
                    }
                    else {
                        if (array_typehead[i].media_type === "movie") {
                            name = array_typehead[i].title
                        }
                        else {
                            name = array_typehead[i].name
                        }

                        list_7[count] = {
                            media_type: array_typehead[i].media_type,
                            name: name,
                            id: array_typehead[i].id,
                            backdrop_path: "https://image.tmdb.org/t/p/w500" + array_typehead[i].backdrop_path
                        }
                        count = count + 1;
                    }
                }
            }
        }

        res.json(list_7)  //CH
    });
})
app.get('/slideshow', function (req, res) { //hw8
    const axios = require('axios');
    axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=apiKey&language=en-US&page=1').then(resp => {
        let x = resp.data["results"];
        let list_5 = {};
        k=0
        for (i = 0; i < 5; i++) {
            let temp_poster = "https://image.tmdb.org/t/p/original" + x[i].backdrop_path
            list_5[k] = {
                backdrop_path: temp_poster,
                title: x[i].title,
                id: x[i].id
            };
            k++
        }
        res.send(list_5);
    });
})

/////////////////////////////////////////////////////////////
app.get('/movieNowPlaying_android', function (req, res) { //ANDOIRD
    const axios = require('axios');
    axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=apiKey&language=en-U&page=1').then(resp => {
        let x = resp.data["results"];
        let length_now_movies = x.length;
        if(length_now_movies>6){length_now_movies=6}
        let list_6 = {};
        k = 0
        for (i = 0; i < length_now_movies; i++) {
            if(x[i].poster_path ===""|| x[i].poster_path===null){}
            else{
            let temp_poster = "https://image.tmdb.org/t/p/original" + x[i].poster_path
            list_6[k] = {
                poster_path: temp_poster,
                title: x[i].title,
                id: x[i].id,
                type:"movie"
            };
            k++
        }}
        res.send(list_6);
    });
})

app.get('/tvNowPlaying_android', function (req, res) { //ANDOIRD
    const axios = require('axios');
    axios.get('https://api.themoviedb.org/3/trending/tv/day?api_key=apiKey').then(resp => {
        let x = resp.data["results"];
        let length_now_movies = x.length;
        if(length_now_movies>6){length_now_movies=6}
        let list_6 = {};
        k = 0
        for (i = 0; i < length_now_movies; i++) {
            if(x[i].poster_path ===""|| x[i].poster_path===null){}
            else{
            let temp_poster = "https://image.tmdb.org/t/p/original" + x[i].poster_path
            list_6[k] = {
                poster_path: temp_poster,
                title: x[i].name,
                id: x[i].id,
                type:"tv"
            };
            k++
        }}
        res.send(list_6);
    });
})
/////////////////////////////////////////////////////////////

app.get('/TopRatedTV_android', function (req, res) { //ANDOIRD
    const axios = require('axios');
    axios.get('https://api.themoviedb.org/3/tv/top_rated?api_key=apiKey&language=en-US&page=1').then(resp => {
        let x = resp.data["results"];
        let list_5 = {};
        let length_A = x.length;
        if(length_A>10){length_A=10}
        k = 0
        for (i = 0; i < length_A; i++) {
            let temp_poster = "https://image.tmdb.org/t/p/w780" + x[i].poster_path
            list_5[k] = {
                poster_path: temp_poster,
                title: x[i].name,
                id: x[i].id
            };
            k++
        }
        res.send(list_5);
    });
})

app.get('/TopRatedMovies_android', function (req, res) { //ANDOIRD
    const axios = require('axios');
    axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=apiKey&language=en-US&page=1').then(resp => {
        let x = resp.data["results"];
        let list_5 = {};
        let length_B = x.length;
        if(length_B>10){length_B=10}
        k = 0
        for (i = 0; i < length_B; i++) {
            let temp_poster = "https://image.tmdb.org/t/p/w780" + x[i].poster_path
            list_5[k] = {
                poster_path: temp_poster,
                title: x[i].title,
                id: x[i].id
            };
            k++
        }
        res.send(list_5);
    });
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////

app.get('/PopularTV_android', function (req, res) { //ANDOIRD
    const axios = require('axios');
    axios.get('https://api.themoviedb.org/3/tv/popular?api_key=apiKey').then(resp => {
        let x = resp.data["results"];
        let list_5 = {};
        k = 0
        let length_popular_tv = x.length;
        if(length_popular_tv>10){length_popular_tv=10}
        for (i = 0; i < length_popular_tv; i++) {
            let temp_poster = "https://image.tmdb.org/t/p/w780" + x[i].poster_path
            list_5[k] = {
                poster_path: temp_poster,
                title: x[i].name,
                id: x[i].id
            };
            k++
        }
        res.send(list_5);
    });
})


app.get('/PopularMovies_android', function (req, res) { //ANDOIRD
    const axios = require('axios');
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=apiKey').then(resp => {
        let x = resp.data["results"];
        let list_5 = {};
        k = 0
        let length_popular_movies = x.length;
        if(length_popular_movies>10){length_popular_movies=10}
        for (i = 0; i < length_popular_movies; i++) {
            let temp_poster = "https://image.tmdb.org/t/p/w780" + x[i].poster_path
            list_5[k] = {
                poster_path: temp_poster,
                title: x[i].title,
                id: x[i].id
            };
            k++
        }
        res.send(list_5);
    });
})
///////////////////////////////////////////////////////////////////////
//HW9 DETAILS MOVIES


//trial run
app.post('/postdata', (req, res) => {
    //var data = req.body.data; // your data 
    //console.log(data); 
    // do something with that data (write to a DB, for instance) 
    // res.status(200).json({ 
    // 	message: "JSON Data received successfully" 
    // });
    res.send("POST Request Called");

});



app.get('/movie/moviesVideo/:id', function (req, res) { //ANDOIRD  ---- (1)
    const axios = require('axios');
    const id = req.params.id
    axios.get('https://api.themoviedb.org/3/movie/' + id + '/videos?api_key=apiKey&language=en-US').then(resp => {

        let x = resp.data["results"];
        var k = 0;
        for (i = 0; i < x.length; i++) {
            if (x[i].type === "Trailer") {

                if (x[i].key === "" || x[i].key === null) {
                    video = ""
                }
                else {
                    video = x[i].key
                }
                k = 1;
                break;
            }
        }
        if (k === 0) {
            video = "";
        }
        res.send(video);
    });
})

app.get('/tv/moviesVideo/:id', function (req, res) { //ANDOIRD  ---- (1)
    const axios = require('axios');
    const id = req.params.id
    axios.get('https://api.themoviedb.org/3/tv/'+id+'/videos?api_key=apiKey&language=en-US').then(resp => {

        let x = resp.data["results"];
        var k = 0;
        for (i = 0; i < x.length; i++) {
            if (x[i].type === "Trailer") {

                if (x[i].key === "" || x[i].key === null) {
                    video = ""
                }
                else {
                    video = x[i].key
                }
                k = 1;
                break;
            }
        }
        if (k === 0) {
            video = "";
        }
        res.send(video);
    });
})
///////////////////////////////////////////////////////////////////////
app.get(`/movie/MovieDetails/:id`, function (req, res) { //ANDROID movie details ----(2)
    const axios = require('axios');
    const id = req.params.id
    axios.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=apiKey&language=en-US').then(resp => {

        result8 = {}
        gen_belong = resp.data["backdrop_path"];
        if (gen_belong == ""||gen_belong == null) {
            result8.backdrop_path = "https://bytes.usc.edu/cs571/s21_JSwasm00/hw/HW6/imgs/movie-placeholder.jpg"
        }
        else {
            result8.backdrop_path = "https://image.tmdb.org/t/p/w500" + gen_belong
        }

        result8.title = resp.data["title"]

        gen_temp = resp.data["genres"]
        if (gen_temp.length === 0) {
            genre_final_result = ""
            result8.genre = genre_final_result
        }
        else {
            let genre_name = ""
            let t = 0;
            for (t = 0; t < gen_temp.length; t++) {
                genre_name = genre_name + gen_temp[t].name + ", "
            }
            genre_final_result = genre_name.slice(0, -2)
            result8.genre = genre_final_result
        }

        release_temp = resp.data["release_date"] //empty release date CHECK
        release_temp = release_temp.slice(0, 4)
        result8.release_date = release_temp

        result8.overview = resp.data["overview"]

        result8.imdb = resp.data["imdb_id"]
        console.log(resp.data["imdb_id"], "resp.data[imdb_id]");
        res.json(result8);

    })
})


app.get(`/tv/MovieDetails/:id`, function (req, res) { //ANDROID movie details ----(2)
    const axios = require('axios');
    const id = req.params.id
    axios.get('https://api.themoviedb.org/3/tv/'+id+'?api_key=apiKey&language=en-US').then(resp => {

        result8 = {}
        gen_belong = resp.data["backdrop_path"];
        if (gen_belong == ""||gen_belong == null) {
            result8.backdrop_path = "https://bytes.usc.edu/cs571/s21_JSwasm00/hw/HW6/imgs/movie-placeholder.jpg"
        }
        else {
            result8.backdrop_path = "https://image.tmdb.org/t/p/w500" + gen_belong
        }

        result8.title = resp.data["name"]

        gen_temp = resp.data["genres"]
        if (gen_temp.length === 0) {
            genre_final_result = ""
            result8.genre = genre_final_result
        }
        else {
            let genre_name = ""
            let t = 0;
            for (t = 0; t < gen_temp.length; t++) {
                genre_name = genre_name + gen_temp[t].name + ", "
            }
            genre_final_result = genre_name.slice(0, -2)
            result8.genre = genre_final_result
        }

        release_temp = resp.data["first_air_date"] //empty release date CHECK
        release_temp = release_temp.slice(0, 4)
        result8.release_date = release_temp

        result8.overview = resp.data["overview"]

        result8.imdb = "tt0831387"// ??????????????????????????????/
        res.json(result8);

    })
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.get(`/movie/Android_Movie_Cast_Details/:id`, function (req, res) { //ANDROID cast details ----(3)
    const axios = require('axios');
    const id = req.params.id
    axios.get('https://api.themoviedb.org/3/movie/' + id + '/credits?api_key=apiKey&language=en-US').then(resp => {
        cast_temps = resp.data["cast"]
        cast_list = []
        j = 0
        var l = cast_temps.length
        if (l > 6) {
            l = 6
        }
        for (let i = 0; i < l; i++) {
            let temp_poster = cast_temps[i].profile_path;
            if (temp_poster === null || temp_poster === "") { }
            else {
                cast_list[j] = {
                    full_profile_path: "https://image.tmdb.org/t/p/w500/" + temp_poster,
                    character: cast_temps[i].character,
                    name: cast_temps[i].name
                }; j++
            }
        }
        res.json(cast_list)
    })
})

app.get(`/tv/Android_Movie_Cast_Details/:id`, function (req, res) { //ANDROID cast details ----(3)
    const axios = require('axios');
    const id = req.params.id
    axios.get('https://api.themoviedb.org/3/tv/'+id+'/credits?api_key=apiKey&language=en-US').then(resp => {
        cast_temps = resp.data["cast"]
        cast_list = []
        j = 0
        var l = cast_temps.length
        if (l > 6) {
            l = 6
        }
        for (let i = 0; i < l; i++) {
            let temp_poster = cast_temps[i].profile_path;
            if (temp_poster === null || temp_poster === "") { }
            else {
                cast_list[j] = {
                    full_profile_path: "https://image.tmdb.org/t/p/w500/" + temp_poster,
                    character: cast_temps[i].character,
                    name: cast_temps[i].name
                }; j++
            }
        }
        res.json(cast_list)
    })
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.get(`/movie/Movie_Review_List/:id`, function (req, res) {//ANDROID review ----(3)
    const axios = require('axios');
    const id = req.params.id
    axios.get('https://api.themoviedb.org/3/movie/' + id + '/reviews?api_key=apiKey&language=en-US&page=1').then(resp => {
        review_temps = resp.data["results"]
        review_list = []
        j = 0
        length_list = review_temps.length
        if (length_list > 3) {
            length_list = 3
        }
        for (let i = 0; i < length_list; i++) {
            tem_author_detail = review_temps[i].author_details
            temp_author = tem_author_detail.username

            rating = tem_author_detail.rating
            if (rating === null || rating === "") {
                rating = 0
            }

            review_list[j] = {
                username: temp_author,
                created_at: review_temps[i].created_at,
                content: review_temps[i].content,
                rating_here: rating
            }; j++

        }

        res.json(review_list)
    })
})

app.get(`/tv/Movie_Review_List/:id`, function (req, res) {//ANDROID review ----(3)
    const axios = require('axios');
    const id = req.params.id
    axios.get('https://api.themoviedb.org/3/tv/'+id+'/reviews?api_key=apiKey&language=en-US&page=1').then(resp => {
        review_temps = resp.data["results"]
        console.log("entered here");

        review_list = []
        j = 0
        length_list = review_temps.length
        if (length_list > 3) {
            length_list = 3
        }
        for (let i = 0; i < length_list; i++) {
            tem_author_detail = review_temps[i].author_details
            temp_author = tem_author_detail.username

            rating = tem_author_detail.rating
            if (rating === null || rating === "") {
                rating = 0
            }

            review_list[j] = {
                username: temp_author,
                created_at: review_temps[i].created_at,
                content: review_temps[i].content,
                rating_here: rating
            }; j++
            console.log("review_list",review_list);

        }

        res.json(review_list)
    })
})

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.get(`/movie/Recommended_Movies/:id`, function (req, res) { //ANDROID Reccomended Movie --------(6)
    const axios = require('axios');
    const id = req.params.id

    axios.get('https://api.themoviedb.org/3/movie/' + id + '/recommendations?api_key=apiKey&language=en-US&page=1').then(resp => {
        recc_temp = resp.data["results"]
        recc_length = recc_temp.length

        if (recc_length > 10) {
            recc_length = 10;
        }
        console.log("recc_length", recc_length);
        // if (recc_length === 0) {
        //     res.json("No Reccomended Movies")
        // }
        // else {
        recc_list = []
        let j = 0
        for (let i = 0; i < recc_length; i++) {
            if (recc_temp[i].poster_path === null || recc_temp[i].poster_path === "") {  }
            else {
                let temp_poster_recc = "https://image.tmdb.org/t/p/w500" + recc_temp[i].poster_path
                recc_list[j] = {
                    poster: temp_poster_recc,
                    id: recc_temp[i].id,
                     title: recc_temp[i].title,
                    type: "movie"

                }; 
                j++;

            }

        }
        res.json(recc_list)
    })
})


app.get(`/tv/Recommended_Movies/:id`, function (req, res) { //ANDROID Reccomended tv --------(6)
    const axios = require('axios');
    const id = req.params.id
   
    axios.get(' https://api.themoviedb.org/3/tv/'+id+'/recommendations?api_key=apiKey&language=en-US&page=1').then(resp => {
        recc_temp = resp.data["results"]

        recc_length = recc_temp.length

        if (recc_length > 10) {
            recc_length = 10;
        }

        recc_list = []
        let j = 0
        for (let i = 0; i < recc_length; i++) {
            if (recc_temp[i].poster_path === null || recc_temp[i].poster_path === "") { }
            else {

                let temp_poster_recc = "https://image.tmdb.org/t/p/w500" + recc_temp[i].poster_path
                recc_list[j] = {
                    poster: temp_poster_recc,
                    id: recc_temp[i].id,
                    title: recc_temp[i].name,
                    type: "tv"

                }; 
                j++;

            }

        }
        res.json(recc_list)
    })
})
//############################


// app.get('/tv/moviesVideo/:id', function (req, res) { //ANDOIRD  ---- (1)
//     const axios = require('axios');
//     const id = req.params.id
//     axios.get('https://api.themoviedb.org/3/movie/' + id + '/videos?api_key=apiKey&language=en-US').then(resp => {

//         let x = resp.data["results"];
//         var k = 0;
//         for (i = 0; i < x.length; i++) {
//             if (x[i].type === "Trailer") {

//                 if (x[i].key === "" || x[i].key === null) {
//                     video = ""
//                 }
//                 else {
//                     video = x[i].key
//                 }
//                 k = 1;
//                 break;
//             }
//         }
//         if (k === 0) {
//             video = "";
//         }
//         res.send(video);
//     });
// })
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.get('/search/:name', function (req, res) {
    const name = req.params.name
    const axios = require('axios');
    axios.get('https://api.themoviedb.org/3/search/multi?api_key=apiKey&language=en-US&page=1&include_adult=false&query=' + name).then(resp => {
        let array_typehead = resp.data["results"]
        let name = "";
        let released = "";
        var count = 0;
        let list_20 = [];
        let length_array = array_typehead.length;

        for (var i = 0; i < length_array; i++) {
            if (count < 20) {
                if (array_typehead[i].media_type === "movie" || array_typehead[i].media_type === "tv") {
                    if (array_typehead[i].backdrop_path === null || array_typehead[i].backdrop_path === "" || array_typehead[i].poster_path === null || array_typehead[i].poster_path === "") {
                    }
                    else {
                        var media;
                        if (array_typehead[i].media_type === "movie") {
                            name = array_typehead[i].title;
                            released = array_typehead[i].release_date
                            media ="MOVIE"
                        }
                        else {
                            name = array_typehead[i].name;
                            released = array_typehead[i].first_air_date
                            media ="TV"
                        }
                        if (released === "" || released === null) { released4 = "" }
                        else { released4 = released.slice(0, 4) }
                        vote_average =  array_typehead[i].vote_average
                        vote_average= vote_average/2;
                        list_20[count] = {
                            media_type:media,
                            name: name,
                            id: array_typehead[i].id,
                            backdrop_path: "https://image.tmdb.org/t/p/w500" + array_typehead[i].backdrop_path,
                            poster_path: "https://image.tmdb.org/t/p/w500" + array_typehead[i].poster_path,
                            vote_average: vote_average,
                            release_date: released4
                        }
                        count = count + 1;
                    }
                }
            }
        }

        res.json(list_20)  //CH
    });
})
///////////////////////////////////////////////////////////////////
app.get(`/popularMovies`, function (req, res) { //Popular Movies
    const axios = require('axios');
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=apiKey&language=en-US&page=1').then(resp => {
        let x = resp.data["results"];
        let movie_list = [];
        l = x.length;
        k = 0
        if (l > 24) {
            l = 24
        }
        for (let i = 0; i < l; i++) {
            if (x[i].poster_path === null || x[i].poster_path === "") { }
            else {
                let temp_poster = "https://image.tmdb.org/t/p/w500" + x[i].poster_path;
                movie_list[k] = {
                    poster: temp_poster,
                    title: x[i].title,
                    id: x[i].id,
                    media_type: "movie"
                }; k++
            }
        }
        res.send(movie_list);
    })
})


app.get(`/TopRatedMovies`, function (req, res) { //Top Rated
    const axios = require('axios');
    axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=apiKey&language=en-US&page=1').then(resp => {
        let x = resp.data["results"];
        let movie_list = [];
        l = x.length;
        j = 0
        if (l > 24) {
            l = 24
        }
        for (let i = 0; i < l; i++) {
            if (x[i].poster_path === null || x[i].poster_path === "") { }
            else {
                let temp_poster = "https://image.tmdb.org/t/p/w500" + x[i].poster_path;
                movie_list[j] = {
                    poster: temp_poster,
                    title: x[i].title,
                    id: x[i].id,
                    media_type: "movie"
                }; j++
            }
        }
        res.send(movie_list);
    })
})



app.get(`/TrendingMovies`, function (req, res) { //Trending Movies
    const axios = require('axios');
    axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=apiKey').then(resp => {
        let x = resp.data["results"];
        let movie_list = [];
        l = x.length;
        j = 0
        if (l > 24) {
            l = 24
        }
        for (let i = 0; i < l; i++) {

            if (x[i].poster_path === null || x[i].poster_path === "") { }
            else {
                let temp_poster = "https://image.tmdb.org/t/p/w500" + x[i].poster_path;
                movie_list[j] = {
                    poster: temp_poster,
                    title: x[i].title,
                    id: x[i].id,
                    media_type: "movie"
                }; j++
            }
        }
        res.send(movie_list);
    })
})


app.get(`/PopularTVshows`, function (req, res) { //Trending Movies
    const axios = require('axios');
    axios.get('https://api.themoviedb.org/3/tv/popular?api_key=apiKey&language=en-US&page=1').then(resp => {
        let x = resp.data["results"];
        let tv_list = [];
        j = 0
        l = x.length;
        if (l > 24) {
            l = 24
        }
        for (let i = 0; i < l; i++) {
            if (x[i].poster_path === null || x[i].poster_path === "") { }
            else {
                let temp_poster = "https://image.tmdb.org/t/p/w500" + x[i].poster_path;
                tv_list[j] = {
                    poster: temp_poster,
                    title: x[i].name,
                    id: x[i].id,
                    media_type: "tv"
                }; j++
            }
        }
        res.send(tv_list);
    })
})

app.get(`/TopRatedTV`, function (req, res) { //Trending Movies
    const axios = require('axios');
    axios.get('https://api.themoviedb.org/3/tv/top_rated?api_key=apiKey&language=en-US&page=1').then(resp => {
        let x = resp.data["results"];
        let tv_list = [];
        l = x.length;
        j = 0
        if (l > 24) {
            l = 24
        }
        for (let i = 0; i < l; i++) {
            if (x[i].poster_path === null || x[i].poster_path === "") { }
            else {
                let temp_poster = "https://image.tmdb.org/t/p/w500" + x[i].poster_path;
                tv_list[j] = {
                    poster: temp_poster,
                    title: x[i].name,
                    id: x[i].id,
                    media_type: "tv"
                }; j++
            }
        }
        res.send(tv_list);
    })
})

app.get(`/TVTrending`, function (req, res) { //Trending Movies
    const axios = require('axios');
    axios.get('https://api.themoviedb.org/3/trending/tv/day?api_key=apiKey').then(resp => {
        let x = resp.data["results"];
        let tv_list = [];
        j = 0;
        l = x.length;
        if (l > 24) {
            l = 24
        }
        for (let i = 0; i < l; i++) {
            if (x[i].poster_path === null || x[i].poster_path === "") { }
            else {

                let temp_poster = "https://image.tmdb.org/t/p/w500" + x[i].poster_path;
                tv_list[j] = {
                    poster: temp_poster,
                    title: x[i].name,
                    id: x[i].id,
                    media_type: "tv"
                };
                j++

            }
        }
        res.send(tv_list);
    })
})
//Details for movies/////////////////////////////////////////////////////////


app.get(`/MovieVideoDetails/:id`, function (req, res) { //Video Movie ----(1)
    const axios = require('axios');
    const id = req.params.id
    axios.get('https://api.themoviedb.org/3/movie/' + id + '/videos?api_key=apiKey&language=en-US&page=1').then(resp => {
        let y = resp.data["results"]

        kf = 0;

        let x = 0;
        for (x = 0; x < y.length; x++) {
            if (y[x].key && y[x].key !== "") {
                if (y[x].type === "Trailer" || y[x].type === "Teaser") {  //TEST IT OUT
                    result_video = y[x].key
                    kf = 9;
                    break;
                }
            }
        }
        if (kf !== 9) { // no value WORK ON THIS
            result_video = "tzkWB85ULJY";
        }
        res.json(result_video);
    })
})

app.get(`/MovieDetailsServer/:id`, function (req, res) { //Movie details ----(2)
    const axios = require('axios');
    const id = req.params.id
    axios.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=apiKey&language=en-US&page=1').then(resp => {
        result8 = {}
        result8.title = resp.data["title"] //TITLE

        gen_temp = resp.data["genres"] //GENRES

        if (gen_temp.length === 0) {
            genre_final_result = ""
            result8.genre = genre_final_result
        }
        else {
            let genre_name = ""
            let t = 0;
            for (t = 0; t < gen_temp.length; t++) {
                genre_name = genre_name + gen_temp[t].name + ", "
            }
            genre_final_result = genre_name.slice(0, -2)
            result8.genre = genre_final_result
        }

        spoken_temp = resp.data["spoken_languages"]
        if (spoken_temp.length === 0) {
            spoken_final_result = ""
            result8.spoken_languages = spoken_final_result
        }
        else {
            let spoken_lang = ""
            let t1 = 0;
            for (t1 = 0; t1 < spoken_temp.length; t1++) {
                spoken_lang = spoken_lang + spoken_temp[t1].english_name + ", "
            }
            spoken_lang = spoken_lang.slice(0, -2)
            result8.spoken_languages = spoken_lang
        }

        release_temp = resp.data["release_date"] //empty release date CHECK
        release_temp = release_temp.slice(0, 4)
        result8.release_date = release_temp

        runtime_temp = resp.data["runtime"]
        let hours_number = Math.floor(runtime_temp / 60)
        let minutes_number = (runtime_temp % 60)
        runtime = hours_number + "hrs " + minutes_number + "mins"
        result8.runtime = runtime

        result8.overview = resp.data["overview"]
        result8.vote_average = resp.data["vote_average"]
        result8.tagline = resp.data["tagline"]
        res.send(result8);

    })
})



app.get(`/MoviePoster_path/:id`, function (req, res) { //Movie poster ----(3) 
    const axios = require('axios');
    const id = req.params.id
    axios.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=apiKey&language=en-US&page=1').then(resp => {
        result_poster = {}
        poster_path = resp.data["poster_path"]
        result_poster = "https://image.tmdb.org/t/p/w500" + poster_path

        res.json(result_poster);

    })
})

app.get(`/Movie_Cast_Details/:id`, function (req, res) { //Video cast ------(4)
    const axios = require('axios');
    const id = req.params.id
    axios.get('https://api.themoviedb.org/3/movie/' + id + '/credits?api_key=apiKey&language=en-US&page=1').then(resp => {
        cast_temps = resp.data["cast"]
        cast_list = []
        j = 0
        for (let i = 0; i < cast_temps.length; i++) {
            let temp_poster = cast_temps[i].profile_path;
            if (temp_poster === null || temp_poster === "") { }
            else {
                cast_list[j] = {
                    full_profile_path: "https://image.tmdb.org/t/p/w500/" + temp_poster,
                    character: cast_temps[i].character,
                    name: cast_temps[i].name,
                    id: cast_temps[i].id
                }; j++
            }
        }
        res.json(cast_list)
    })
})

app.get(`/Movie_Review_List/:id`, function (req, res) { //Video review --------(5)
    const axios = require('axios');
    const id = req.params.id
    axios.get('https://api.themoviedb.org/3/movie/' + id + '/reviews?api_key=apiKey&language=en-US&page=1').then(resp => {
        review_temps = resp.data["results"]
        review_list = [] //
        j = 0
        length_list = review_temps.length
        if (length_list > 10) {
            length_list = 10
        }
        for (let i = 0; i < length_list; i++) {
            tem_author_detail = review_temps[i].author_details
            rating = tem_author_detail.rating
            if (rating === null || rating === "") {
                rating = 0
            }
            avatar_path = tem_author_detail.avatar_path
            if (avatar_path === null || avatar_path === "") {
                avatar_path = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnPmUvFLjjmoYWAbLTEmLLIRCPpV_OgxCVA&usqp=CAU"
            }
            else if (avatar_path.slice(0, 5) === "/http" || avatar_path.slice(0, 4) === "http") {
                avatar_path = avatar_path.slice(1)

            }
            else {
                avatar_path = "https://image.tmdb.org/t/p/original" + avatar_path


            }
            review_list[j] = {
                author: review_temps[i].author,
                url: review_temps[i].url,
                created_at: review_temps[i].created_at,
                content: review_temps[i].content,
                avatar_path_here: avatar_path,

                rating_here: rating
            }; j++

        }

        res.json(review_list)
    })
})

app.get(`/get_Recommended_Movies/:id`, function (req, res) { //Reccomended Movie --------(6)
    const axios = require('axios');
    const id = req.params.id

    axios.get('https://api.themoviedb.org/3/movie/' + id + '/recommendations?api_key=apiKey&language=en-US&page=1').then(resp => {
        recc_temp = resp.data["results"]
        recc_length = recc_temp.length
        if (recc_length === 0) {
            res.json("No Reccomended Movies")
        }
        else {
            recc_list = []
            let j = 0
            for (let i = 0; i < recc_length; i++) {
                if (recc_temp[i].poster_path === null || recc_temp[i].poster_path === "") { }
                else {
                    let temp_poster_recc = "https://image.tmdb.org/t/p/w500" + recc_temp[i].poster_path
                    recc_list[j] = {
                        poster: temp_poster_recc,
                        id: recc_temp[i].id,
                        title: recc_temp[i].title,
                        media_type: "movie"
                    };
                    j++;
                }
            }
            res.json(recc_list)
        }

    })
})

app.get(`/Get_Similar_Movies/:id`, function (req, res) { //Similar Movie ---------(7)
    const axios = require('axios');
    const id = req.params.id
    axios.get('https://api.themoviedb.org/3/movie/' + id + '/similar?api_key=apiKey&language=en-US&page=1').then(resp => {
        similar_temp = resp.data["results"]
        similar_length = similar_temp.length

        if (similar_length === 0) {
            res.json("No similar movies")
        }
        else {
            similar_list = []
            let k = 0
            for (let i = 0; i < similar_length; i++) {
                if (similar_temp[i].poster_path === null || similar_temp[i].poster_path === "") { }
                else {
                    let similar_poster = "https://image.tmdb.org/t/p/w500" + similar_temp[i].poster_path
                    similar_list[k] = {
                        poster: similar_poster,
                        id: similar_temp[i].id,
                        title: similar_temp[i].title,
                        media_type: "movie"
                    }; k++;
                }

            }

            res.send(similar_list)
        }
    })
})
///////////////TV SHOW DETAILS
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

app.get(`/TVvideoDetails/:id`, function (req, res) { //Video TV ----(1)
    const axios = require('axios');
    const id = req.params.id
    axios.get('https://api.themoviedb.org/3/tv/' + id + '/videos?api_key=apiKey&language=en-US&page=1').then(resp => {
        let y = resp.data["results"]
        //res.send(y)
        kf = 0;

        let x = 0;
        for (x = 0; x < y.length; x++) {
            if (y[x].key && y[x].key !== "") {
                if (y[x].type === "Trailer" || y[x].type === "Teaser") {  //TEST IT OUT
                    result_tv_here = y[x].key
                    kf = 9;

                    break;

                }
            }
        }
        if (kf !== 9) { // no value WORK ON THIS
            result_tv_here = "tzkWB85ULJY"
        }
        res.json(result_tv_here);

    })
})



app.get(`/TVdetails/:id`, function (req, res) { //Movie details ----(2)
    const axios = require('axios');
    const id = req.params.id
    axios.get('https://api.themoviedb.org/3/tv/' + id + '?api_key=apiKey&language=en-US&page=1').then(resp => {
        result8 = {}
        result8.title = resp.data["name"] //TITLE

        gen_temp = resp.data["genres"] //GENRES

        if (gen_temp.length === 0) {
            genre_final_result = ""
            result8.genre = genre_final_result
        }
        else {
            let genre_name = ""
            let t = 0;
            for (t = 0; t < gen_temp.length; t++) {
                genre_name = genre_name + gen_temp[t].name + ", "
            }
            genre_final_result = genre_name.slice(0, -2)
            result8.genre = genre_final_result
        }

        spoken_temp = resp.data["spoken_languages"]
        if (spoken_temp.length === 0) {
            spoken_final_result = ""
            result8.spoken_languages = spoken_final_result
        }
        else {
            let spoken_lang = ""
            let t1 = 0;
            for (t1 = 0; t1 < spoken_temp.length; t1++) {
                spoken_lang = spoken_lang + spoken_temp[t1].english_name + ", "
            }
            spoken_lang = spoken_lang.slice(0, -2)
            result8.spoken_languages = spoken_lang
        }

        release_temp = resp.data["first_air_date"] //empty release date CHECK
        release_temp = release_temp.slice(0, 4)
        result8.release_date = release_temp

        runtime_temp = resp.data["episode_run_time"]

        // runtime_temp= runtime_temp[0] ///check if it works-tv
        let hours_number = Math.floor(runtime_temp / 60)
        let minutes_number = (runtime_temp % 60)
        runtime = hours_number + "hrs " + minutes_number + "mins"
        result8.runtime = runtime

        result8.overview = resp.data["overview"]
        result8.vote_average = resp.data["vote_average"]
        result8.tagline = resp.data["tagline"]
        res.send(result8);


    })
})

app.get(`/TVposter_path/:id`, function (req, res) { //Movie poster ----(3) 
    const axios = require('axios');
    const id = req.params.id
    axios.get('https://api.themoviedb.org/3/tv/' + id + '?api_key=apiKey&language=en-US&page=1').then(resp => {
        result_poster = {}
        poster_path = resp.data["poster_path"]
        result_poster = "https://image.tmdb.org/t/p/w500" + poster_path

        res.json(result_poster);

    })
})

app.get(`/TV_Cast_Details/:id`, function (req, res) { //Video cast ------(4)
    const axios = require('axios');
    const id = req.params.id
    axios.get('https://api.themoviedb.org/3/tv/' + id + '/credits?api_key=apiKey&language=en-US&page=1').then(resp => {
        cast_temps = resp.data["cast"]
        cast_list = []
        j = 0
        for (let i = 0; i < cast_temps.length; i++) {
            let temp_poster = cast_temps[i].profile_path;
            if (temp_poster === null || temp_poster === "") { }
            else {
                cast_list[j] = {
                    full_profile_path: "https://image.tmdb.org/t/p/w500/" + temp_poster,
                    character: cast_temps[i].character,
                    name: cast_temps[i].name,
                    id: cast_temps[i].id
                }; j++
            }
        }
        res.json(cast_list)
    })
})


app.get(`/TV_Review_List/:id`, function (req, res) { //tv review --------(5)
    const axios = require('axios');
    const id = req.params.id
    axios.get('https://api.themoviedb.org/3/tv/' + id + '/reviews?api_key=apiKey&language=en-US&page=1').then(resp => {
        review_temps = resp.data["results"]
        review_list = [] //
        j = 0
        length_list = review_temps.length
        if (length_list > 10) {
            length_list = 10
        }
        for (let i = 0; i < length_list; i++) {
            tem_author_detail = review_temps[i].author_details
            rating = tem_author_detail.rating
            if (rating === null || rating === "") {
                rating = 0
            }
            avatar_path = tem_author_detail.avatar_path
            if (avatar_path === null || avatar_path === "") {
                avatar_path = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnPmUvFLjjmoYWAbLTEmLLIRCPpV_OgxCVA&usqp=CAU"

            }
            else if (avatar_path.slice(0, 5) === "/http" || avatar_path.slice(0, 4) === "http") {
                avatar_path = avatar_path.slice(1)

            }
            else {
                avatar_path = "https://image.tmdb.org/t/p/original" + avatar_path


            }
            review_list[j] = {
                author: review_temps[i].author,
                url: review_temps[i].url,
                created_at: review_temps[i].created_at,
                content: review_temps[i].content,
                avatar_path_here: avatar_path,

                rating_here: rating
            }; j++
        }
        res.json(review_list)
    })
})


app.get(`/get_Recommended_TV/:id`, function (req, res) { //Reccomended Movie --------(6)
    const axios = require('axios');
    const id = req.params.id
    axios.get('https://api.themoviedb.org/3/tv/' + id + '/recommendations?api_key=apiKey&language=en-US&page=1').then(resp => {
        recc_temp = resp.data["results"]
        recc_length = recc_temp.length
        if (recc_length === 0) {
            res.json("No")
        }
        else {
            recc_list = []
            let j = 0
            for (let i = 0; i < recc_length; i++) {
                if (recc_temp[i].poster_path === null || recc_temp[i].poster_path === "") { }
                else {
                    let temp_poster_recc = "https://image.tmdb.org/t/p/w500" + recc_temp[i].poster_path
                    recc_list[j] = {
                        poster: temp_poster_recc,
                        id: recc_temp[i].id,
                        title: recc_temp[i].name,
                        media_type: "tv"
                    };
                    j++;
                }
            }
            res.json(recc_list)
        }

    })
})



app.get(`/Get_Similar_tv/:id`, function (req, res) { //Similar Movie ---------(7)
    const axios = require('axios');
    const id = req.params.id
    axios.get('https://api.themoviedb.org/3/tv/' + id + '/similar?api_key=apiKey&language=en-US&page=1').then(resp => {
        similar_temp = resp.data["results"]
        similar_length = similar_temp.length
        if (similar_length === 0) {
            res.json("No")
        }
        else {
            similar_list = []
            let k = 0
            for (let i = 0; i < similar_length; i++) {
                if (similar_temp[i].poster_path === null || similar_temp[i].poster_path === "") { }
                else {
                    let similar_poster = "https://image.tmdb.org/t/p/w500" + similar_temp[i].poster_path
                    similar_list[k] = {
                        poster: similar_poster,
                        id: similar_temp[i].id,
                        title: similar_temp[i].name,
                        media_type: "tv"
                    }; k++;
                }
            }
            res.send(similar_list)
        }
    })
})

/////////////////////////////////////CAST DETAILS
app.get(`/each_cast_model/:castid`, function (req, res) { //Similar Movie
    const axios = require('axios');
    const castid = req.params.castid
    axios.get('https://api.themoviedb.org/3/person/' + castid + '?api_key=apiKey&language=en-US&page=1').then(resp => {
        cast_det_individual_result = {}
        cast_det_individual_result.birthdate = resp.data["birthday"]
        temp_gender = resp.data["gender"]
        if (temp_gender === 1) {
            cast_det_individual_result.gender = "Female";
        }
        else if (temp_gender === 2) {
            cast_det_individual_result.gender = "Male";
        }
        else {
            cast_det_individual_result.gender = "";
        }
        cast_det_individual_result.place_of_birth = resp.data["place_of_birth"]
        cast_det_individual_result.name = resp.data["name"]
        cast_det_individual_result.homepage = resp.data["homepage"]
        temp_known = resp.data["also_known_as"]
        if (temp_known.length === 0) {
            cast_det_individual_result.also_known_as = resp.data["also_known_as"]
        }
        else {
            // temp_k = "Also Known as: "


            for (var i = 0; i < temp_known.length; i++) {
                temp_k = temp_k + temp_known[i] + ", "
            }
            temp_k = temp_k.slice(0, -2)
            cast_det_individual_result.also_known_as = temp_k.slice(0, -2)
        }

        cast_det_individual_result.known_for_department = resp.data["known_for_department"]
        cast_det_individual_result.biography = resp.data["biography"]
        res.send(cast_det_individual_result)
    })
})

app.get(`/each_cast_socials/:castid`, function (req, res) { //Reccomended Movie
    const axios = require('axios');
    const castid = req.params.castid
    axios.get('https://api.themoviedb.org/3/person/' + castid + '/external_ids?api_key=apiKey&language=en-US&page=1').then(resp => {

        social_id = {}

        let temp_imbd = resp.data["imdb_id"]
        if (temp_imbd !== null && temp_imbd !== "") {
            social_id.imdb_id = temp_imbd
        }
        else {
            social_id.imdb_id = ""
        }

        let temp_insta = resp.data["instagram_id"]
        if (temp_insta !== null && temp_insta !== "") {
            social_id.instagram_id = temp_insta
        }
        else {
            social_id.instagram_id = ""
        }
        let temp_twitter = resp.data["twitter_id"]
        if (temp_twitter !== null && temp_twitter !== "") {
            social_id.twitter_id = temp_twitter
        }
        else {
            social_id.twitter_id = ""
        }
        let temp_fb = resp.data["facebook_id"]
        if (temp_fb !== null && temp_fb !== "") {
            social_id.facebook_id = temp_fb
        }
        else {
            social_id.facebook_id = ""
        }
        res.json(social_id)
    })
})

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + 'dist/frontend/index.html'))

})
var server = app.listen(8080, function () {
    console.log("Backend Application listening at http://localhost:8080")
})

module.exports = app;


