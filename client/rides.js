

// The rideAdding function will access the update route from the backend. 
// This will allow the user to add rides from the rides page to the itinerary page.
const rideAdding = async (id) => {
    const addRide = await fetch(`http://localhost:3001/update_itinerary/${id}`, {
        method: "PUT",
        mode: "cors",
        headers: {
            'Content-Type': 'application/json'
        }
    });

}


// The readRides function gets the route that selects all from the rides database. 
// After fetching, the DOM manipulation will access the specific elements needed from the database
//  and display them on the page.
const readRides = async () => {
    const rideData = await fetch ("http://localhost:3001/read_rides", {
        method: "GET",
        mode: "cors",
        headers: {
            'Content-Type': 'application/json'
        }
    })
   
    
    const json = await rideData.json();
    console.log(json)
    for (const i in json.rows){
        const ride_data = json.rows[i]
        const rideContainer = document.querySelector('.ride-container')
        const ride_name = ride_data.ride_name
        const id = ride_data.id
        const ride_url = ride_data.ride_url
        
        const rideName = document.createElement('p');
        rideName.className ="ride-name";
        const ridePicture = document.createElement('img');
        ridePicture.className = "ride-pictures";
        const button = document.createElement('button');
        button.id = id
        console.log(button.id)
        button.className = "add-button"
        button.textContent = "Add to Itinerary"
        ridePicture.src = ride_url
        
        const rideDetails = document.createElement('div');
        rideDetails.className = "ride-details"
        rideName.innerHTML = ride_name;
        
        rideDetails.append(rideName, ridePicture, button);
        
       
        rideContainer.append(rideDetails);
        

         // This is the event listener for the add-button created in the DOM above
        // When the add button is pressed the rideAdding function gets called and the ride
        // is added to the itinerary. 
        // The e.currentTarget.id is used to target the individual rides.
        // The message is added once the user clicks the button so they know the ride has been added
        button.addEventListener('click', e => {
            e.preventDefault
            rideAdding(e.currentTarget.id)
            const message = document.createElement('h4')
            message.innerHTML = `${ride_name} has been added to your itinerary`
            rideDetails.append(message);
           
        })
       
        
    }
    
}

readRides();


