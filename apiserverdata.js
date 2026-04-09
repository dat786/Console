export default function handler(req, res) {
  res.setHeader("Content-Type", "application/json");

  res.status(200).json({
    "menu-version": "1.0.0",
    "min-version": "1.0.0",
    "min-CXS-version": "1.0.0",
    "motd": "Welcome to untitledV2 Join our Discord for support and updates.",
    "discord-invite": "https://discord.gg/z6K8DGYCA6",
    "admins": [
      { "name": "imudtrust4", "user-id": "9157B6874B6C884D" },
      { "name": "imudtrust3", "user-id": "B4924E637C16EAF" }
    ],
    "super-admins": [
      "imudtrust3",
      "imudtrust2",
      "imudtrust"
    ],
    "blacklisted-ids": [
      "B00C644BE8902563"
    ]
  });
}