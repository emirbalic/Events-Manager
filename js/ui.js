class UI {
    constructor(){
        //app initialization
        this.init();
    }
    //Method when app starts
    init(){
        this.printCategories();

        this.result = document.getElementById('result');
    }
    //display events
    displayEvents(events){
        //console.log(events);
        //build the template
        let HTMLTemplate = '';

        events.forEach(eventInfo => {
            HTMLTemplate += `
                <div class="col-md-4 mt-4">
                    <div class="card-body">
                        <img class="img-fluid mb-2" src=${eventInfo.logo !==null 
                        ? eventInfo.logo.url : ''}">            
                    </div>
                    <div class="card-body">
                        <div class="card-text">
                            <h2 class="text-center card-title">
                                ${eventInfo.name.text}
                            </h2> 
                            <p class="lead text-info">Event information:</p>
                            <p> ${eventInfo.description.text.substring(0, 200)}...</p>
                            <span class="badge badge-primary">Capacity: ${eventInfo.capacity}</span>
                            <span class="badge badge-secondary">Date & Time: ${eventInfo.start.local}</span>
                            <a href="${eventInfo.url}" target="_blank" class="btn btn-primary btn-block mt-4">Get Tickets</a>

                        </div>
                    </div>
                </div>
            `
        });

        this.result.innerHTML = HTMLTemplate;
    }

    //Print cat
    printCategories(){
        const categoriesList = eventBrite.getCategoriesAPI()
        
        .then(categories => {
            //JAVASCRIPT KNOWS HERE THE OBJECT THAT PC RECEIVED AND IS USING IT NO MATTER WHAT

            const categoriesList = categories.categories.categories;
            
            //console.log(categoriesLista2);
            const categoriesSelect = document.querySelector('select#category'); 


            categoriesList.forEach((category)=>{
                const option = document.createElement('option');
                option.value = category.id;
                option.appendChild(document.createTextNode(category.name));
                categoriesSelect.appendChild(option);
            })
              
        })
        .catch(error => console.error(error));
    }
    printMessage(mesage, className, timeElapse){
        //create a div
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(mesage));

        //insert into html
        const searchDiv = document.querySelector('#search-events');
        searchDiv.appendChild(div);
        setTimeout(() => {
            this.removeMessage();
        }, timeElapse)
    }
    removeMessage(){
        const alert = document.querySelector('.alert');
        if (alert){
            alert.remove();
        }
    }
}