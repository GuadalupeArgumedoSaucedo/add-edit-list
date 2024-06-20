//put in function
fetch("http://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => DisplayData(data));
function DisplayData(_data) {
   let table = document.getElementById("userTable");
       for(let i=0; i<_data.length; i++) {
       let row = table.insertRow(-1);
       let cell1 = row.insertCell(0);
       let cell2 = row.insertCell(1);
       cell1.innerHTML = _data[i].name;
       cell2.innerHTML = _data[i].email;
       }
}

//send post request
//try to seperate
fetch(endpointUrl, 
   { method: "POST", 
   body: bodyData, 
   headers: {"Content-type":
            "application/json; charset=UTF-8"} 
   }) 
   .then(response => response.json()) 
   .then(json => { 
       // If the POST finishes successfully, ... 
   }); 
   .catch(err => { 
       // If the POST returns an error, ... 
   });

