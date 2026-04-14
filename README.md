# 🚀 Jenkins + Docker + Node.js CI/CD Pipeline Demo

A simple DevOps project showing how code changes automatically get built and deployed using **Jenkins + Docker + GitHub**.

---

# 📌 Project Overview

This project demonstrates a basic CI/CD pipeline:

```
GitHub Push
   ↓
Jenkins detects change
   ↓
Docker builds new image
   ↓
Old container is removed
   ↓
New container runs
   ↓
App updates on browser (port 3000)
```

---

# 🧠 What This Project Teaches

Whenever you change something in code like:

```
"Hello Jenkins" → "Hello DevOps"
```

Jenkins will:

- pull latest code from GitHub
- rebuild Docker image
- stop old container
- start new container

👉 and you instantly see the updated output in browser

---

# 🖥️ Application View (Simple UI Idea)

```
+---------------------------------------+
|                                       
|     🚀 Node + Jenkins Demo App        
|                                      
|     ✔ CI/CD Pipeline Working         
|     ✔ Auto Build on Git Push         
|     ✔ Docker Deployment              
|                                      
|     🌐 Running on Port 3000         
|                                      
+--------------------------------------+
```

📸 Add Screenshot Here:
```
/images/app-ui.png
```

---

# 🧱 Tech Stack


- Docker
- Jenkins
- GitHub

---

# 📁 Project Structure

```
ci-cd-pipeline/
│
├── index.js
├── package.json
├── package-lock.json
├── Dockerfile
├── Jenkinsfile
├── .dockerignore
├── .gitignore
└── README.md
```

---

# ⚙️ How CI/CD Works (Simple Flow)

```
Developer pushes code
        ↓
GitHub webhook triggers Jenkins
        ↓
Jenkins pulls latest code
        ↓
Docker image is built
        ↓
Old container is removed
        ↓
New container starts
        ↓
App updates in browser
```




---

# 🔥 Important Concept: Docker Socket (Jenkins)

Jenkins uses Docker socket to control Docker:

```
/var/run/docker.sock
```

It allows Jenkins to:

- build images
- run containers
- stop old deployments

---

# 📦 Project Files Explained

### `.dockerignore`
Used to ignore unnecessary files while building image

### `.gitignore`
Prevents node_modules and logs from being pushed

### `Dockerfile`
Defines how app is containerized

### `Jenkinsfile`
Defines CI/CD pipeline steps

### `index.js / app.js`
Main Node.js application

### `package.json`
Dependencies and scripts

---

# 🚀 How to Run This Project

## 1. Clone repo
```bash
git clone <your-repo-url>
cd ci-cd-pipeline
```

## 2. Install dependencies
```bash
npm install
```

## 3. Run locally (without Docker)
```bash
node index.js
```

Open:
```
http://localhost:3000
```

---

## 🐳 Run with Docker

### Build image
```bash
docker build -t my-node-app .
```

### Run container
```bash
docker run -d -p 3000:3000 --name node-app my-node-app
```

Open:
```
http://localhost:3000
```

---

## ⚙️ Run via Jenkins Pipeline

1. Push code to GitHub
2. Jenkins auto triggers
3. Pipeline runs:
   - build image
   - remove old container
   - start new container

---


```
/images/Screenshot 2026-04-14 162424.png  
/images/Screenshot 2026-04-14 162552.png  
/images/Screenshot 2026-04-14 162623.png  
/images/Screenshot 2026-04-14 163039.png
```

---

# 🎯 Final Result

Every code push updates your app automatically:

```
Code Change → Jenkins Build → Docker Deploy → Live Update
```
