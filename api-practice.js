fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => {
    // console.log(data);
  const names = data.map(user => user.name); 
  console.log(names)
  })
  .catch(error => {
    console.log(error);
  });
