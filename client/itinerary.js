

// The rideDeleting function will access the delete route from the backend. 
// This will allow the user to delete rides from the itinerary.
const rideDeleting = async (id) => {
    const addRide = await fetch(`http://localhost:3001/delete_id/${id}`, {
        method: "DELETE",
        mode: "cors",
        headers: {
            'Content-Type': 'application/json'
        }
    });

}



// The readItinerary function gets the route that selects all from the itinerary database. 
// After fetching, the DOM manipulation will access the specific elements needed from the database
//  and display them on the page.

const readItinerary= async () => {
    const itineraryData = await fetch ("http://localhost:3001/read_itinerary", {
        method: "GET",
        mode: "cors",
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const json = await itineraryData.json();
    for (const i in json.rows){
        const itinerary_data = json.rows[i]
        const itineraryContainer = document.querySelector('.itinerary-container')
        const ride_name = itinerary_data.ride_name
        const id = itinerary_data.id
        const ride_url = itinerary_data.ride_url
        const rideName = document.createElement('p');
        rideName.className ="ride-name";
        const ridePicture = document.createElement('img');
        ridePicture.className = "itinerary-pictures";
        const button = document.createElement('button');
        button.id = id
        button.className = "delete-button"
        button.textContent = "Delete from Itinerary"
        ridePicture.src = ride_url 
        const rideDetails = document.createElement('div');
        rideDetails.className = "ride-details"
        rideDetails.id = `div-${id}`
        rideName.innerHTML = ride_name;

        rideDetails.append(rideName, ridePicture, button);
        itineraryContainer.append(rideDetails);

        // This is the event listener for the delete-button created in the DOM above
        // When the delete button is pressed the rideDeleting function gets called and the ride
        // is delted from the itinerary. 
        // The deleteDiv portion allows it to target the individual id for each ride so it only deletes
        // the ride selected by the user and not all of the rides without having to refresh the page.
        button.addEventListener('click', e => {
            e.preventDefault
           
            rideDeleting(e.currentTarget.id)
            const deleteDiv = document.querySelector(`#div-${id}`)
            deleteDiv.parentNode.removeChild(deleteDiv)


        })
        

        
    }
}


readItinerary();