// -Crea una catena di Promises per simulare un'operazione asincrona in più fasi. -La prima Promise recupera i dati dell'utente { id: 1, name: 'John' }. -La seconda Promise recupera i post dell'utente ['Post 1', 'Post 2', 'Post 3']. -Infine, chiama le funzioni per recuperare e stampare in console il nome dell'utente e i titoli dei post.

function fetchUserData() {
    console.log("Sto cercando i dati...")
    return new Promise((resolve, reject)=>{
        setTimeout(() =>{

            const user = {id: 1, name: "John"}
            if(user) {
                resolve(user)
            } else {
                reject("Errore")
            }

        }, 2000)
        
    })
  }
  
  function fetchUserPosts(userId, userName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const posts = ["Post 1", "Post 2", "Post 3"];
            if (userId && userName) {
                resolve(posts);
            } else {
                reject("Errore");
            }
        }, 1000);
    });
}
  
fetchUserData()
.then((userData) => {
    console.log(`User: ${userData.name}`);
    return fetchUserPosts(userData.id, userData.name);
})
.then((userPosts) => {
    console.log(userPosts);
})
.catch((error) => {
    console.log("Errore:", error);
});