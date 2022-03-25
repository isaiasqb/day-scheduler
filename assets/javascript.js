

// create an array with times times for the working day
var hoursArr = ["7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"]


// display the local time in the header
$("#currentDay").text(moment().format("LL").toString())


// save the current hour to later compare it 
var currentHour = moment().format("H").toString() // this is the current hour (ex. 02)


//TIME BLOCKS dinamically created 
// var initializePage = function (){
//     var savedTasks = readLocalStorage()

    for(var i = 0; i < hoursArr.length; i++){
        //iterator for each hour of the day
        var hourId = hoursArr[i];
        // create the row that contains the task sections
        var hourBlockContainer = $("<div>").addClass("time-block row")
                .attr("hour-id", hourId);
        
            //create the display of each hour of the day
        var hourDisplay = $("<div>").addClass("hour-display col-lg-1 bg-light")
        var blockHour = (moment().set("hour", hourId).format("hh A"));
        hourDisplay.append(blockHour)
        
            //create the description text area for heach hourly task
        var hourTask = $("<textarea>").addClass("textarea description col-lg-9")
                .attr("hour-id", hourId)
                // .val(savedTasks[hourId]); //assigns the value of the local storage inofmration
        
            // create the save button area
        var saveIcon = $("<i>").addClass("fa-solid fa-floppy-disk"); 
        var hourSave = $("<div>").addClass("saveBtn col-lg-1 bg-info")
                .attr("hour-id", hourId)
                .append(saveIcon);
        
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
// }






// //CHANGE descriptive text for every task
$('.textarea').on("change", function() {
    var text = $(this) //selects the text value of the element clicked on
    .val()
    .trim();

    var id = $(this)
    .closest(".time-block")
    .attr("hour-id")

    $(".saveBtn").on("click", function(){
        //get the text area current value text
        saveToLocal(id, text)
    })

  });



var defaultSavedTasks = {
    7:"",8:"",9:"",10:"",11:"",12:"",13:"",14:"",15:"",16:"",17:"",18:"",19:""
}

//save in local storage
var saveToLocal = function(id, data){
    console.log("save to local" + id, data)
    var savedTasks = readLocalStorage()
    savedTasks[id] = data

    localStorage.setItem("savedTasks", JSON.stringify(savedTasks));
};

var readLocalStorage = function(){ 
    //access local storage
    var savedTasks = JSON.parse(localStorage.getItem("savedTasks"));
    //check if previous data exists
    //if no porevious data, initialize to default object
    if(!savedTasks){
        savedTasks = defaultSavedTasks}

    //return our object
    return savedTasks
};

// initializePage()





//we want to read all of out text areas
//loop through each one
//





    // for(var i = 7; i < hoursArr.length+7; i++){
    //     $("p").text(parsedSavedTasks[i]);
    // }; //...end of for loop


    // for(var i = 7; i<)

//maybe ad if statement to reformat the task
//refresh page every 30min
