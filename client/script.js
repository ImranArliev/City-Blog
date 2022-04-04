const main = document.querySelector('main'); 

fetch('http://localhost:3000/posts').then((res) => res.json()).then((data) => showPosts(data)); 
 
let postsArr = []; 
 
const showPosts = (posts) => { 
  postsArr.push(posts); 
  posts.map((post) => { 
    return (main.innerHTML += ` 
    <div class ="block post${post.id}"> 
       <div class = "standartMode active">  
            <img class = "img__post" src = "${post.img}">
            <h2 cla 
              ss = "text " id ="title">Город: ${post.title}</h2> 
            <h2 class = "text" id ="descr">Описание: ${post.descr}</h2>
            <h2 class = "text text-mode" id = "pop">Население: ${post.pop}</h2> 
        <div class = "buttons">
        <button id ="${post.id}" class = "btn-delete btnn">Удалить</button> 
       <button id ="${post.id}" class = "btn-edit btnn">Редактировать</button>  
        </div>
    </div> 
<form class ="editMode">  
<input  type = "text" class = "title modification-title" name="title" value = "${post.title}" > 
<input  type="text" class ="editImg" name ="img" value = "${post.img}">
<input  type = "text" class = "descr" name="descr" value = "${post.descr}" > 
<input  type = "text" class = "pop" name="descr" value = "${post.pop}" > 
<input type="submit" class="change-btn btnn" "value ="Сохранить" id="${post.id}"> 
</form> 
    </div> 
 
     `); 
  }); 
}; 
 
document.addEventListener('click' , e => { 
  if(e.target.matches('.btn-delete')){ 
    delPost(e.target.id) 
  } 
  if(e.target.matches('.btn-edit')){  
    let edit = document.querySelector(`.post${e.target.id}`) 
    edit.querySelector('.standartMode').classList.toggle('active') 
    edit.querySelector('.editMode').classList.toggle('active') 
  } 
}) 
 
 
 document.addEventListener('click' , (e) => { 
   e.preventDefault() 
    if(e.target.matches('.change-btn')){ 
  let form = document.querySelector(`.post${e.target.id}`).querySelector('.editMode') 
  let img = form.querySelector('.editImg').value
  let title = form.querySelector('.title').value 
  let descr = form.querySelector('.descr').value
  let pop = form.querySelector('.pop').value 
  changePost(e.target.id , img, title , descr, pop) 
  } 
}) 
 
const changePost = (id , img, title , descr, pop) => { 
  const change = { 
    img,
    title, 
    descr,
    pop
  } 
  fetch(`http://localhost:3000/posts/${id}` , { 
    method: 'PUT' , 
    headers: { 
      'Content-Type': 'application/json' 
    }, 
    body: JSON.stringify(change) 
  }) 
} 
 
 
 
const delPost = (id) => { 
  fetch(`http://localhost:3000/posts/${id}`, { 
    method: 'DELETE', 
  }); 
}; 
 







// let main = document.querySelector("main")


// fetch("http://localhost:3000/posts").then(res => res.json()).then(data => showPosts(data))


// const showPosts = posts => {
//   posts.map((post) =>{
//     return main.innerHTML += `
//     <div class="block post${post.id}">


//        <div class="standart active">
//          <h1 class="id">${post.id}</h1>
//          <p class="text" id="title">Title: ${post.title}</p>
//          <p class="text" id="descr">Description: ${post.descr}</p>
//          <button class="btn-delete btnn" id="${post.id}"> Удалить </button>
//          <button class="btn-edit btnn" id="${post.id}"> Редактировать </button>  
//        </div>


//        <form class="editMode">
//         <input type = "text" class = "title modification-title" value = "${post.title}" > 
//         <input type = "text" class = "descr" value = "${post.descr}" > 
//         <input type = "submit" class = "change-btn btnn" value="Сохранить" id="${post.id}"> 
//        </form>
//     </div>
//     `
//   })
// }



// document.addEventListener('click', (e) => {
//   if(e.target.matches('.btn-delete')){
//     delPosts(e.target.id)
//   }
//   if(e.target.matches('.btn-edit')){
//     let edit = document.querySelector(`.post${e.target.id}`)
//     edit.querySelector('.standart').classList.toggle('active')
//     edit.querySelector('.editMode').classList.toggle('active')
//     // Array.from(edit.querySelectorAll(".editMode")).map(item => item.classList.toggle('active'))
//     // Array.from(edit.querySelectorAll(".standartMode")).map(item => item.classList.toggle('active'))
//     // edit.querySelector(".change-btn").classList.toggle('active')
//   }
// })



//  document.addEventListener('click' , (e) => { 
//    e.preventDefault() 
//     if(e.target.matches('.change-btn')){ 
//   let form = document.querySelector(`.post${e.target.id}`).querySelector('.editMode') 
//   let title = form.querySelector('.title').value 
//   let descr = form.querySelector('.descr').value 
//   changePost(e.target.id , title , descr) 
//   } 
// }) 

// // document.addEventListener('click' , e => {
// //   if(e.target.matches('.change-btn')){
// //     let form = document.querySelector(`.post${e.target.id} form`)
// //     let title = form.querySelector('.title').value
// //     let descr = form.querySelector('.descr').value
// //     changePost(e.target.id, title, descr)
// //   }
// // })

// const changePost = (id, title, descr) => {
//   let change = {
//     title,
//     descr
//   }
//   fetch(`http://localhost:3000/posts/${id}`, {
//     method: "PUT",
//     headers: {
//      "Content-Type" : "appliaction/json"
//    },
//     body: JSON.stringify(change)
//   })
// }




