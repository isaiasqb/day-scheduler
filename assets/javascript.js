// create an array with times od the working day
var hoursArr = ["7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"]

// display the local time
$("#currentDay").text(moment().toString())


// console.log(time)

// dinamically create time blocks
for(var i = 0; i < hoursArr.length; i++){
var hourBlockContainer = $("<div>").addClass("row");
var hourDisplay = $("<div>").addClass("hour-display col-lg-1 bg-light").text(moment(moment(), "L").set("hour", hoursArr[i]).toString());
var hourTask = $("<div>").addClass("hour-task col-lg-9 bg-success");
var hourSave = $("<div>").addClass("hour-save col-lg-1 bg-info");
hourBlockContainer.append(hourDisplay, hourTask, hourSave);
$("#time-blocks-list").append(hourBlockContainer);

console.log(i);
console.log(moment(moment(), "L").set("hour", hoursArr[i]).toString());
};



// console.log(moment(new Date(), DD-MM-YYYY))