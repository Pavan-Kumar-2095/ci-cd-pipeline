const express = require("express");
const app = express();
const PORT = 3000;

const message = "Hello! from Jenkins";
const lastUpdated = new Date().toLocaleString();

app.get("/", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html>
<head>
  <title>CI/CD Dashboard</title>

  <style>
    body {
      margin: 0;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #0b1220;
      font-family: system-ui, Arial;
      color: #e5e7eb;
    }

    /* 🧱 BIG CARD */
    .card {
      background: #111827;
      width: 600px;
      padding: 50px;
      border-radius: 20px;
      text-align: center;
      box-shadow: 0 25px 70px rgba(0,0,0,0.7);
    }

    /* 🔥 BIG TITLE */
    h1 {
      font-size: 34px;
      margin-bottom: 15px;
      color: #ffffff;
    }

    /* SMALL SUBTITLE */
    .subtitle {
      font-size: 16px;
      color: #9ca3af;
      margin-bottom: 30px;
    }

    /* ✨ BIG HIGHLIGHT TEXT */
    .highlight {
      background: #1f2937;
      border: 1px solid #374151;
      padding: 25px;
      border-radius: 14px;

      font-size: 22px;
      font-weight: bold;
      color: #ffffff;

      margin-bottom: 25px;

      animation: glow 1.8s ease-in-out infinite alternate;
    }

    @keyframes glow {
      from {
        box-shadow: 0 0 10px #3b82f6;
        border-color: #3b82f6;
      }
      to {
        box-shadow: 0 0 30px #60a5fa;
        border-color: #60a5fa;
      }
    }

    /* 📦 INFO BOXES */
    .info {
      display: flex;
      justify-content: space-between;
      gap: 12px;
      margin-top: 30px;
    }

    .box {
      flex: 1;
      background: #0f172a;
      padding: 18px;
      border-radius: 12px;
      font-size: 14px;
    }

    .label {
      font-size: 12px;
      color: #6b7280;
      margin-bottom: 6px;
    }

    /* 🟢 BADGE */
    .badge {
      margin-top: 25px;
      display: inline-block;
      padding: 8px 18px;
      font-size: 14px;
      border-radius: 999px;
      background: #2563eb;
      color: white;
      font-weight: bold;
    }

    /* ⏱ TIME */
    .time {
      margin-top: 18px;
      font-size: 13px;
      color: #9ca3af;
    }
  </style>
</head>

<body>
  <div class="card">

    <h1> CI/CD LIVE DASHBOARD</h1>
    <div class="subtitle">
      Jenkins → Docker → Node.js Deployment Visualization
    </div>

    <!-- 🔥 BIG CHANGED TEXT -->
    <div class="highlight">
      ✨ ${message}
    </div>

    <div class="info">
      <div class="box">
        <div class="label">STATUS</div>
        🟢 RUNNING
      </div>

      <div class="box">
        <div class="label">PORT</div>
        3000
      </div>

      <div class="box">
        <div class="label">ENV</div>
        DOCKER
      </div>
    </div>

    <div class="badge">NEW DEPLOYMENT</div>

    <div class="time">
      Last updated: ${lastUpdated}
    </div>

  </div>
</body>
</html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});