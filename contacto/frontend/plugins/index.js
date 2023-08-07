document.getElementById('contactForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      birthdate: formData.get('birthdate'),
      opinion: formData.get('password'),
  };

  try {
      const response = await fetch('http://localhost:3316/api/contactos', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      });

      if (response.ok) {
          const contacto = await response.json();
          console.log('Contacto registrado:', contacto);
      } else {
          const errorMessage = await response.json();
          console.error('Error:', errorMessage.message);
      }
  } catch (error) {
      console.error('Error:', error);
  }location.reload();
});