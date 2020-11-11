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

export {
  getAllRecommendations
};