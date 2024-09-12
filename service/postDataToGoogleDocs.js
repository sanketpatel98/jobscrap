import axios from "axios";

/**
 * Function to post data to Google Sheets API and return the response.
 * @param {Object} inputData - The data to be posted to the API.
 * @returns {Promise<string>} - The response from the API or an error message.
 */
async function postDataToGoogleDocs(inputData) {
  const apiUrl =
    "https://script.google.com/macros/s/AKfycbxpuV_z_ygJsUc1pOVGuPdDGO0Dtkl7ulq0Owbeub_cVA3kEZOk-5Ng3WSUqDXIkRLk/exec";

  try {
    const response = await axios.post(apiUrl, inputData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.data === "Content updated successfully.") {
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
//   coverletter: "Your new cover letter content goes here.akjdnkajsndankjs",
// };

// postDataToGoogleDocs(exampleData)
//   .then((result) => console.log("API Response:", result))
//   .catch((error) => console.error("Error:", error));

// Export the function if you want to use it in other modules
export { postDataToGoogleDocs };