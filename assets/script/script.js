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
            // container.eq(i).addClass('past') //bg color to red
            container.find("#textDisplay").eq(i).addClass('past')
        } else if (parseInt(currentTime) === parseInt(container.eq(i).attr('id'))) {
            // container.eq(i).addClass('present')
            container.find("#textDisplay").eq(i).addClass('present')
        // } else (container.eq(i).addClass('future'))
        } else (container.find("#textDisplay").eq(i).addClass('future'))
    }
}

updateSlots()