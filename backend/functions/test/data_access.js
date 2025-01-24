const { dbClient } = require("../../shared/dbClient");

const executeTestQuery = async () => {
  const query = "SELECT NOW() AS current_time;";
  try {
    const res = await dbClient.query(query);
    return res.rows[0].current_time;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { executeTestQuery };
