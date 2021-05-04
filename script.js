var row = $(".row");
var timeFormat = "hh:mm:ss";

// console.log("hello world");

//Show current day and month
$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

// Local Storage
$("button").click(function () {
  var addValID = $(this).prev().attr("id");
  var addVal = $(this).prev().val();
  localStorage.setItem(addValID, addVal);
});
// Collecting local storage data to serve to display
for (i = 0; i < row.length; i++) {
  $("#" + i).val(localStorage.getItem(i));
}

var arayTimes = [
  { textarea: $("#8"), begin: "08:00:00", end: "08:59:59" },
  { textarea: $("#9"), begin: "09:00:00", end: "09:59:59" },
  { textarea: $("#10"), begin: "10:00:00", end: "10:59:59" },
  { textarea: $("#11"), begin: "11:00:00", end: "11:59:59" },
  { textarea: $("#12"), begin: "12:00:00", end: "12:59:59" },
  { textarea: $("#1"), begin: "13:00:00", end: "13:59:59" },
  { textarea: $("#2"), begin: "14:00:00", end: "14:59:59" },
  { textarea: $("#3"), begin: "15:00:00", end: "15:59:59" },
  { textarea: $("#4"), begin: "16:00:00", end: "16:59:59" },
  { textarea: $("#5"), begin: "17:00:00", end: "17:59:59" },
];

colorShift();
function colorShift() {
  for (i = 0; i < arayTimes.length; i++) {
    var colorPrior = moment(arayTimes[i].begin, timeFormat);
    var colorAfter = moment(arayTimes[i].end, timeFormat);
    if (moment().isBetween(colorPrior, colorAfter)) {
      arayTimes[i].textarea.addClass("present");
    } else if (moment().isBefore(colorPrior)) {
      arayTimes[i].textarea.addClass("future");
    } else if (moment().isAfter(colorAfter)) {
      arayTimes[i].textarea.addClass("past");
    }
  }
}
