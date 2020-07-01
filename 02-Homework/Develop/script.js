$(document).ready(function () {
    let m = moment();
    let currentDate = m.format("Do MMM YYYY");
    let currentHour = moment().hours();
    console.log('current hour: ', currentHour)

    // put current date/time in sub title
    $("#currentDay").text("Today's Date: " + currentDate);


    // event listener for save buttons to add to local storage
    $(".saveBtn").on("click", function () {
        let click = $(this).attr("data-value");
        let eventInput = $(click).val();
        localStorage.setItem(click, eventInput);
    });

    // load from local storage on page load

    // on refresh, loop through time block and grab values from local storage 'getItem' what happens if you don't have a value in a certain time block (this may or may not happen).
    let timeBlock = ["#9am", "#10am", "#11am", "#12pm", "#1pm", "#2pm", "#3pm", "#4pm", "#5pm"];
    
    for (let i = 0; i < timeBlock.length; i++) {
        let savedEvent = $('.saved-event')
        console.log('looping through time block to retrieve LS');        
        $(timeBlock[i]).val(localStorage.getItem(timeBlock[i]));
    };
    

    // Change style base on time
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