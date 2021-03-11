
var app = angular.module('app',[]);

app.controller('mainController', function($scope){
       
  

     
    $scope.heroes= [
        {num: 0, name:'The Godfather',description:'The Godfather is a 1972 American crime film directed by Francis Ford Coppola, who co-wrote the screenplay with Mario Puzo, based on Puzos best-selling 1969 novel of the same name. The film stars Marlon Brando, Al Pacino, James Caan, Richard Castellano, Robert Duvall, Sterling Hayden, John Marley, Richard Conte, and Diane Keaton. It is the first installment in The Godfather trilogy. The story, spanning from 1945 to 1955, chronicles the Corleone family under patriarch Vito Corleone (Brando), focusing on the transformation of his youngest son, Michael Corleone (Pacino), from reluctant family outsider to ruthless mafia boss.', img:'https://beaumonteventstx.com/wp-content/uploads/2018/11/Untitled-1-4.jpg', komentari:[]},
        {num: 1, name:'Kingdom of Heaven',description:'Kingdom of Heaven is a 2005 epic historical drama film directed and produced by Ridley Scott and written by William Monahan. It stars Orlando Bloom, Eva Green, Ghassan Massoud, Jeremy Irons, David Thewlis, Brendan Gleeson, Iain Glen, Marton Csokas, Liam Neeson, Edward Norton, Michael Sheen, Velibor Topić and Alexander Siddig.',img:'https://www.factinate.com/wp-content/uploads/2020/07/Untitled-11-1.jpg', komentari:[]},
        {num: 2, name:'Training Day',description:'In Los Angeles, a city where streets are overrun by drug dealers, those who have sworn to uphold the law are breaking them to clean up the streets. Denzel Washington plays L.A.P.D. detective Alonzo Harris, a veteran narcotics officer whose methods of enforcing the law are questionable, if not corrupt.',img:'https://images-na.ssl-images-amazon.com/images/I/81N%2BFsjk-LL._SY445_.jpg', komentari:[]},
        {num: 3, name:'Unknow',description:'A biochemist and his dishy wife arrive in Berlin for a conference at which a scientist and his controversial Arab funder will announce breakthrough research. While his wife checks into the hotel, he grabs a cab to return to the airport for his briefcase, left at the curb. En route, an auto accident puts him in a coma, from which he awakes four days later without identification and with gaps in his memory. He goes to the hotel: his wife refuses to recognize him and another man has claimed his identity. With help from a nurse, the cab driver, a retired Stasi agent, and an academic friend, he tries to unravel whats going on. Is the answer in the briefcase?',img:'https://m.media-amazon.com/images/M/MV5BODA4NTk3MTQwN15BMl5BanBnXkFtZTcwNjUwMTMxNA@@._V1_.jpg',komentari:[]},
       {num: 4, name:'The Pacific',description:'The Pacific follows the lives of a U.S Marine Corps squad during the campaign within the Pacific against the Japanese Empire during WW2. Made by the creators of Band of Brothers, it follows a similar line of thought to outline the hardships of the common man during war.',img:'https://m.media-amazon.com/images/M/MV5BNmEwNmI1MjItNjNjYy00NDE5LWJiNTYtM2QxMTI5ZjllZTBhL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg', komentari:[]},
    ];
 

    $scope.selected = null;
    

    $scope.selectHero = function(hero, comment){
        $scope.selected = hero;
        $scope.comment=''
       

    }

    
    
    $scope.deleteHero = function(index){
        $scope.heroes.splice(index.num, 1)
       
    
        
    }


  $scope.commentFunc = function(comment, hero){
      hero.komentari.push(comment)
      



  }


});