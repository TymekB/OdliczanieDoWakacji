$(document).ready(function(){

    let dateFuture = new Date(2019, 5, 21);
    let dateNow = new Date();

    let diff = $(dateNow).diff(dateFuture).format();

    $("#days").html(diff.days);
    $("#hours").html(diff.hours);
    $("#minutes").html(diff.minutes);

});
