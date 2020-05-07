fetch("https://api.github.com/users/lukecarnevale")
  .then((response) => response.json())
  .then(function (data) {
    console.log(data);
    header.innerHTML = `<h1>${data.name}</h1>`
    infoList.innerHTML = `
    <ul>Name: ${data.name}</ul>
    <ul>GitHub URL: ${data.html_url}</ul>
    <ul>Website: ${data.blog}</ul>
    <ul>Location: ${data.location}</ul>`
    bio.textContent = `${data.bio}`
    avatar.innerHTML = `<img src=${data.avatar_url} alt="avatar">`
});

let body = document.getElementsByTagName("body")[0]
let header = document.createElement("header")
header.classList.add("header")
body.appendChild(header)
let card = document.createElement("div")
card.classList.add("card")
body.appendChild(card)
let theBasics = document.createElement("div")
theBasics.classList.add("theBasics")
card.appendChild(theBasics)
theBasics.innerHTML = `<h2>The Basics</h2>`
let infoList = document.createElement("ul")
theBasics.appendChild(infoList)
let theStory = document.createElement("div")
theStory.classList.add("theStory")
card.appendChild(theStory)
theStory.innerHTML = `<h2>The Story</h2><p></p>`
let bio = document.getElementsByTagName("p")[0]
let avatar = document.createElement("div")
avatar.classList.add("avatar")
card.appendChild(avatar)




//In Class Exercise

// let dataSection = document.querySelector('#body')

// fetch('https://api.github.com/users/lukecarnevale')
//     .then(function(response){  //'promise' can be swapped with 'response'
//         console.log(respose)
//         return response.json()
        
//     })
//     .then(function(data){
//     //now we can work with the data
//     console.log(data)
//     let orgName = data.name  // getting name of organization --> or in this case 'user name'
//     console.log(orgName)
//     return data.repos_url
//     })
//     .then(reposUrl => fetch(reposUrl))

//     .then(function(img){
//         //now we can work with the data
//         console.log(img)
//         let imgName = data.avatar_url  // getting name of organization --> or in this case 'user name'
//         console.log(imgName)
//         return data.avatar_url
//         })
//         .then(reposUrl => fetch(reposUrl))
    




//     //  Same as above 
//     .then(function(url){
//         return fetch(url)
//     })
//     .then(response => response.json())
//     .then(function(reposData) {
        
//         console.log(reposData)
//         let container = document.querySelector('#body')
//         const repoList = document.createElement('ul')
//         container.appendChild(repoList)
//         for (let repo of reposData){
//             console.log(repo.full_name) //looking for a console log for each repo
//              const listItem = document.createElement('ul')
//              listItem.textContent = repo.full_name
//             //  listItem.classList.add('ph3','pv2','bb,'b--light-silver)
//              repoList.appendChild(listItem)
//         }
        
//     })