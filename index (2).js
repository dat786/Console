const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// This part makes a "Home" page so the site doesn't look broken
app.get('/', (req, res) => {
  res.send('This is the Home Page. Go to /serverdata to see the list!');
});

// This part handles the /serverdata link
app.get('/serverdata', (req, res) => {
  res.json({
    "menu-version": "1.0.0",
    "motd": "Welcome to untitledV2...",
    "admins": [
      {"name": "banan", "user-id": "43bc36b6b595E7E4"},
      {"name": "sigmavictor", "user-id": "43bc36b6b595E7E4"},
      {"name": "banan 3", "user-id": "43bc36b6b595E7E4"}
    ]
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});