

/*
   <div id="card">
   <div id="movie">
       <input type="text" placeholder="Title:" id="title"> <br>
       <input type="text" id="actor" placeholder="Actor:"> <br>
       <img src="https://images-na.ssl-images-amazon.com/images/I/51NQV2S8WVL._AC_SY445_.jpg" alt="Slika" id="image"> <br>
       <textarea name="" id="opis" cols="30" rows="10" placeholder="Description:"></textarea>
       <br>
       <button id="add">Add Movie</button>
       <button id="delete">Delete</button>

   </div>
</div>

*/

var movies = [];

function saveMovie(){
    var movie = {
        title:retId("title"),
        actor:retId("actor"),
        img:retId("image"),
        description:retId("description")
    }

    movies.push(movie)
    console.log(movies)
    refreshView()
    
}


function retId(id){
    return document.getElementById(id).value;
}


function clear(){
    var fields = ['title', 'actor', 'image', 'description'];
    for(var mov of fields){
        document.getElementById(mov).value =''
    }
    console.log(fields)
    
}


function refreshView(){
    var card = document.getElementById('main');

    for ( var mov of movies){
    var movie = document.createElement('div');
    movie.className = "movie"
    var title = document.createElement('h2');
    title.innerHTML = mov.title;
    var actor = document.createElement('p');
    actor.innerHTML = mov.actor;
    var img = document.createElement('img');
    img.src = mov.img;
    img.className = "image"
    var description = document.createElement('textarea');
    description.innerHTML = mov.description;
    var save = document.createElement('button');
    var clear = document.createElement('button')

    movie.appendChild(title)
    movie.appendChild(actor)
    movie.appendChild(img)
    movie.appendChild(description)
    movie.appendChild(save)
    movie.appendChild(clear)
    




}
card.appendChild(movie)

}

