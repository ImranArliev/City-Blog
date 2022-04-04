
let form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let title = e.target.title.value;
    let descr = e.target.descr.value;
    let img = e.target.img.value;
    let pop = e.target.pop.value;
    const addPost = {
        img,
        title,  
        descr,
        pop

    };  

    fetch("http://localhost:3000/posts" , {
        method: 'POST',
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(addPost)
    })
});



// let form = document.querySelector('form');

// addEventListener('submit', (e) => {
// e.preventDefault();
// let title = e.target.title.value;
// let descr = e.target.descr.value;

// const addPost = (post) => {
//     id,
//     title,
//     descr
// };
// fetch("  http://localhost:3000/posts", {
//     method : 'POST',
// headers : { 'Content-Type': 'application/json'},
// body : JSON.stringify(addPost)

// })
// })


