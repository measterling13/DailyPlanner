var time = $("#currentDay");
var monday = [
  {
    id: "0",
    hour: "9",
    time: "9",
    meridiem: "am",
  },
  {
    id: "1",
    hour: "10",
    time: "10",
    meridiem: "am",
  },
  {
    id: "3",
    hour: "11",
    time: "11",
    meridiem: "pm",
  },
  {
    id: "4",
    hour: "12",
    time: "12",
    meridiem: "pm",
  },
  {
    id: "5",
    hour: "1",
    time: "13",
    meridiem: "pm",
  },
  {
    id: "6",
    hour: "2",
    time: "14",
    meridiem: "pm",
  },
  {
    id: "7",
    hour: "3",
    time: "15",
    meridiem: "pm",
  },
  {
    id: "8",
    hour: "4",
    time: "16",
    meridiem: "pm",
  },
  {
    id: "9",
    hour: "10",
    time: "22",
    meridiem: "pm",
  },
  {
    id: "10",
    hour: "11",
    time: "23",
    meridiem: "pm",
  },
];
var containerEl = $(".container");

function displayTime() {
    var now = moment().format("MMM Do, YYYY [at] h:mm:ss a");
    time.text(now);
  }
  
  setInterval(displayTime, 1000);

  function writePlanner() {
    $(".container").append("<table />");
    $("table").addClass("col-12 col-med-9").attr("id", "table");
    monday.forEach(function (thisHour) {
      tRow = $("<tr>");
      tCell = $("<td>").text(`${thisHour.hour}${thisHour.meridiem}`);
      tCell2 = $("<td>").append("<textarea></textarea>");
      tCell3 = $("<td>").append("&#128190;");
      $("table").append(tRow.append(tCell.addClass("col-1 hour")));
      $("table").append(
        tRow.append(tCell2.addClass("col-10").attr("id", thisHour.id))
      );
      $("table").append(
        tRow.append(tCell3.addClass("saveBtn col-1").attr("id", "saveIcon"))
      );
      if (thisHour.time < moment().hour()) {
        tCell2.addClass("past");
      } else if (thisHour.time == moment().hour()) {
        tCell2.addClass("present");
      } else if (thisHour.time > moment().hour()) {
        tCell2.addClass("future");
      }
    });
    $("tr").addClass("customRow col-12");
    $("td").addClass("align-center justify-content-center");
    $("textarea").addClass("col-12 planner");
  }

  writePlanner();