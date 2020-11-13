import dbQuery  from '../db/dbQuery';
import regeneratorRuntime from "regenerator-runtime";

const getAllRecommendations = async (req, res, next) => {
  console.log('getAllRecommendations is called');
  const getAllRecommendationsQuery = 'SELECT * FROM recommendations';
  try {
    const { rows } = await dbQuery.query(getAllRecommendationsQuery);
    const dbResponse = rows;
    if (!dbResponse[0]) {
      //errorMessage.error = 'There are no trips';
      return res.status(404).send('There are no recommendations');
    }
    //successMessage.data = dbResponse;
    return res.status(200).send(dbResponse);
    next();
  } catch (error) {
    //errorMessage.error = 'Operation was not successful';
    return res.status(500).send('Operation was not successful');
  }
};

const getRecommendation = async (req, res, next) => {
  console.log('getRecommendation is called');
  const { name } = req.query;
  const getRecommendationsQuery = 'SELECT * FROM recommendations where r_name=$1';
  try {
    const { rows } = await dbQuery.query(getRecommendationsQuery, [name]);
    const dbResponse = rows;
    if (!dbResponse[0]) {
      //errorMessage.error = 'There are no trips';
      return res.status(404).send('There are no recommendations');
    }
    //successMessage.data = dbResponse;
    return res.status(200).send(dbResponse);
    next();
  } catch (error) {
    //errorMessage.error = 'Operation was not successful';
    return res.status(500).send('Operation was not successful');
  }
};

const addRecommendation = async (req, res) => {
  const {
    r_name, intensity, benefit_description, url
  } = req.body;
console.log(`r_name: ${r_name}`);
  // if (isEmpty(r_name) || isEmpty(intensity) || isEmpty(benefit_description) || isEmpty(url)) {
  //   errorMessage.error = 'Fields cannot be empty';
  //   return res.status(status.bad).send(errorMessage);
  // }
  const createRecommendationQuery = `INSERT INTO
          recommendations(r_name, intensity, benefit_description, url)
          VALUES($1, $2, $3, $4)
          returning *`;
  console.log(`r_name: ${createRecommendationQuery}`);
  const values = [
    r_name,
    intensity,
    benefit_description,
    url,
  ];
  try {
    const { rows } = await dbQuery.query(createRecommendationQuery, values);
    const dbResponse = rows[0];
    //successMessage.data = dbResponse;
    return res.status(200).send(dbResponse);
  } catch (error) {
    //errorMessage.error = 'Unable to create recommendation';
    console.log(error);
    return res.status(500).send('Unable to create recommendation');
  }

}

export {
  getAllRecommendations,
  getRecommendation,
  addRecommendation
};