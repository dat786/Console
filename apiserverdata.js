const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  // Find the HTML file
  const filePath = path.join(process.cwd(), 'api', 'data.html');
  
  // Read the HTML file
  const fileContent = fs.readFileSync(filePath, 'utf8');

  // Send it to the browser
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(fileContent);
};