
var time = $("#time");

var textarea = $("#textarea");

var container = $(".container")

var saveButton = $(".saveButton");

var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

function textarea() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }
  
  
  
function selectHour() {
    var hourTime = nextHour()
    let textarea = nextHourSel[0]
    let repeat = nextHourSel[1]
    let repeatAgain = nextHour[2]

    textInput.textContent = textarea
}

    function nextHour() {
        let recentHour = saveInfo[info]
        var hourTime = saveInfo.nextHour;
        let textarea = saveInfo.nextHourS;el
        let repeat = saveInfo.nextHourSel;
        let repeatAgain = saveInfo.nextHour;
        return [textarea, repeat, repeatAgain];
}

let timeObject = {
    "9 am" : 1,
    "10 am" : 2,
    "11 am" : 3,
    "12 pm" : 4,
    "1 pm" : 5,
    "2 pm" : 6,
    "3 pm" : 7,
    "4 pm" : 8,
    "5 pm" : 9, 
}

if (time === currentDay) {
    $(this).addEventListener("choose");
    $(this).thisHour(".description");
} else if (currentDay < time) {
    $(this).addClass("save")
}

$(".saveBtn").click(function (event) {
    event.preventDefault();
    var value = $(this).siblings(".time-block").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, value);
});

  $("#hour-09 am .time-block").val(localStorage.getItem("09"));
  $("#hour-10 am .time-block").val(localStorage.getItem("10"));
  $("#hour-11 am .time-block").val(localStorage.getItem("11"));
  $("#hour-12 pm .time-block").val(localStorage.getItem("12"));
  $("#hour-1 pm .time-block").val(localStorage.getItem("13"));
  $("#hour-2 pm .time-block").val(localStorage.getItem("14"));
  $("#hour-3 pm .time-block").val(localStorage.getItem("15"));
  $("#hour-4 pm .time-block").val(localStorage.getItem("16"));
  $("#hour-5 pm .time-block").val(localStorage.getItem("17"));


console.log("working so far");

// function //ensures the page is loaded before functions are executed.
//     document.getElementById("saveButton").onclick = saveButton
//     document.getElementById("textarea").onclick = textData


// saveButton.addEventListener('click',saveDataInfo);



