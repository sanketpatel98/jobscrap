import coverLetterFromDescription from "../service/coverLetterFromDescription.js";
import { postDataToGoogleDocs } from "../service/googleSuite/postDataToGoogleDocs.js";

export const getCoverLetter = async (data) => {
  try {
    const finalCoverLetter = await coverLetterFromDescription(data);
    const result = await postDataToGoogleDocs(finalCoverLetter[0]);
    return result;
  } catch (error) {
    console.error("Error generating data:", error);
    throw error;
  }
};
