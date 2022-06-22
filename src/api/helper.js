export async function postNewsLetterData(formData) {
  try {
    fetch(process.env.NEWS_CONTACT_URL, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': process.env.SHEETS_API_KEY,
      },
      body: formData,
    })
      .then((r) => r.json())
      .then((data) => {
        // The response comes here
        alert('Message sent!', data);
      })
      .catch((error) => {
        // Errors are reported there
        alert('Error sending message! ');
      });
  } catch (error) {
    alert('error', error);
  }
}

export async function postFormData(formData) {
  try {
    fetch(process.env.CONTACT_URL, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': process.env.SHEETS_API_KEY,
      },
      body: formData,
    })
      .then((r) => r.json())
      .then((data) => {
        // The response comes here
        alert('Message sent!', data);
      })
      .catch((error) => {
        // Errors are reported there
        alert('Error sending message!', error);
      });
  } catch (error) {
    alert('error', error);
  }
}
