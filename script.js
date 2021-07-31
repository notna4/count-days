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

var isYears = 1;

const toggleIsYears = document.getElementById("isYears");

toggleIsYears.onclick = function () {
  showYears();
};

function showYears() {
  if (isYears == 1) {
    isYears = 0;
    toggleIsYears.style.backgroundColor = "gray";
  } else {
    isYears = 1;
    toggleIsYears.style.backgroundColor = "gold";
  }
  console.log(isYears);
}

var currentDate = new Date();
var currentYear = currentDate.getUTCFullYear();
var currentMonth = currentDate.getUTCMonth();
var currentDay = currentDate.getDate();
currentMonth = ("0" + ++currentMonth).slice(-2);

var currentData = currentYear + "/" + currentMonth + "/" + currentDay;

const showCurrent = document.getElementById("end");
showCurrent.textContent = "Today " + currentData;

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
  var Sdate = $("#start-date").val();
  var mySdate = Sdate.toString().replace(/-/g, "/");

  Sday = Sdate[2];
  Smonth = Sdate[1];
  Syear = Sdate[0];
  sData = mySdate;

  var Edate = $("#end-date").val();
  var myEdate = "" + myEdate;
  myEdate = Edate.replace(/-/g, "/");

  Eday = Edate[2];
  Emonth = Edate[1];
  Eyear = Edate[0];
  eData = myEdate;
});

const calculateBtn = document.getElementById("calculate");
calculateBtn.onclick = function () {
  calculateDays(
    sData,
    eData,
    Syear,
    Smonth,
    Sday,
    Eyear,
    Emonth,
    Eday,
    currentData
  );
};

function calculateDays(
  sData,
  eData,
  Syear,
  Smonth,
  Sday,
  Eyear,
  Emonth,
  Eday,
  currentData
) {
  // calculate
  const oneDay = 24 * 60 * 60 * 1000;
  const firstDate = new Date(sData);
  const secondDate = new Date(currentData);

  const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
  document.getElementById("calculate").disabled = "true";
  document.getElementById("calculate").style.backgroundColor = "tomato";

  showCalendar(diffDays);
}

function showCalendar(days) {
  const toggleIsYears = document.getElementById("isYears");
  toggleIsYears.disabled = "true";
  toggleIsYears.style.backgroundColor = "tomato";
  var ageColors = [
    "#ff9900",
    "#f77c20",
    "#e96130",
    "#d7473a",
    "#c03041",
    "#a71c45",
    "#8b0b46",
    "#6d0143",
    "#50003d",
    "#330033",
    "#50003d",
    "#6d0143",
    "#8b0b46",
    "#a71c45",
    "#c03041",
    "#d7473a",
    "#e96130",
    "#f77c20",
  ];

  const calendar = document.getElementById("calendar");
  var bDay = 0;
  var k = 0;
  var j = 0;

  var myFirstYear = document.getElementById("myFirstYear");
  console.log(sData.split("/")[0]);
  var firstYear = sData.split("/")[0];
  myFirstYear.textContent = firstYear;

  for (let i = 0; i < days; i++) {
    const day = document.createElement("divv");
    const marginYear = document.createElement("h4");
    day.className = "day";
    if (k < 1825) {
      day.style.backgroundColor = ageColors[j];
      k++;
    } else {
      if (j == ageColors.length - 1) {
        j = 0;
      } else {
        j++;
        k = 0;
      }
      day.style.backgroundColor = ageColors[j];

      if (isYears == 1) {
        var yearBorn = currentYear - years;
        var yearsPassed = Math.floor(i / 365);
        var myYear = yearBorn + yearsPassed;
        marginYear.textContent = myYear;
        marginYear.className = "marginYears";
        calendar.appendChild(marginYear);
        console.log("a fost unu");
      } else {
        console.log("a fost zero");
      }
    }

    if (i == bDay) {
      day.style.backgroundColor = "silver";
      bDay = bDay + 365;
    }

    if (i == days - 1) {
      var yearBorn = currentYear - years;
      var yearsPassed = Math.floor(i / 365);
      var myYear = yearBorn + yearsPassed;
      marginYear.textContent = myYear;
      calendar.appendChild(marginYear);
    }

    if (days >= 1825) {
      const myPara = document.getElementById("fiveYears");
      myPara.textContent = "Every shade of color represents 5 years. (±)";
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
        " years, " +
        months +
        " months and " +
        weeks +
        " weeks.";
    } else {
      counter.textContent = "Showing " + days + " days.";
    }

    day.onclick = function () {
      whatAge(i, years, days);
    };
    calendar.appendChild(day);
  }
}

function whatAge(days, age, totalDays) {
  var years = Math.floor(days / 365);
  var months = Math.floor((days % 365) / 30);
  var weeks = Math.floor((days % 365) / 7);

  const body = document.querySelector("body");
  const card = document.createElement("div");
  card.className = "card";

  const text = document.createElement("p");
  var theYear = currentYear - (age - years);

  if (months == 0 && weeks == 0) {
    if (days == 0) {
      "On this day from " + years + " you were born.";
    } else {
      text.textContent =
        "On this week from " +
        theYear +
        " was your birthday" +
        ", you were " +
        years +
        " years old.";
    }
  } else {
    if (days == totalDays - 1) {
      text.textContent = "Today.";
    } else {
      text.textContent =
        "On this day from " +
        theYear +
        ", you were " +
        years +
        " years old, " +
        months +
        " months, and " +
        weeks +
        " weeks.";
    }
  }

  card.appendChild(text);
  body.appendChild(card);
}

function reloadPage() {
  window.location.reload();
}

makeTitle();

function makeTitle() {
  const title = document.getElementById("title");
  for (let i = 0; i < 10; i++) {
    const dot = document.createElement("divv");
    dot.className = "dot";
    console.log("da");
    title.appendChild(dot);
  }
}
