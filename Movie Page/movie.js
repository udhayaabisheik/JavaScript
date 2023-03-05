function display1(){
    var movie1 = {
        image : "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/varutha-padatha-valibar-sangam-et00016809-17-11-2020-05-59-39.jpg",
        title : "Varuthapadatha Valibar Sangam",
        director : "Ponram",
        producer : "P.Madan",
        music : "D. Imman",
        actors : ["Sivakarthikeyan","Sathyaraj","Sri Divya","Soori"],
        release : "6 September 2013",
        runtime : "158 minutes"
    }
    document.getElementById("img1").src = movie1.image;
    document.getElementById("t1").innerHTML = movie1.title;
    document.getElementById("d1").innerHTML = movie1.director;
    document.getElementById("p1").innerHTML = movie1.producer;
    document.getElementById("a1").innerHTML = movie1.actors;
    document.getElementById("m1").innerHTML = movie1.music;
    document.getElementById("rd1").innerHTML = movie1.release;
    document.getElementById("rt1").innerHTML = movie1.runtime;
}
function display2(){
    var movie2 = {
        image : "https://www.tamil2lyrics.com/wp-content/uploads/2017/02/beb-movie.png",
        title : "Boss Engira Bhaskaran",
        director : "M. Rajesh",
        producer : ["Arya","K. S. Sreenivasan"],
        music : "Yuvan Shankar Raja",
        actors : ["Arya","Santhanam","Nayanthara"],
        release : "10 September 2010",
        runtime : "161 minutes"
    }
    document.getElementById("img2").src = movie2.image;
    document.getElementById("t2").innerHTML = movie2.title;
    document.getElementById("d2").innerHTML = movie2.director;
    document.getElementById("p2").innerHTML = movie2.producer;
    document.getElementById("a2").innerHTML = movie2.actors;
    document.getElementById("m2").innerHTML = movie2.music;
    document.getElementById("rd2").innerHTML = movie2.release;
    document.getElementById("rt2").innerHTML = movie2.runtime;
}