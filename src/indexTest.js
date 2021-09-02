
const dogBar = document.querySelector('#dog-bar')

fetch("http://localhost:3000/pups")
.then(resp => resp.json())
.then(pupsArray => pupsArray.forEach(pupObj => addPupToTopBar(pupObj)))


function addPupToTopBar(pupObj){
    let span = document.createElement('span')
    span.textContent = pupObj.name
    dogBar.append(span)

    span.addEventListener('click', (e) => {
        const img = document.createElement("img")
        const div2 = document.querySelector("#dog-info")
        const btn = document.createElement("button")
        const h2 = document.createElement("h2")
        img.src = pupObj.image
        h2.innerHTML = pupObj.name
        
        if(pupObj.isGoodDog === true) {
            btn.innerText = "Good Dog!"
        }else{
             btn.innerText = "Bad Dog!"
        }

        div2.appendChild(img)
        div2.appendChild(h2)
        div2.appendChild(btn)
    })
}



