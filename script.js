console.log("hello");

const movies = {
    title: "The Avengers",
    year: 2012,
    cast: ["RDJ", "Chris Evans", "Chris Hemsworth"],
    getDetails(){
        console.log(`Title: ${movies.title}\nYear: ${movies.year}\nCast: ${movies.cast}`)
    },
    getMovieDetails: function(detail){
        console.log(movies[detail]);
    }
};

// console.log(movies);
movies.getDetails();