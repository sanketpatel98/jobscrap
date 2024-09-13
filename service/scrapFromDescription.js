import aimockdata from "aimockdata";

const scrapJob = (data) => {
  const number = 1;
  const parameters = [
    { name: "title", isArray: false },
    { name: "location", isArray: false },
    { name: "level", isArray: false },
    { name: "company", isArray: false },
  ];
  const topic =
    "I want you extract some specific data from a large chunck of data. I will provide you job related webpge data which can be in very bad format. I want you to get me only 4 details from it. Do it for the first company only. PS: Make sure the data for the company parameter must be from the following list(it is your responsibility to select one according to data given): 'Associate','Entry level','Intern', 'Mid-Senior level', 'NA', 'Volunteer', 'Temporary'  ";
  const finalData = topic + data.jd;

  return aimockdata(number, parameters, finalData)
    .then((result) => {
      return result; 
    })
    .catch((error) => {
      console.error("Error generating data:", error);
      throw error; 
    });
};

export default scrapJob;
