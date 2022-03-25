// create an array with times times for the working day
var hoursArr = ["7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"]

// display the local time in the header
$("#currentDay").text(moment().format("LL").toString())


// save the current hour to later compare it 
var currentHour = moment().format("H").toString() // this is the current hour (ex. 02)

//TIME BLOCKS dinamically created 
for(var i = 0; i < hoursArr.length; i++){

    // create the row that contains the task sections
    var hourBlockContainer = $("<div>").addClass("hour-block row")
            .attr("hour-id", hoursArr[i]);
    //create the display of each hour of the day
    var hourDisplay = $("<div>").addClass("hour-display col-lg-1 bg-light")
    var blockHour = (moment().set("hour", hoursArr[i]).format("hh A"));
    hourDisplay.append(blockHour)
    //create the description text area for heach hourly task
    var hourTask = $("<p>").addClass("hour-task col-lg-9")
            .attr("hour-id", hoursArr[i]);
    // create the save button area
    var hourSave = $("<div>").addClass("hour-save col-lg-1 bg-info")
            .attr("hour-id", hoursArr[i]);
    //append al all 3 sections to the parents
    hourBlockContainer.append(hourDisplay, hourTask, hourSave);
    $("#time-blocks-list").append(hourBlockContainer);

    
    //dynamically change the color depending on the hour
    if(Math.abs(currentHour) > Math.abs(hourTask.attr("hour-id"))){
        hourTask.addClass("past")
    }  else if (Math.abs(currentHour) === Math.abs(hourTask.attr("hour-id"))){
        hourTask.addClass("present")}
    else{
        hourTask.addClass('future')
    };
}; //...end of for loop

console.log(hourTask)

//enter descriptive text for every task
$(".hour-task").on("click", function() {
    var text = $(".hour-task") //selects the text value of the element clicked on
      .text()
      .trim();
  
    var textInput = $("<textarea>").addClass("col-lg-9")
      .addClass("textarea")
      .val(text); // creates a nex textarea and gives  passes the p text as the text value of this new text area
  
    $(this).replaceWith(textInput);  //replaced the <p> element with the <textarea>
  
    textInput.trigger("focus"); //places cursor on text area
  });


//Edit the task by clicking on it.
$(".hour-block").on("blur", "textarea", function(){
    //get the text area current value text
    var text = $(this)
      .val()
      .trim();
    
    // get the parent ul's id attribute
    var id = $(this)
      .closest(".hour-block")
      .attr("hour-id")

    // convert the <textarea> back into a <p> element. 
    var description = $("<p>")
    //   .addClass("m-1")
      .attr("hour-id", id)
      .text(text)
      .addClass("col-lg-9 description")
    //replace textarea with p element
    $(this).replaceWith(description)

    var taskObject = {
         taskText: description.text(),
         taskHourId: description.attr("hour-id")
        };

    saveToLocal(taskObject.taskHourId, taskObject);
})

// var alltasks = []
//save in local storage
var saveToLocal = function(id, data){
    console.log(id, data)
    localStorage.setItem(id, data);
};




//maybe ad if statement to reformat the task
//refresh page every 30min
