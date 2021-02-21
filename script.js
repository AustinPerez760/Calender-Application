console.log(moment().format("MMMM Do YYYY, h:mm:ss a"));

//Show current day
document.querySelector("#currentDay").textContent = moment().format(
  "MMMM Do YYYY"
);
