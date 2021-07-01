/**********************************************************************************
 * Header date and updated clock and giving colors to timeblocks
 * functions: updateTime, updateSlots
 */
var now = moment(); //current date&time

$('#currentDay').text(now.format('[Today is ]MMMM Do, YYYY')); //Give subtitle a date

function updateTime () { //updating the clock with current timer
    timer = moment().format('hh:mm:ss')
    $('#currentTime').text(timer);
}

setInterval(function() { //refreshes the functions and colors in timeslots every .1 second
    updateTime();
    updateSlots();
}, 100)

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
//***************************************************************** */

/*******************************************************************
 * Editing and saving the descriptions.  Also updating the local storage.
 * Functions: editDescription, saveDescription
 * 
 */

//taskDescript(ion) contains an base array of objects that have a key:value of time:(an integer) and tasks:(a string)
taskDescript= [ 
    {   'time': 9,
        'tasks': "No tasks this hour!"
    },    {
        'time': 10,
        'tasks': "No tasks this hour!"
    },    {
        'time': 11,
        'tasks': "No tasks this hour!"
    },    {
        'time': 12,
        'tasks': "No tasks this hour!"
    },    {
        'time': 13,
        'tasks': "No tasks this hour!"
    },    {
        'time': 14,
        'tasks': "No tasks this hour!"
    },    {
        'time': 15,
        'tasks': "No tasks this hour!"
    },    {
        'time': 16,
        'tasks': "No tasks this hour!"
    },    {
        'time': 17,
        'tasks': "No tasks this hour!"
    },
]


function editDescription (event) {
    console.log(event);
}

function saveDescription (event) {
    console.log(event);
}


//Adding and delagating click events on the page.
$('.description').on('click', editDescription)
$("button[type='button']").on('click', saveDescription)