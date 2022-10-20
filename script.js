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