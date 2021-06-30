var now = moment();

$('#currentDay').text(now.format('[Today is ]MMMM Do, YYYY'));


function updateTime () {
    timer = moment().format('hh:mm:ss')
    $('#currentTime').text(timer);
}


updateTime();
setInterval(function() {
    updateTime();
    updateSlots();
}, 1000)

function updateSlots() {
    currentTime = now.format('HH');
    container = $('#timeblocks').children()
    for (i=0; i<container.length; i++) {
        if (parseInt(currentTime) > parseInt(container.eq(i).attr('id'))) {
            container.eq(i).attr('class', 'past') //bg color to red
        } else if (parseInt(currentTime) === parseInt(container.eq(i).attr('id'))) {
            container.eq(i).attr('class', 'present')
        } else (container.eq(i).attr('class', 'future'))
    }
}

updateSlots()