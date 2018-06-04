
let objDishesDiv = document.getElementById("dishesDiv")
let objStarterDiv = document.getElementById("startersLi")
let objEntreeDiv = document.getElementById("entreesLi")
let objDessertDiv = document.getElementById("dessertsLi")
let objMenuH= document.getElementById("menuH")

window.addEventListener('load',function() {
    let alldishesArray = dishes.map(function(dish)  {
                return (dish)        
    })    
    displayDishes(alldishesArray)
})

objMenuH.addEventListener('click',function() {
    objDishesDiv.innerHTML = ""
    let alldishesArray = dishes.map(function(dish)  {
                return (dish)        
    })    
    displayDishes(alldishesArray)
})


objStarterDiv.addEventListener('click',function() {
    objDishesDiv.innerHTML = ""
    let startersArray = dishes.filter(function(dish) {
        return (dish.course == "Starters")
    }) 
    objDishesDiv.innerHTML = `<h1>Starters</h1>
                                <hr>`
                              
    displayDishes(startersArray)
})

 
objEntreeDiv.addEventListener('click',function() {
    objDishesDiv.innerHTML = ""
    let entreesArray = dishes.filter(function(dish) {
        return (dish.course == "Entrees")
    }) 
    objDishesDiv.innerHTML = `<h1>Entrees</h1>
                                <hr>`
    displayDishes(entreesArray)
})


objDessertDiv.addEventListener('click',function() {
    objDishesDiv.innerHTML = ""
    let dessertsArray = dishes.filter(function(dish) {
        return (dish.course == "Desserts")
    }) 
    objDishesDiv.innerHTML = `<h1>Desserts</h1>
                                <hr>`
    displayDishes(dessertsArray)
})



function displayDishes(dishesArray){
    dishesArray.forEach(function(dish) {    
        let divDishItem = `<div class="dishtitle-container">                   
                    <p>${dish.title}</p>
                    </div>
                    <div class = "imagedetails-container">
                        <div class ="dishimage-container">
                            <img src=${dish.imageURL}></img>
                        </div>    
                        <div class ="dishdetails-container">
                            <p> Description: ${dish.description}</p>
                            <p> Course: ${dish.course}</p>
                            <p> Price: $ ${dish.price}</p> 
                        </div>     
                        <div class="divId"><p>${dish.id}</p></div>                                                          
                    </div>`
        objDishesDiv.innerHTML += divDishItem
    })
}



