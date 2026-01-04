// Very simple mock recommendations
const mockData = {
  "user1": ["itemA", "itemB", "itemC"],
  "user2": ["itemD", "itemE"],
};

exports.handler = async (event, context) => {
  const userId = event.queryStringParameters.user_id;

  if (!userId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "user_id is required" })
    };
  }

  const products = mockData[userId] || [];

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user_id: userId, products })
  };
};
