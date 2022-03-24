// create an array with times od the working day
var hoursArr = ["7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"]

// display the local time
$("#currentDay").text(moment().format("LL").toString())


// console.log(time)
var currentHour = moment().format("H").toString() // this is the current hour 02

// dinamically create time blocks
for(var i = 0; i < hoursArr.length; i++){

// var hourByBlock = moment().set("hour", hoursArr[i]).format("H").toString()

var hourBlockContainer = $("<div>").addClass("row");
var hourDisplay = $("<div>").addClass("hour-display col-lg-1 bg-light")
    .text(moment()
        .set("hour", hoursArr[i])
        .format("hh A").toString());
var hourTask = $("<div>").addClass("hour-task col-lg-9 bg-success")
        .attr("hour-id", hoursArr[i]);
var hourSave = $("<div>").addClass("hour-save col-lg-1 bg-info");
hourBlockContainer.append(hourDisplay, hourTask, hourSave);
$("#time-blocks-list").append(hourBlockContainer);

if(currentHour > hourTask.attr("hour-id")){
    hourTask.addClass("bg-danger")
}

console.log(currentHour + " current hour")
// console.log(hourByBlock + " hour by block")
};

//refresh page every 30min