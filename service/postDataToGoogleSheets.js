import axios from 'axios';

/**
 * Function to post data to Google Sheets API and return the response.
 * @param {Object} inputData - The data to be posted to the API.
 * @returns {Promise<string>} - The response from the API or an error message.
 */
async function postDataToGoogleSheets(inputData) {
  const apiUrl = 'https://script.google.com/macros/s/AKfycbzSaZLVfy3pVwM1EAroVSSLfR2U5ussJD0F6HY7O0aJZyLaIfTtHp5ScNL-wLbIoCnPAA/exec';

  try {
    const response = await axios.post(apiUrl, inputData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.data === "Data added successfully") {
      return inputData;
    } else {
      throw new Error(`Unexpected response: ${response.data}`);
    }
  } catch (error) {
    return { error: error.message };
  }
}

// Example usage:
// const exampleData = {
//   "company": "Mpac Group",
//   "level": "Mid-Senior level",
//   "location": "Mississauga, ON",
//   "title": "Application Engineer"
// }

// postDataToGoogleSheets(exampleData)
//   .then(result => console.log('API Response:', result))
//   .catch(error => console.error('Error:', error));

// Export the function if you want to use it in other modules
export { postDataToGoogleSheets };
