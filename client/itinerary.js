const readItinerary= async () => {
    // const url = "http://localhost:3001/read_rides";
    const itineraryData = await fetch ("http://localhost:3001/read_itinerary", {
        method: "GET",
        mode: "cors",
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const json = await itineraryData.json();
    console.log(json)
    for (const i in json.rows){
        const itinerary_data = json.rows[i]
        const itineraryContainer = document.querySelector('.itinerary-container')
        const ride_name = itinerary_data.ride_name
        const id = itinerary_data.id
        const ride_url = itinerary_data.ride_url
        console.log(ride_url)
        const rideName = document.createElement('p');
        rideName.className ="ride-name";
        const ridePicture = document.createElement('img');
        ridePicture.className = "itinerary-pictures";
        const button = document.createElement('button');
        button.className = "delete-button"
        button.textContent = "Delete from Itinerary"
        ridePicture.src = ride_url
        console.log(ridePicture)
        const rideDetails = document.createElement('div');
        rideDetails.className = "ride-details"
        rideName.innerHTML = ride_name;
        console.log(rideName)
        rideDetails.append(rideName, ridePicture, button);
        console.log(rideDetails)
        console.log(itineraryContainer)
       
        itineraryContainer.append(rideDetails);
        

        
    }
}

readItinerary();