async function handleLogin(event) {
  event.preventDefault(); // Prevent the default form submission

  const formData = new FormData(event.target); // Capture form data
  const username = formData.get('username'); // Get the username
  const password = formData.get('password'); // Get the password

  try {
      // Send the login request to the server
      const response = await fetch('http://localhost:8080/login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }), // Convert to JSON
      });

      if (response.ok) {
          const data = await response.json();
          const token = data.jwt; // Extract the JWT token
          localStorage.setItem('jwt', token); // Store the token
          console.log('Login successful, token:', token);
      } else {
          console.error('Login failed:', response.status, response.statusText);
      }
  } catch (error) {
      console.error('Error during fetch:', error);
  }
}