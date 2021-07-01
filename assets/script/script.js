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

//create an array that contains all elements with [for='textDisplay'] attribute
var forTextDisplay = $("div[for='textDisplay']")

function updateSlots() {
    currentTime = now.format('HH');
    container = $('#timeblocks').children()
    for (i=0; i<container.length; i++) {
        if (parseInt(currentTime) > parseInt(container.eq(i).attr('id'))) {
            // container.eq(i).addClass('past') //bg color to red
            container.find(forTextDisplay).eq(i).removeClass('present') //present becomes past
            container.find(forTextDisplay).eq(i).addClass('past')
        } else if (parseInt(currentTime) === parseInt(container.eq(i).attr('id'))) {
            // container.eq(i).addClass('present')
            container.find(forTextDisplay).eq(i).removeClass('future') //future becomes present
            container.find(forTextDisplay).eq(i).addClass('present')
        // } else (container.eq(i).addClass('future'))
        } else (container.find(forTextDisplay).eq(i).addClass('future'))
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
        'tasks': "No tasks this hour! Click me to edit!"
    },    {
        'time': 10,
        'tasks': "No tasks this hour! Click me to edit!"
    },    {
        'time': 11,
        'tasks': "No tasks this hour! Click me to edit!"
    },    {
        'time': 12,
        'tasks': "No tasks this hour! Click me to edit!"
    },    {
        'time': 13,
        'tasks': "No tasks this hour! Click me to edit!"
    },    {
        'time': 14,
        'tasks': "No tasks this hour! Click me to edit!"
    },    {
        'time': 15,
        'tasks': "No tasks this hour! Click me to edit!"
    },    {
        'time': 16,
        'tasks': "No tasks this hour! Click me to edit!"
    },    {
        'time': 17,
        'tasks': "No tasks this hour! Click me to edit!"
    },
]

function init() {//parse the stringified object and see if there are any tasks
    var storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks !== null) {
        taskDescript = storedTasks
    }
    renderTasks()
}

function storeTasks () { //store the tasks into 'tasks' key as a stringified object
    localStorage.setItem('tasks', JSON.stringify(taskDescript))
}

function renderTasks () {
    for (i=0; i < forTextDisplay.length; i++) { //forTextDisplay = $("div[for='textDisplay']")
        forTextDisplay[i].textContent = taskDescript[i].tasks
    }
}

function saveDescription (event) { //occurs when pressing the save button
    buttonClicked = $(event.target); //find the <button> element
    savedTask = buttonClicked.parent().siblings().eq(1).text(); //find the appropriate  textDisplay element and save the text
    propertyHour = parseInt(buttonClicked.closest('.row').attr('id')); //find the appropriate id of the row
    taskDescript[propertyHour-9]['tasks'] = savedTask; //save the task in the taskDescript object with the difference between the ID and 9 to correctly index it.  If the amount of properties changed within the object, the difference value will have to be changed.
    storeTasks();

    alert('Saved task for ' + buttonClicked.closest('.time-block').children().eq(0).text())
}

function clearDescriptions (event) {
    toClear = confirm('Are you sure you want to clear your tasks?');
    if (toClear) {
        for (i=0; i<forTextDisplay.length; i++) {
            taskDescript[i]['tasks'] = "No tasks this hour! Click me to edit!"
        }
        renderTasks();
        storeTasks();
    }
}

//Adding and delagating click events on the page.
// $('.description').on('click', editDescription)
$('.saveBtn').on('click', saveDescription)
$("[role='clear']").on('click', clearDescriptions)
init() //obtain from local storage