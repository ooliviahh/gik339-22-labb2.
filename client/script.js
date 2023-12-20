//Uppgift 6 fetch:
//6.1-6.2
const url = "http://localhost:3000/users";
const responsePromise = fetch(url);


//6.4-6.7 Här är får vi output efter hämtning från server och översättning
// av response. 
responsePromise
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((users) => console.log(users));

  // Uppgift 7 Skriv ut users i en HTML lista
  const newUl = document.createElement("ul"); 
  document.body.appendChild(newUl);
  newUl.classList.add('ul-class'); // Lägg till en klass för styling
  

const request = new Request(url);
fetch(request) 
.then((response) => response.json())
    .then((users) => {
        users.forEach((users) => {
            const listOfItems = document.createElement('li');
            listOfItems.textContent = users.id + ". " + ' Firstname: ' + users.firstName + ', Lastname: ' + users.lastName + ', Username: ' + users.username;
            listOfItems.style.backgroundColor = users.color;
            newUl.appendChild(listOfItems);   
            listOfItems.classList.add('li-class');

            if(users.color === 'yellow') {
              listOfItems.style.backgroundColor = '#edd26a';
            } else if(users.color === 'green') {
                listOfItems.style.backgroundColor = '#669a79'; 
            } else if(users.color === 'red')  {
                listOfItems.style.backgroundColor = '#ed6a6a'; 
            } else if(users.color === 'purple') {
              listOfItems.style.backgroundColor = '#ae98bd'; 
            } else {
              listOfItems.style.backgroundColor = users.color;
            }         
    }); 
});


