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

function init () {
    missionAbort = document.getElementById("missionAbort");
    button = document.getElementById("takeoff");
    land = document.getElementById("landing");
    up = document.getElementById("up");
    down = document.getElementById("down");
    left = document.getElementById("left");
    right = document.getElementById("right");
    rocket = document.getElementById("rocket");

    window.addEventListener("load", function(event){
      console.log("Window loaded");
    })

    button.addEventListener("click", function(event){
      let response = window.confirm("Confirm that the shuttle is ready for takeoff.")
      if (response === true){
        document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
        document.getElementById("shuttleBackground").style = "background: blue";
        document.getElementById("spaceShuttleHeight").innerHTML = Number(10000);
      };
    });

    land.addEventListener("click", function(event){
      window.alert("The shuttle is landing. Landing gear engaged.") 
      document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
      document.getElementById("shuttleBackground").style = "background: green";
      document.getElementById("spaceShuttleHeight").innerHTML = Number(0);
    })

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
        let location = document.getElementById("rocket").offsetTop;
        location = location - 10;
        document.getElementById("rocket").style.top = location + "px";
    })

    down.addEventListener("click", function(event){
        let height = Number(document.getElementById("spaceShuttleHeight").innerHTML);
        height = height - 10000;
        document.getElementById("spaceShuttleHeight").innerHTML = height;
    })

}

window.onload = init;