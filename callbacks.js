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
createPost({title:'Post Three',body: 'this is post three'},getPosts)
//getPosts()


function createPost(post,callback){
    setTimeout(()=>{
        posts.push(post)
        callback();
    },2000)
}

