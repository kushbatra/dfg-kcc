import dbQuery  from '../db/dbQuery';
import regeneratorRuntime from "regenerator-runtime";
import util from "util";

const getActivities = async (req, res, next) => {
  console.log('getActivities is called');
  const { fatigue, platelets, pain, place } = req.query;
  const getActivitiesQuery = 'SELECT activity_id FROM login_form where fatigue_level=$1 and platelets_level=$2 and pain_level=$3 and place=$4';
  console.log(`getActivities is called: ${platelets} ${pain} ${place}`);
  try {
    const { rows } = await dbQuery.query(getActivitiesQuery, [fatigue, platelets, pain, place]);
    console.log(`getActivities is called: ${rows}`);
    const dbResponse = rows;
    if (!dbResponse[0]) {
      return res.status(404).send('There are no activities');
    }
    for (let i = 0; i < dbResponse.length; i++) {
      console.log(util.inspect(dbResponse[i], {showHidden: false, depth: null}));
      //const { rows } = await dbQuery.query(getActivitiesQuery, [fatigue, platelets, pain, place]);
    }
    return res.status(200).send(dbResponse);
    next();
  } catch (error) {
    return res.status(500).send('Operation was not successful');
  }
};

export {
  getActivities
};