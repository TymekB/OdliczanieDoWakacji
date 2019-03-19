function showTimeLeft() {
    let start = new Date(2018, 8, 3);
    let end = new Date(2019, 5, 21);

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

    const mainTitleHtml = $('#main-title').html();

    $(window).resize(function() {

        let width = $(window).width();

        if (width >= 700) {

            $('#main-title').html(mainTitleHtml + ".pl");

        } else {
            $("#main-title").html(mainTitleHtml);
        }
    });
});
