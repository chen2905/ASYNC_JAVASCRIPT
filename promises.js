const posts= [
    {title:'Post One', body: 'This is post one'},
    {title:'Post One', body: 'This is post two'},
    
]

function getPosts(){

  
    setTimeout(()=>{
        let output=''
        posts.forEach((post)=>{
            console.log(`<li>${post.body}</li>`)
        })
       document.body.innerHTML =output
    },500)
}
function createPost(post){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            posts.push(post)
            const error =false
            if(!error){
                resolve()
            }else{
                reject('Error:something went wrong')
            }
        },2000)

    })
}


// createPost({title:'Post Three',body: 'this is post three'})
// .then(getPosts)

// Promise.all
// const promise1 =  Promise.resolve('Hello World')
// const promise2 = 1000
// const promise3 = new Promise((resolve,reject)=>{
//     setTimeout(resolve,2000,'goodbye')
// })
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then((res)=>{
//     return res.json()
// })
// Promise.all([promise1, promise2,promise3,promise4]).then (values=>console.log(values));


//Async /Await

// async function init(){
//     await createPost({title:'Post Three',body: 'this is post three'})
//     getPosts()
// }

// init()
//async/ await/ fetch
async function fetchUsers(){
    const jsonUser =await    fetch('https://jsonplaceholder.typicode.com/users')
    return await jsonUser.json()
}

const jsonUser = fetchUsers()

console.log (jsonUser)