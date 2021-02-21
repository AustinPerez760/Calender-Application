var row = $(".row");
var timeFormat = "hh:mm:ss";

// console.log(moment().format("MMMM Do YYYY, h:mm:ss a"));

//Show current day and month
$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

// Local Storage
$("button").click(function () {
  var addValID = $(this).prev().attr("id");
  var addVal = $(this).prev().val();
  localStorage.setItem(addValID, addVal);
});
