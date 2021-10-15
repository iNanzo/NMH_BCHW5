// DOM selector variables
var dateText = $('#currentDay');
var blockContainer = $(".container");

// Moment API variables
var dayDate = moment().format("dddd, MMMM Do");
var dayStart = moment().startOf("day");
let dayHour = moment().startOf("hour");

// Date Heading
dateText.text(dayDate);

// Start page function
function pageStart(){
    for(i = 0; i < 9; i++){
        timeblockGen(i+9);
        timeblockLoad(i+9);
    }
    
    // Add EventListener after everything has been generated
    $(".saveBtn").on("click", saveText);
}

// Generate timeblocks
function timeblockGen(i){
    var blockHour = moment().startOf("day").hour(i);
    
    var timeblockDiv = $("<div>");
    var hourDiv = $("<div>");
    var saveDiv = $("<button>"+"<i>");
    var descTextarea = $("<textarea>");

    // Block Section
    timeblockDiv.addClass("row time-block");
    timeblockDiv.attr("id", "hour-"+i); 
    // Hour Label
    hourDiv.addClass("col-md-1 hour");
    hourDiv.text(moment(blockHour).format('hA'));
        // ^Change color depending on hour
        if(dayHour.isAfter(blockHour)){
            timeblockDiv.addClass("past");
        }else if(dayHour.isSame(blockHour)){
            timeblockDiv.addClass("present");
        }else{
            timeblockDiv.addClass("future");
        }
    // Save Button
    saveDiv.addClass("btn col-md-1 saveBtn");
    saveDiv.children("i").addClass("fas fa-save");
    // Text Area
    descTextarea.addClass("col-md-10 description");

    // Append Timeblocks to Page
    blockContainer.append(timeblockDiv);
    timeblockDiv.append(hourDiv);
    timeblockDiv.append(descTextarea);
    timeblockDiv.append(saveDiv);
}

// Load saved timeblock text
function timeblockLoad(i){
    // Make variables for selectors based on i/current loading timeblock
    var blockLoading = "#hour-"+i+" .description";
    var hourLoading = "hour-"+i+"";
    
    $(blockLoading).val(localStorage.getItem(hourLoading));
}

// Save timeblock text
function saveText(){
    var textareaValue = $(this).siblings(".description").val();
    var timeblockValue = $(this).parent().attr("id");

    localStorage.setItem(timeblockValue, textareaValue);

    if(textareaValue == ""){
        alert(timeblockValue + " is now clear.");
    }else{
        alert(timeblockValue + " has been saved as \"" + textareaValue + "\"");
    }
}

// Start Page
pageStart();