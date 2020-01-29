const myAPIEndpoint = 'https://helpinghandfinal.herokuapp.com/user';

const addNewUser = () => {
  document.querySelector('.success').className = 'successactive';

  const fullname = document.querySelector('#full_name').value;
  const username = document.querySelector('#username').value;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  const pnumber = document.querySelector('#phone_number').value;
  const address = document.querySelector('#address').value;
  const bdate = document.querySelector('#birthdate').value;

  fetch(myAPIEndpoint, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "name": fullname,
      "username": username,
      "email": email,
      "password": password,
      "phone_number": pnumber,
      "address": address,
      "birthdate": bdate
    })
  })
  .then(response => console.log(response))
  .then(data => {
    console.log(data);
  });
  document.getElementById('my_form').reset();

};

// const success = () => {
//   document.querySelector('.success').className = 'successactive';
// };

document.querySelector('button').onclick = addNewUser;
// document.querySelector('button').onclick = success;
// document.getElementById('my_form').reset();
