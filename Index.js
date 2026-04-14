const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Demo App</title>
      <style>
        body {
          margin: 0;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #667eea, #764ba2);
          font-family: Arial, sans-serif;
        }

        .box {
          padding: 40px 60px;
          background: white;
          border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
          text-align: center;
        }

        h1 {
          margin: 0;
          font-size: 28px;
          color: #333;
        }

        p {
          margin-top: 10px;
          color: #666;
        }
      </style>
    </head>
    <body>
      <div class="box">
        <h1>Hello from Jenkins 🚀</h1>
        <p>This is a simple Docker + Node.js demo app</p>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);;
});