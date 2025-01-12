async function handleLogin(event) {
  event.preventDefault(); // Prevent the default form submission

  const formData = new FormData(event.target); // Capture form data
  const username = formData.get('username'); // Get the username
  const password = formData.get('password'); // Get the password

  // Create URLSearchParams to format the data as form data
  const params = new URLSearchParams();
  params.append('username', username);
  params.append('password', password);

  try {
    // Send the login request to the server
    const response = await fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded', // Set the content type
      },
      body: params.toString(), // Use the URLSearchParams string
    });

      if (response.ok) {
        // Retrieve the access token from the response headers
        const token = response.headers.get('access'); // get access token from the header
        // Store the token in localStorage
        localStorage.setItem('jwt', token);
        console.log('로그인이 되었습니다, 토큰정보:', token);
        // Redirect to home.html
        window.location.href = 'home.html'; // Redirect to home page
      } else {
          console.error('로그인 오류:', response.status, response.statusText);
      }
  } catch (error) {
      console.error('Error during fetch:', error);
  }
}