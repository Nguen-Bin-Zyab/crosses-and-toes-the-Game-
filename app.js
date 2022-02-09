var User = /** @class */ (function () {
    function User(_name) {
        this.name = _name;
    }
    return User;
}());
var tom = new User("Перетащите крестик или нолик");
var header = this.document.getElementById("header");
header.innerHTML = "Привет! " + tom.name;

var massive1 = [];
var massive2 = [];
var massive3 = [];
 

function onDragStart(event) {
    event
    .dataTransfer
    .setData('text/plain', event.target.id);
    event
    .currentTarget
    .style
}


function onDragOver(event) {
    event.preventDefault();
}

function onDrop(event) {
    var id = event
    .dataTransfer
    .getData('text');
    var draggableElement = document.getElementById(id);
    console.log(draggableElement.id); 
    var dropzone = event.target;
    console.log(dropzone.id);
    dropzone.appendChild(draggableElement);
    event
    .dataTransfer
    .clearData();
    if(dropzone.id){
        massive1.push(dropzone.id);
    }
    if(draggableElement.id){
        massive2.push(draggableElement.id);
    }
    console.log(massive2);
    console.log(massive1);
    
   
    var batman = massive2.indexOf("nolik");
    var batman2 = massive2.indexOf("nolik2");
    var batman3 = massive2.indexOf("nolik3");
    var batman4 = massive2.indexOf("nolik4");
    var batman5 = massive2.indexOf("nolik5");
    var batman6 = massive2.indexOf("krestik");
    var batman7 = massive2.indexOf("krestik2");
    var batman8 = massive2.indexOf("krestik3");
    var batman9 = massive2.indexOf("krestik4");
    var batman10 = massive2.indexOf("krestik5");
    var massiveNolik = [batman,batman2,batman3,batman4,batman5];
    var massiveKrestik = [batman6,batman7,batman8,batman9,batman10];
    console.log(massiveNolik);
    console.log(massiveKrestik);
    
  
        var zero = massive1.indexOf("333");
        var first = massive1.indexOf("555"); 
        var second = massive1.indexOf("777"); 
        if(zero>=0 && first>=0 && second>=0){
            var pic0 = massive2[zero].substring(0,5);
            var pic1 = massive2[first].substring(0,5);
            var pic2 = massive2[second].substring(0,5);
           if(pic0 == "nolik" && pic1 == "nolik" & pic2 == "nolik"){
               alert("Нолики выиграли!");
           }else if(pic0 == "krest" && pic1 == "krest" & pic2 == "krest"){
               alert("Победили крестики!");
           }
}

var third = massive1.indexOf("111"); 
var forth = massive1.indexOf("555"); 
var fifth = massive1.indexOf("999"); 

if(third>=0 && forth>=0 && fifth>=0){
    var pic0 = massive2[third].substring(0,5);
    var pic1 = massive2[forth].substring(0,5);
    var pic2 = massive2[fifth].substring(0,5);
   if(pic0 == "nolik" && pic1 == "nolik" & pic2 == "nolik"){
       alert("Нолики выиграли!");
   }else if(pic0 == "krest" && pic1 == "krest" & pic2 == "krest"){
       alert("Победили крестики!");
   }
}


var six = massive1.indexOf("111"); 
var seven = massive1.indexOf("444"); 
var eight = massive1.indexOf("777"); 

if(six>=0 && seven>=0 && eight>=0){
    var pic0 = massive2[six].substring(0,5);
    var pic1 = massive2[seven].substring(0,5);
    var pic2 = massive2[eight].substring(0,5);
   if(pic0 == "nolik" && pic1 == "nolik" & pic2 == "nolik"){
       alert("Нолики выиграли!");
   }else if(pic0 == "krest" && pic1 == "krest" & pic2 == "krest"){
       alert("Победили крестики!");
   }
}

var nine = massive1.indexOf("222"); 
var ten = massive1.indexOf("555"); 
var eleven = massive1.indexOf("888"); 

if(nine>=0 && ten>=0 && eleven>=0){
    var pic0 = massive2[nine].substring(0,5);
    var pic1 = massive2[ten].substring(0,5);
    var pic2 = massive2[eleven].substring(0,5);
   if(pic0 == "nolik" && pic1 == "nolik" & pic2 == "nolik"){
       alert("Нолики выиграли!");
   }else if(pic0 == "krest" && pic1 == "krest" & pic2 == "krest"){
       alert("Победили крестики!");
   }
}


var twelve = massive1.indexOf("333"); 
var thirteen = massive1.indexOf("666"); 
var fourteen = massive1.indexOf("999"); 

if(twelve>=0 && thirteen>=0 && fourteen>=0){
    var pic0 = massive2[twelve].substring(0,5);
    var pic1 = massive2[thirteen].substring(0,5);
    var pic2 = massive2[fourteen].substring(0,5);
   if(pic0 == "nolik" && pic1 == "nolik" & pic2 == "nolik"){
       alert("Нолики выиграли!");
   }else if(pic0 == "krest" && pic1 == "krest" & pic2 == "krest"){
       alert("Победили крестики!");
   }
}



var fifteen = massive1.indexOf("111"); 
var sixteen = massive1.indexOf("222"); 
var seventeen = massive1.indexOf("333"); 

if(fifteen>=0 && sixteen>=0 && seventeen>=0){
    var pic0 = massive2[fifteen].substring(0,5);
    var pic1 = massive2[sixteen].substring(0,5);
    var pic2 = massive2[seventeen].substring(0,5);
   if(pic0 == "nolik" && pic1 == "nolik" & pic2 == "nolik"){
       alert("Нолики выиграли!");
   }else if(pic0 == "krest" && pic1 == "krest" & pic2 == "krest"){
       alert("Победили крестики!");
   }
}


var eightteen = massive1.indexOf("444"); 
var nineteen = massive1.indexOf("555"); 
var twenty = massive1.indexOf("666"); 

if(eightteen>=0 && nineteen>=0 && twenty>=0){
    var pic0 = massive2[eightteen].substring(0,5);
    var pic1 = massive2[nineteen].substring(0,5);
    var pic2 = massive2[twenty].substring(0,5);
   if(pic0 == "nolik" && pic1 == "nolik" & pic2 == "nolik"){
       alert("Нолики выиграли!");
   }else if(pic0 == "krest" && pic1 == "krest" & pic2 == "krest"){
       alert("Победили крестики!");
   }
}

var twentyone = massive1.indexOf("777"); 
var twentytwo = massive1.indexOf("888"); 
var twentythree = massive1.indexOf("999"); 

if(twentyone>=0 && twentytwo>=0 && twentythree>=0){
    var pic0 = massive2[twentyone].substring(0,5);
    var pic1 = massive2[twentytwo].substring(0,5);
    var pic2 = massive2[twentythree].substring(0,5);
   if(pic0 == "nolik" && pic1 == "nolik" & pic2 == "nolik"){
       alert("Нолики выиграли!");
   }else if(pic0 == "krest" && pic1 == "krest" & pic2 == "krest"){
       alert("Победили крестики!");
   }
}



}


console.log(dropzone.id);   