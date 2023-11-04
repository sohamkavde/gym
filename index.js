var ele = document.getElementById('show');

var str = `
<p><input type="checkbox" name="checkbox" id="checkbox")">&nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, esse.</p>`;
function run(){
    ele.innerHTML = '';
    for(let x = 0;x<1;x++){
        ele.innerHTML +=`<h2>Day :  Monday</h2>`;
        for (let index = 0; index < 10; index++) {
            
            ele.innerHTML+=str;
            
        }
    }
    document.getElementById("checkbox").addEventListener('click',(e)=>console.log(e.target.value))
}

// run();


// console.log(divele.length)
var gym = ['shoulder','chest','back','leg','bicep','tricep'];

var parent = document.getElementsByClassName('parentDays')[0];
parent.innerHTML = '';
for (let index = 0; index < gym.length; index++) {
    parent.innerHTML += ` <div class="div1" onclick="display('${gym[index]}');"> <p>${gym[index]}</p> </div>`;
}
var obj = {
    'shoulder':shoulderExercises,
    'chest':chestExercises,
    'back':backExercises,
    'leg':legExercises,
    'bicep':bicepsExercises,
    'tricep':tricepsExercises    
}
var bodyExcerciseList = document.getElementsByClassName('bodyExcerciseList')[0];


function display(val){
    document.getElementsByClassName('avatar')[0].src = '/img/'+val+'.jpg';
    document.getElementById('id01').style.display='block';
    let arr = obj[val];
    bodyExcerciseList.innerHTML = `<div>
    <h2>Choose Your favorite Excercise</h2>
    </div>`;
    for (let index = 0; index < arr.length; index++) {
        bodyExcerciseList.innerHTML +=` 
        <button type="button" class="collapsible">
            ${index+1} 
            <label for="uname"> ${arr[index].name}</label>
            <input type="checkbox" placeholder="Enter Username" name="uname">
        </button>
        <div class="content">
        <p><b>About</b> : ${arr[index].description}</p>
        <b>Steps</b>
        <ol>
        ${
            arr[index].steps.map((item)=>{
                return (`<li>${item}</li>`)
            })

        }
        </ol>
        </div>
        `;
        
    }
    coll();
}



















var divele = document.getElementsByClassName('div1');
for (let index = 0; index < divele.length; index++) {
    document.getElementsByClassName('div1')[index].style.backgroundImage =  `url('./img/${gym[index]}.jpg')`; 
    
}





// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function coll(){
    var coll = document.getElementsByClassName("collapsible");
    var i;
    
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }
}
