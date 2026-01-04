let stat = document.getElementById("status");

let btn = document.getElementById("btn");

let userlist = document.getElementById("userlist");

stat.textContent = ``;

let fetchcall = async function(e){
   if(e) e.preventDefault();

    userlist.innerHTML = "";
    stat.textContent = "data is getting......";
    stat.style.color = "black";
    try{
        let response = await fetch("https://695929366c3282d9f1d6c45c.mockapi.io/users");

        if(!response.ok){
            throw new Error("User data is got Failed ")
        }

        let users = await response.json();

        console.log(users)
        users.forEach(user => {
            let li = document.createElement("li");

            li.textContent = `${user.id}. ${user.name} and mail id is ${user.email}. `

            userlist.appendChild(li);
        });

           stat.textContent = `User list get succssesfully`;
    stat.style.color = "green";


    }catch(error){
        console.log(error.message)
         stat.textContent = `${error.message}`;
    stat.style.color = "red";
    }


}

btn.addEventListener("click", fetchcall);


let form = document.getElementById("myform");
let statusofpost = document.getElementById("statusofpost");

form.addEventListener("submit", async function (e) {
    console.log("hii")
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let password = document.getElementById("password").value;

    let userData = {name, email, age, password};

     statusofpost.textContent = "data is posting........"
     statusofpost.style.color = "black";

     try{
        let response = await fetch("https://695929366c3282d9f1d6c45c.mockapi.io/users",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(userData)
        });

        if(!response.ok){
            throw new Error("Failed to post user data");
        }

        let data = await response.json();

        console.log(data);
          statusofpost.textContent = "User data post successfully"
     statusofpost.style.color = "green";
setTimeout(()=>{
statusofpost.textContent = "";
},10000)
   fetchcall()

     }catch(error){
        console.log(error.message)
          statusofpost.textContent = error.message;
     statusofpost.style.color = "red";
     }

      
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("age").value = "";
    document.getElementById("password").value = "";
    
})


// ----------------------------Delete api--------------------

let deleteBtn = document.getElementById("deleteBtn");
let statusofdelete = document.getElementById("statusofdelete")
deleteBtn.addEventListener("click", async function(e){
    if(!confirm("Are you sure?")) return;
    e.preventDefault();
    let userId = prompt("Enter here id of user you want to be delete");
    statusofdelete.textContent = "user is deleting....";
    statusofdelete.style.color = "black";

    try{
        let response = await fetch(`https://695929366c3282d9f1d6c45c.mockapi.io/users/${userId}`,{
            method :"DELETE"
        });

        if(!response.ok){
            throw new Error("USER IS NOT DELETE");
        }

           statusofdelete.textContent = "user is successfully deleted";
    statusofdelete.style.color = "red";

    }catch(error){
           statusofdelete.textContent = `${error.message}`;
    statusofdelete.style.color = "red";
    }
    fetchcall()
})

// ------------------------------put api -----------------------


let myformPut = document.getElementById("myformPut");
let statusofput = document.getElementById("statusofput");

myformPut.addEventListener("submit", async function(e){

    e.preventDefault()
    let name = document.getElementById("namePut").value;
    let userId = document.getElementById("userIdPut").value;
    let email = document.getElementById("emailPut").value;
    let age = document.getElementById("agePut").value;
    let password = document.getElementById("passwordPut").value;

    const UserData = {}

    if(name) UserData.name = name;
    if(email) UserData.email = email;
    if(age) UserData.age = age;
    if(password) UserData.password = password;

    statusofput.textContent = "User data is updating......";
    statusofput.style.color = "black";

    try{
        let response = await fetch(`https://695929366c3282d9f1d6c45c.mockapi.io/users/${userId}`,{
            method: "PUT",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify(UserData)
        })

        if(!response.ok){
            throw new Error("Failed to update User data");
        }

        let data = await response.json();
        console.log(data);
            statusofput.textContent = "User data successfully updated";
    statusofput.style.color = "green";

    }catch(error){
        console.log(error.message);
          statusofput.textContent = `${error.message}`;
    statusofput.style.color = "red";

    }

     document.getElementById("namePut").value = "";
 document.getElementById("userIdPut").value = "";
document.getElementById("emailPut").value = "";
document.getElementById("agePut").value = "";
document.getElementById("passwordPut").value =  "";
    fetchcall();

})


// ------------------------------patch api -----------------------


// let myformPatch = document.getElementById("myformPatch");
// let statusofpatch = document.getElementById("statusofpatch");

// myformPatch.addEventListener("submit", async function(e){

//     e.preventDefault()
//     let name = document.getElementById("namePatch").value;
//     let userId = document.getElementById("userIdPatch").value;
//     let email = document.getElementById("emailPatch").value;
//     let age = document.getElementById("agePatch").value;
//     let password = document.getElementById("passwordPatch").value;

//     const UserData = {}

//     if(name) UserData.name = name;
//     if(email) UserData.email = email;
//     if(age) UserData.age = age;
//     if(password) UserData.password = password;

//     statusofpatch.textContent = "User data is updating......";
//     statusofpatch.style.color = "black";

//     try{
//         let response = await fetch(`https://695929366c3282d9f1d6c45c.mockapi.io/users/${userId}`,{
//             method: "PATCH",
//             headers:{
//                 "Content-Type" : "application/json"
//             },
//             body:JSON.stringify(UserData)
//         })

//         if(!response.ok){
//             throw new Error("Failed to update User data");
//         }

//         let data = await response.json();
//         console.log(data);
//             statusofpatch.textContent = "User data successfully updated";
//     statusofpatch.style.color = "green";

//     }catch(error){
//           statusofpatch.textContent = `${error.message}`;
//     statusofpatch.style.color = "red";

//     }

//      document.getElementById("namePatch").value = "";
//  document.getElementById("userIdPatch").value = "";
// document.getElementById("emailPatch").value = "";
// document.getElementById("agePatch").value = "";
// document.getElementById("passwordPatch").value =  "";
//     fetchcall();

// })


