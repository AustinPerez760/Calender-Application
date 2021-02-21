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
  { textarea: $("#9"), begin: "08:00:00", end: "08:59:59" },
  { textarea: $("#10"), begin: "08:00:00", end: "08:59:59" },
  { textarea: $("#11"), begin: "08:00:00", end: "08:59:59" },
  { textarea: $("#12"), begin: "08:00:00", end: "08:59:59" },
  { textarea: $("#1"), begin: "08:00:00", end: "08:59:59" },
  { textarea: $("#2"), begin: "08:00:00", end: "08:59:59" },
  { textarea: $("#3"), begin: "08:00:00", end: "08:59:59" },
  { textarea: $("#4"), begin: "08:00:00", end: "08:59:59" },
  { textarea: $("#5"), begin: "08:00:00", end: "08:59:59" },
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
