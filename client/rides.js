

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
const rideAdding = async (id) => {
    const addRide = await fetch(`http://localhost:3001/select_id/${id}`, {
        method: "GET",
        mode: "cors",
        headers: {
            'Content-Type': 'application/json'
        }
    });

}


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
        
        button.addEventListener('click', e => {
            e.preventDefault
           
            console.log( e.currentTarget.id)
            rideAdding(e.currentTarget.id)
        })
       
        
    }
    
}

readRides();

// const button = document.querySelector('.add-button')
// console.log(button.id)
// function buttonID (){
//     console.log(button.id)
// }
// button.addEventListener('click', e => {
//     buttonID()
// });
