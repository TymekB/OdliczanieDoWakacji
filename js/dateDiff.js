$.fn.diff = function(date) {

    let dateEl = $(this).get()[0];

    let date1 = dateEl instanceof Date ? dateEl : null;
    let date2 = date instanceof Date ? date : null;

    if(!date1 || !date2) {
        throw "Object must be instance of Date class";
    }

    let seconds = Math.floor((date2 - (date1))/1000);
    let minutes = Math.floor(seconds/60);
    let hours = Math.floor(minutes/60);
    let days = Math.floor(hours/24);

    hours = hours-(days*24);
    minutes = minutes-(days*24*60)-(hours*60);
    seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60);

    return {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    }

};
