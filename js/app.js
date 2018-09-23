//instances

eventBrite = new EventBrite();
ui = new UI();

//event listeners

document.getElementById('submitBtn').addEventListener('click', (e) => {
    e.preventDefault();
    
    const eventName = document.getElementById('event-name').value;
    const category = document.getElementById('category').value;

    //console.log(eventName + ' ' + category );

    if(eventName !== ''){
        //query eventbrite
        eventBrite.queryAPI(eventName, category)
        .then (events => {
            //
            const eventsList = events.events.events;
            if(eventsList.length > 0) {
                console.log(eventsList);
                ui.displayEvents(eventsList);

            } else {
                //print a message // added the time for the message and will add the jquery for the class
                ui.printMessage('No results find', 'alert alert-danger text-center', 5000)
            }
            
        } )

    } else {
        //error
        ui.printMessage('Add an event or a city', 'alert alert-danger text-center mt-4', 3000);
    }
} )