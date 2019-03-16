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

    setInterval(showTimeLeft, 1000);

    let mainTitleHtml = $('#main-title').html();

    $(window).resize(function() {
        let width = $(window).width();

        if (width < 525) {
            $('#main-title').html(`Odliczanie Do <span class="primary-color">Wakacji</span>`);
        } else {
            $('#main-title').html(mainTitleHtml);
        }
    });
});
