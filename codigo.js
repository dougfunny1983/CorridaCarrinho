window.onload = function() {
    let changeHeading = document.getElementById("change_heading")
    changeHeading.innerText = "Hello World!"
​
    let section = document.querySelector("section")
    section.addEventListener("mouseover", function(event){
        let selectedColor = document.querySelector(".selected")
        selectedColor.innerHTML = event.target.className
    })
​
    function reset(car1, car2) {
        car1.style.marginLeft = 0
        car2.style.marginLeft = 0
        clearInterval(car1.timer)
        clearInterval(car2.timer)
        button.disabled = false
    }
​
    let newDiv = document.createElement("div")
    newDiv.className = "purple"
    section.appendChild(newDiv)
​
    let car1 = document.querySelector(".car1")
    car1.style.marginLeft = 0;
    let car2 = document.querySelector(".car2")
    car2.style.marginLeft = 0;
​
    let button = document.querySelector("button")
    button.addEventListener("click", function(event) {
        button.disabled = true
        car1.timer = setInterval(function() {
            car1.style.marginLeft = parseInt(car1.style.marginLeft) + Math.random() * 60 + 'px'
            if (parseInt(car1.style.marginLeft) > window.innerWidth) {
                alert("Carro 1 ganhou!")
                reset(car1, car2)
            }
        }, 60)
​
        car2.timer = setInterval(function() {
            car2.style.marginLeft = parseInt(car2.style.marginLeft) + Math.random() * 60 + 'px'
            if (parseInt(car2.style.marginLeft) > window.innerWidth) {
                alert("Carro 2 ganhou!")
                reset(car1, car2)
            }
        }, 60)
    })
}