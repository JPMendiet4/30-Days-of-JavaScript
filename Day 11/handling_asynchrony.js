function getUserData(userId, callback) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => response.json())
      .then(data => callback(data))
      .catch(error => console.log(error))
  }
  
  function displayUserData(data) {
    console.log(data.name);
  }
  
  getUserData(1, displayUserData);