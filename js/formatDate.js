$.fn.formatDate = function() {

    let date = $(this).get()[0];

    let days = date.days;
    let hours = date.hours;
    let minutes = date.minutes;

    if(days < 10) days = "0" + days;
    if(hours < 10) hours = "0" + hours;
    if(minutes < 10) minutes = "0" + minutes;

    return {
        days: days,
        hours: hours,
        minutes: minutes,
    }
};
