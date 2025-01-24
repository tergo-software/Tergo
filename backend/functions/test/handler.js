const { testDatabaseConnection } = require("./service");

const testHandler = async () => {
  try {
    const { currentTime } = await testDatabaseConnection();
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Database connection successful",
        currentTime,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Database connection failed",
        error: error.message,
      }),
    };
  }
};

module.exports = {
  testHandler,
};
