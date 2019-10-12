function showTimeLeft() {
    let start = new Date(2019, 8, 2);
    let end = new Date(2020, 5, 27);

    const units = countdown.DAYS|countdown.HOURS|countdown.MINUTES;

    let total = countdown(start, end, units);
    let daysLeft = countdown(end, null, units);
    let progress = (total.days - daysLeft.days) / total.days * 100;

    let formattedDate = $(daysLeft).formatDate();

    $("#days").html(formattedDate.days);
    $("#hours").html(formattedDate.hours);
    $("#minutes").html(formattedDate.minutes);

    $("#progress-bar").val(progress);
    $("#progress").html(Math.floor(progress) + "%");
}

$(document).ready(function() {

    showTimeLeft();
    setInterval(showTimeLeft, 1000);

});
