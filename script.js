const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const d = new Date();

var Sday, Smonth, Syear, sData;
var Eday, Emonth, Eyear, eData;
/*
$("#submitStart").on("click", function () {
  var Sdate = $("#start-date").val();
  console.log(Sdate, $("#start-date").val());
  Sday = Sdate[2];
  Smonth = Sdate[1];
  Syear = Sdate[0];
  sData = Sdate;
});

$("#submitEnd").on("click", function () {
  var Edate = $("#end-date").val();
  console.log(Edate, $("#end-date").val());
  Eday = Edate[2];
  Emonth = Edate[1];
  Eyear = Edate[0];
  eData = Edate;
});
 */

// get data
$("#calculate").on("click", function () {
  var Sdate = $("#start-date").val().split("-");
  console.log(Sdate, $("#start-date").val());
  Sday = Sdate[2];
  Smonth = Sdate[1];
  Syear = Sdate[0];
  sData = Sdate;

  var Edate = $("#end-date").val().split("-");
  console.log(Edate, $("#end-date").val());
  Eday = Edate[2];
  Emonth = Edate[1];
  Eyear = Edate[0];
  eData = Edate;
});

const calculateBtn = document.getElementById("calculate");
calculateBtn.onclick = function () {
  calculateDays(sData, eData, Syear, Smonth, Sday, Eyear, Emonth, Eday);
};

function calculateDays(sData, eData, Syear, Smonth, Sday, Eyear, Emonth, Eday) {
  // calculate
  const oneDay = 24 * 60 * 60 * 1000;
  const firstDate = new Date(sData);
  const secondDate = new Date(eData);
  console.log(firstDate);
  console.log(secondDate);

  const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
  console.log(diffDays);

  showCalendar(diffDays);
}

//showCalendar(7146);

function showCalendar(days) {
  var ageColors = [
    "#FFFFCC",
    "#FFFF99",
    "#FFFF66",
    "#FFCC00",
    "#CC9900",
    "#FF6633",
    "#FF3300",
    "#CC3366",
    "#993366",
    "#990066",
    "#660066",
    "#663399",
    "#330099",
    "#663366",
    "#990099",
    "#333366",
    "#000066",
    "#333333",
    "#000033",
  ];

  const calendar = document.getElementById("calendar");
  var k = 0;
  var j = 0;
  for (let i = 0; i < days; i++) {
    const day = document.createElement("div");
    day.className = "day";
    if (k <= 1825) {
      day.style.backgroundColor = ageColors[j];
      k++;
    } else {
      if (j == ageColors.length - 1) {
        j = 0;
      } else {
        j++;
        k = 0;
      }
    }

    if (days >= 1825) {
      const myPara = document.getElementById("fiveYears");
      myPara.textContent = "Every shade of color represents 5 years.";
    }

    const counter = document.getElementById("dayCounter");
    var years = Math.floor(days / 365);
    var months = Math.floor((days % 365) / 30);
    var weeks = Math.floor((days % 365) / 7);

    if (months > 1) {
      counter.textContent =
        "Showing " +
        days +
        " days. " +
        years +
        " years. " +
        months +
        " months. " +
        weeks +
        " weeks.";
    } else {
      counter.textContent = "Showing " + days + " days.";
    }

    day.onclick = function () {
      whatAge(i);
    };

    calendar.appendChild(day);
  }
  document.getElementById("calculate").disabled = true;
  document.getElementById("calculate").style.backgroundColor = "tomato";
}

function whatAge(days) {
  var years = Math.floor(days / 365);
  var months = Math.floor((days % 365) / 30);
  var weeks = Math.floor((days % 365) / 7);

  console.log(years + " " + months + " " + weeks);
}

function reloadPage() {
  window.location.reload();
}
