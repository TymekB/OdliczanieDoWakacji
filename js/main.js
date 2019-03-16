function showTimeLeft() {
    let startDate = new Date(2018, 8, 2);
    let endDate = new Date(2019, 5, 21);

    let totalDays = $(startDate).diff(endDate);
    let daysLeft = $(new Date()).diff(endDate).format();
    let progress = Math.floor(((totalDays.days - daysLeft.days ) / totalDays.days) * 100);

    $("#days").html(daysLeft.days);
    $("#hours").html(daysLeft.hours);
    $("#minutes").html(daysLeft.minutes);

    $("#progress").html(progress + "%");
    $("#progress-bar").val(progress);
}

$(document).ready(function() {

    showTimeLeft();

});
