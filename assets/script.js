var currentDayEl = $("#currentDay");
// Display current day and hour @ top of page
$(document).ready(function () {
  var time = dayjs().format("ddd. MMMM D, hA");
  currentDayEl.text(time);
});

// get current hour in 24hr format

var currentHour = dayjs().hour();


$(".time-block").each(function () {
  var hour = parseInt($(this).attr("id").split("-")[1]);

  // compare the hour to current hour

  if (hour < currentHour) {
    $(this).removeClass("present").removeClass("future").addClass("past");
  }

  else if (hour === currentHour) {
    $(this).removeClass("past").removeClass("future").addClass("present");
  }

  else {
    $(this).removeClass("present").removeClass("past").addClass("future");
  }
});

//if anything is in the box when the user hits save, it will save that text to local storage

$(".saveBtn").on("click", function () {
  var description = $(this).siblings(".description").val();
  var hour = $(this).parent().attr("id");
  localStorage.setItem(hour, description);

})

//if the user refreshes the page, it will check the local storage & apply it if anything is found

  $(".time-block").each(function() {
    var hour = $(this).attr("id");
    var description = localStorage.getItem(hour);
    if (description !== null) {
      $(this).find(".description").val(description);
    }
  }
  );
