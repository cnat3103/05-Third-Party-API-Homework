// Ready method to make the function available after the document has loaded.
$(document).ready(function () {
    let m = moment();
    // Format time using format method
    let currentDate = m.format("Do MMM YYYY");
    // Get current hour and store in currentHour variable. This will be used to change styling.
    let currentHour = moment().hours();
    // log to make sure working properly
    console.log('current hour: ', currentHour)

    // put current date/time in sub title
    $("#currentDay").text("Today's Date: " + currentDate);


    // add an event listener for save buttons 
    $(".saveBtn").on("click", function () {
        let click = $(this).attr("data-value");
        let eventInput = $(click).val();
        // set local storage item 
        localStorage.setItem(click, eventInput);
    });


    // Retreieve local storage using getItem method
    let timeBlock = ["#9am", "#10am", "#11am", "#12pm", "#1pm", "#2pm", "#3pm", "#4pm", "#5pm"];
    
    for (let i = 0; i < timeBlock.length; i++) {
        let savedEvent = $('.saved-event');      
        $(timeBlock[i]).val(localStorage.getItem(timeBlock[i]));
    };
    

    // Change style base on time. Compare the scheduled hour to the current hour determined using moment.js 
    function timeStyle() {
        for (let i = 6; i < 18; i++) {
            let hour = '#' + i;
            let scheduleHour = parseInt($(hour).attr("id"));
            $(hour).removeClass();
            if (
                scheduleHour > currentHour) {
                $(hour).attr("class", "row future");
            }
            else if (
                scheduleHour === currentHour) {
                $(hour).attr("class", "row present");
            }
            else if (
                scheduleHour < currentHour) {
                $(hour).attr("class", "row past");
            }

        };
    }
    timeStyle();

    
});