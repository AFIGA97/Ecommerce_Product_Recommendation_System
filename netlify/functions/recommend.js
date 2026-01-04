const fs = require('fs');
const path = require('path');

// Path to the JSON file with real recommendations
const recosPath = path.join(__dirname, '..', '..', 'data', 'user_recos.json');

let userRecos = {};

try {
  const raw = fs.readFileSync(recosPath, 'utf-8');
  userRecos = JSON.parse(raw);
  console.log('Loaded user_recos.json with', Object.keys(userRecos).length, 'users');
} catch (e) {
  console.error('Could not load user_recos.json', e);
}

exports.handler = async (event, context) => {
  const userId = event.queryStringParameters.user_id;

  if (!userId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "user_id is required" })
    };
  }

  const products = userRecos[userId] || [];

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user_id: userId, products })
  };
};
