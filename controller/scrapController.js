import { postDataToGoogleSheets } from "../service/googleSuite/postDataToGoogleSheets.js";
import scrapJob from "../service/scrapFromDescription.js";

export const getJobMetaData = async (data) => {
  try {
    const metaData = await scrapJob(data);
    await postDataToGoogleSheets(metaData[0]);
    return metaData;
  } catch (error) {
    console.error("Error:" + error);
    throw error;
  }
};
