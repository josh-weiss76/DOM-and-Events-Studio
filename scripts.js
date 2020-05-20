// Write your JavaScript code here.
// Remember to pay attention to page loading!
let button = null;
let land = null;
let missionAbort = null;
let up = null;
let down = null;
let left = null;
let right = null;
let rocket = null;

window.addEventListener("load", function(){
    console.log("Window loaded");
  });

function init () {
    missionAbort = document.getElementById("missionAbort");
    button = document.getElementById("takeoff");
    land = document.getElementById("landing");
    up = document.getElementById("up");
    down = document.getElementById("down");
    left = document.getElementById("left");
    right = document.getElementById("right");
    rocket = document.getElementById("rocket");
    let x = document.getElementById("rocket").offsetTop;
    let y = document.getElementById("rocket").offsetLeft;

    button.addEventListener("click", function(event){
      let response = window.confirm("Confirm that the shuttle is ready for takeoff.")
      if (response === true){
        document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
        document.getElementById("shuttleBackground").style = "background: blue";
        document.getElementById("spaceShuttleHeight").innerHTML = Number(10000);
        console.log("button clicked");
      };
    });

    land.addEventListener("click", function(event){
      window.alert("The shuttle is landing. Landing gear engaged.") 
      document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
      document.getElementById("shuttleBackground").style = "background: green";
      document.getElementById("spaceShuttleHeight").innerHTML = Number(0);
    });

    missionAbort.addEventListener("click", function(event){
      let response = window.confirm("Confirm that you want to abort the mission.")
      if (response === true){
        document.getElementById("flightStatus").innerHTML = "Mission aborted.";
        document.getElementById("shuttleBackground").style = "background: green";
        document.getElementById("spaceShuttleHeight").innerHTML = Number(0);
        };
      });

    up.addEventListener("click", function(event){
        let height = Number(document.getElementById("spaceShuttleHeight").innerHTML);
        height = height + 10000;
        document.getElementById("spaceShuttleHeight").innerHTML = height;
    });

    down.addEventListener("click", function(event){
        let height = Number(document.getElementById("spaceShuttleHeight").innerHTML);
        height = height - 10000;
        document.getElementById("spaceShuttleHeight").innerHTML = height;
    });

}

window.onload = init;