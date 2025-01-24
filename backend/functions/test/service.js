const { executeTestQuery } = require("./data_access");

const testDatabaseConnection = async () => {
  const currentTime = await executeTestQuery();
  return { currentTime };
};

module.exports = {
  testDatabaseConnection,
};
