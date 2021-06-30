var now = moment();

$('#currentDay').text(now.format('[Today is ]MMMM Do, YYYY'));


function updateTime () {
    timer = moment().format('hh:mm:ss')
    $('#currentTime').text(timer);
}


updateTime();
setInterval(function() {
    updateTime()
}, 1000)