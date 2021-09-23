
const rideDeleting = async (id) => {
    const addRide = await fetch(`http://localhost:3001/delete_id/${id}`, {
        method: "DELETE",
        mode: "cors",
        headers: {
            'Content-Type': 'application/json'
        }
    });

}






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
        console.log(rideDetails.id)
        rideName.innerHTML = ride_name;

        // const stars = document.querySelector(".stars")
        
        // star rating
        // <div class="stars">
        const starDiv = document.createElement('div')
        starDiv.className = 'stars'
        const form = document.createElement('form')
        form.action = ""
    //       <input class="star star-5" id="star-5" type="radio" name="star"/>
        const star5 = document.createElement('input');
        star5.className = 'star star-5';
        star5.id = 'star-5';
        star5.setAttribute("type", "radio");
        star5.setAttribute("name", "star")
        const star5label = document.createElement('label')
        star5label.className = 'star star-5';
        star5label.setAttribute('for', 'star5')
        //   <input class="star star-4" id="star-4" type="radio" name="star"/>

        //   <label class="star star-4" for="star-4"></label>
        const star4 = document.createElement('input');
        star4.className = 'star star-4';
        star4.id = 'star-4';
        star4.setAttribute("type", "radio");
        star4.setAttribute("name", "star")
        const star4label = document.createElement('label')
        star4label.className = 'star star-4';
        star4label.setAttribute('for', 'star4')
    //       <input class="star star-3" id="star-3" type="radio" name="star"/>
    //       <label class="star star-3" for="star-3"></label>
        const star3 = document.createElement('input');
        star3.className = 'star star-3';
        star3.id = 'star-3';
        star3.setAttribute("type", "radio");
        star3.setAttribute("name", "star")
        const star3label = document.createElement('label')
        star3label.className = 'star star-3';
        star3label.setAttribute('for', 'star3')
    //       <input class="star star-2" id="star-2" type="radio" name="star"/>
    //       <label class="star star-2" for="star-2"></label>
        const star2 = document.createElement('input');
        star2.className = 'star star-2';
        star2.id = 'star-2';
        star2.setAttribute("type", "radio");
        star2.setAttribute("name", "star")
        const star2label = document.createElement('label')
        star2label.className = 'star star-2';
        star2label.setAttribute('for', 'star2')
    //       <input class="star star-1" id="star-1" type="radio" name="star"/>
    //       <label class="star star-1" for="star-1"></label>
        const star1 = document.createElement('input');
        star1.className = 'star star-1';
        star1.id = 'star-1';
        star1.setAttribute("type", "radio");
        star1.setAttribute("name", "star")
        const star1label = document.createElement('label');
        star1label.className = 'star star-1';
        // star1label.for = 'star-1';
        star1label.setAttribute('for', 'star1')
    //     </form>
    //   </div>
        // form.append(star5, star5label, star4, star4label, star3, star3label, star2,star2label,  star1, star1label)
        starDiv.append(star5, star5label, star4, star4label, star3, star3label, star2,star2label,  star1, star1label)
    //     console.log(form)
      
        rideDetails.append(rideName, ridePicture, starDiv, button);
       
       
       
        itineraryContainer.append(rideDetails);

        button.addEventListener('click', e => {
            // e.preventDefault
           
            rideDeleting(e.currentTarget.id)
            const deleteDiv = document.querySelector(`#div-${id}`)
            console.log(deleteDiv)
            deleteDiv.parentNode.removeChild(deleteDiv)


        })
        

        
    }
}

readItinerary();