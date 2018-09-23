class EventBrite {
    constructor (){
        this.auth_token = 'BMLXLVMGYSWREMUSS2GA';
        this.orderBy = 'date';
    } 
    // get the events
    async queryAPI(eventName, category){
        //events/search
        //https://www.eventbriteapi.com/v3/events/search/?token=BMLXLVMGYSWREMUSS2GA
        
        const eventsResponse = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${eventName}&sort_by=${this.orderBy}&categories=${category}&token=${this.auth_token}`);

        //wait for response and return as json
        const events = await eventsResponse.json();

        return {
            events
        }
    }

    //get cat API
    async getCategoriesAPI(){
        //query the API
        const categoriesResponse = await fetch 
        (`https://www.eventbriteapi.com/v3/categories/?token=${this.auth_token}`)

        // hold for response and then return as json
        const categories = await categoriesResponse.json();

        return {
            categories
        }
    }
    
}