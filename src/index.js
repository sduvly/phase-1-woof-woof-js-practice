let dogArray = []

fetch("http://localhost:3000/pups")
.then(resp => resp.json())
.then(data => {
    console.log(data)
    dogArray = data
    data.forEach(puppy => dogArr(puppy))
})


function dogArr(puppy){
    const div = document.querySelector("#dog-bar")
    const span = document.createElement("span")
    
    span.innerHTML = puppy.name
    div.appendChild(span)
    


    span.addEventListener("click", (e) => {
     //console.log(e)
        const img = document.createElement("img")
        const div2 = document.querySelector("#dog-info")
        const btn = document.createElement("button")
        const h2 = document.createElement("h2")
        img.src = puppy.image
        h2.innerHTML = puppy.name
        
        if(puppy.isGoodDog === true) {
            btn.innerText = "Good Dog!"
        }else{
             btn.innerText = "Bad Dog!"
        }

     btn.addEventListener("click", (e) => {
            
            let dogStatus

            if(e.target.innerText === "Bad Dog!"){
                dogStatus = true
                updateDogInDatabase(dogStatus)
                
            }else{
                dogStatus = false
                updateDogInDatabase(dogStatus)
                
            }
            // send some patch request and change "isGoodDog": false,
            // we are going to base this change on the text on the screen
                })
        div2.appendChild(img)
        div2.appendChild(h2)
        div2.appendChild(btn)
        
    })
    
    function updateDogInDatabase(dogStatus){
        fetch(`http://localhost:3000/pups/${puppy.id}`,{
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({isGoodDog: dogStatus})
        })
    }
    const filterPup = document.querySelector("#good-dog-filter")
    filterPup.addEventListener("click", (e) => {
        const div = document.querySelector("#dog-bar")

        // console.log(e)
        console.log(e.target.innerText)
        // should create an li to display a list of dogs
        if (e.target.innerText === "Filter good dogs: OFF"){
            e.target.textContent = "Filter good dogs: ON"
            div.innerHTML = ''
            let filteredDogs = dogArray.filter(dog => dog.isGoodDog)
            filteredDogs.forEach(dog => dogArr(dog))
        }else{
            div.innerHTML = ''
            e.target.textContent = "Filter good dogs: OFF"
            dogArray.forEach(dog => dogArr(dog))
        }
        
    })




}