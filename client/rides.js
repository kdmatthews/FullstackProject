

// RIDES


// const readData = async () => {
//     const url = "http://localhost:3007/getItems";
//     const userData = await fetch (url, {
//         method: "POST",
//         mode: "cors",
//         headers: {
//             'Content-Type': 'application/json',
//             },
        
//     });
//     const json = await userData.json();
//     for(const item of json) {
//         const todo_item = item.todo_item
//         const itemName = document.createElement('p');
//         const itemDetails = document.createElement('div')
//         itemName.innerHTML = todo_item
//         itemDetails.append(itemName);
//         mainContainer.append(itemDetails);


const readRides = async () => {
    // const url = "http://localhost:3001/read_rides";
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
        console.log(ride_url)
        const rideName = document.createElement('p');
        rideName.className ="ride-name";
        const ridePicture = document.createElement('img');
        ridePicture.className = "ride-pictures";
        const button = document.createElement('button');
        button.className = "add-button"
        button.textContent = "Add to Itinerary"
        ridePicture.src = ride_url
        console.log(ridePicture)
        const rideDetails = document.createElement('div');
        rideDetails.className = "ride-details"
        rideName.innerHTML = ride_name;
        console.log(rideName)
        rideDetails.append(rideName, ridePicture, button);
        console.log(rideDetails)
        console.log(rideContainer)
       
        rideContainer.append(rideDetails);
        

        
    }
}

readRides();

