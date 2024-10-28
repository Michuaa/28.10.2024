// const cars = [{marka:"BMW",model:"M2", opony:{rozmiar:16,rodzaj:"letnie"}},
//     {marka:"BMW",model:"M3",opony:{rozmiar:18,rodzaj:"zimowa"}},
//     {marka:"Audi",model:"A3",opony:{rozmiar:18,rodzaj:"letnie"}}]
// for(let i=0; i<cars.length; i++ ){
//     if(cars[i].opony.rodzaj =="letnie"){
//         cars[i].opony.rodzaj = "zimowe"
//     }
// }
// console.log(cars)
   async function getData(){
const res = await fetch("https://restcountries.com/v3.1/all")
const data = await res.json()
return(data)
    }
 async function nazwy(){
        const kraje = await getData()
        console.log(kraje)
        const ul = document.createElement('ul')
        for(let i in kraje){
            // const li = document.createElement('li')
            // ul.appendChild(li)
            // li.innerHTML = kraje[i].name.common
            // if(kraje[i].continents.length != 1){
            //     const
            // }
            const div = document.createElement('div')
            div.style.border = '1px solid black'
            div.style.width = '200px'
            div.style.height = '400px'
            div.style.backgroundColor = 'grey'
            const img = document.createElement('img')
            img.setAttribute("src",kraje[i].flags.png)
            img.style.width = '200px'
            img.style.height = '150px'
            const h1 = document.createElement('h1')
            h1.textContent = kraje[i].name.common
            h1.style.textAlign = 'center'
            h1.style.color = 'yellow'
            h1.style.fontWeight = 'bolder'
            const h2 = document.createElement('h2')
            const h3 = document.createElement('h3')
            h2.textContent = kraje[i].name.common
            h2.style.textAlign = 'center'
 
            h3.textContent = kraje[i].name.common
            h3.style.textAlign = 'center'


            h2.textContent = kraje[i].name.official
            h3.textContent = kraje[i].continents
            div.appendChild(img)
            div.appendChild(h1)
            div.appendChild(h2)
            div.appendChild(h3)
            document.querySelector('body').appendChild(div)

        }
    }
 nazwy()