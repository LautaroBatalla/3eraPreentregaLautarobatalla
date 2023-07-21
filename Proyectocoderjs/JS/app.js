
document.getElementById('registro').addEventListener('click', function() {
  register();
});


function register() {
  const name = document.getElementById('name').value;
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  
  if (name === '' || username === '' || password === '') {
     
      Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Por favor, completa todos los campos.',
      });
      return;
  }

  
  const user = {
      name: name,
      username: username,
      password: password,
  };

 
  localStorage.setItem('user', JSON.stringify(user));

  
  Swal.fire({
      icon: 'success',
      title: 'Registro exitoso',
      text: 'El usuario ha sido registrado correctamente.',
  });

  document.getElementById('registrationForm').reset();
}


window.addEventListener('load', function() {
  const userJSON = localStorage.getItem('user');
  if (userJSON !== null) {
      const user = JSON.parse(userJSON);
     
      console.log(user);
  }
});


document.getElementById('registrolog').addEventListener('click', function() {
  
});






