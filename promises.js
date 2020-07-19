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


createPost({title:'Post Three',body: 'this is post three'})
.then(getPosts)