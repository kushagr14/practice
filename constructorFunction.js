function movie(title, year){
    const movieObj = {
        title: title,
        year: year,
        getDetails() {
            console.log(`Title: ${this.title}\nYear: ${this.year}`);
        }
    };
    return movieObj;
}

const movie1 = movie("Avenger", 2012);
// console.log(movie1);
// movie1.getDetails();

function Movie(title, year){
    this.title = title;
    this.year = year;

    this.getDetails = function(){
        console.log(`Title: ${this.title}\nYear: ${this.year}`);
    };
}

const movie2 = new Movie("DDLJ", 2006);
Movie.prototype.cast = this.cast;
movie2.cast("RDJ");
console.log(movie2);

