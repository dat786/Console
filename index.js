const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const serverData = {
  "menu-version": "1.0.0",
  "min-version": "1.0.0",
  "min-CXS-version": "1.0.0",
  "motd": "Welcome to untitledV2 Join our Discord for support and updates.",
  "discord-invite": "https://discord.gg/z6K8DGYCA6",
  "admins": [
    {"name": "banan", "user-id": "43bc36b6b595E7E4"},
    {"name": "banan 2", "user-id": "43bc36b6b595E7E4"},
    {"name": "sigmavictor", "user-id": "43bc36b6b595E7E4"},
    {"name": "banan 4", "user-id": "43bc36b6b595E7E4"},
    {"name": "waggha", "user-id": "43bc36b6b595E7E4"},
    {"name": "banan 3", "user-id": "43bc36b6b595E7E4"}, 
    {"name": "kiro", "user-id": "43bc36b6b595E7E4"},
    {"name": "sirkb", "user-id": "43bc36b6b595E7E4"}
  ],
  "super-admins": ["banan 2", "banan", "sigmavictor", "banan 4", "waggha", "banan 3", "kiro", "sirkb"],
  "blacklisted-ids": ["B00C644BE8902563"]
};

app.get('/serverdata', (req, res) => {
  res.send(serverData);
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server live at http://localhost:${PORT}/serverdata`);
  });
}

module.exports = app;