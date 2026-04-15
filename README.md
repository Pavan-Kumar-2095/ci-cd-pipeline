#  CI/CD Pipeline Project (Jenkins + Docker + Node.js)

A production-style DevOps project demonstrating a fully automated CI/CD pipeline using Jenkins, Docker, GitHub, and Node.js.

This project shows how code changes automatically trigger build, containerization, and deployment.

---

#  Architecture Overview
```
Developer
↓ (git push)
GitHub Repository
↓ (webhook / polling)
Jenkins Pipeline
↓
Docker Build Image
↓
Stop Old Container
↓
Run New Container
↓
Node.js Application (Port 3000)

---
```
#  Step 0: Clone Repository
```
git clone https://github.com/Pavan-Kumar-2095/ci-cd-pipeline
cd ci-cd-pipeline
```


---

#  Project Structure
```
ci-cd-pipeline/
├── index.js
├── package.json
├── package-lock.json
├── Dockerfile
├── Jenkinsfile
├── .dockerignore
├── .gitignore
├── images/
├── create-custom-jenkins/
│ └── Dockerfile
└── README.md
```


---

#  CI/CD Pipeline Flow (Jenkins)
```
Developer pushes code to GitHub
Jenkins detects changes (Webhook / Poll SCM)
Jenkins pulls latest source code
Jenkins reads Jenkinsfile
Docker image is built
Existing container is stopped
Old container is removed
New container is started
Application is deployed on port 3000
```


---

#  Create Custom Jenkins Image
```
cd create-custom-jenkins
docker build -t custom-jenkins .
```


---

#  Run Custom Jenkins Container
```
docker run -d -p 8080:8080 -p 50000:50000
-v jenkins_home:/var/jenkins_home
-v /var/run/docker.sock:/var/run/docker.sock
--user root
--name jenkins
custom-jenkins
```



---

#  Get Jenkins Admin Password
```
docker ps
docker exec -it <container_id> cat /var/jenkins_home/secrets/initialAdminPassword
```


Setup Steps:
- Install suggested plugins
- Create admin user
- Configure Jenkins instance

---

#  Jenkins Job Configuration

### Pipeline Type:
- Multibranch Pipeline

### Configuration:
- Connect GitHub repository
- Enable Branch Indexing
- Enable SCM Polling (optional)
- Jenkins automatically detects `Jenkinsfile`

---

#  Manual Trigger (Build Now)

You can manually trigger pipeline:

- Go to Jenkins Dashboard
- Select Job
- Click **Build Now**

### What it does:
- Runs full Jenkins pipeline instantly
- Ignores Git polling/webhook delay
- Useful for testing CI/CD setup

---

#  Docker Socket Integration
```
/var/run/docker.sock
```


Jenkins uses Docker daemon to:
- Build images
- Run containers
- Stop containers
- Remove old deployments
- Deploy updated application

---

#  Application Access
```
http://localhost:3000
```

---

#  CI/CD Behavior Example

Before: Hello Jenkins  
After: Hello DevOps  

Pipeline automatically:
- Detects GitHub commit
- Rebuilds Docker image
- Restarts container
- Reflects changes instantly

---

#  FILES EXPLAINED

| File | Purpose |
|------|--------|
| create-custom-jenkins/Dockerfile | Create custom jenkins image  |
| Dockerfile | Create Node.js app |
| Jenkinsfile | Defines CI/CD pipeline |
| index.js | Main application |
| package.json | Dependencies |
| .dockerignore | Excludes unnecessary files |
| .gitignore | Git ignore rules |

---

#  TECH STACK

- Node.js
- Jenkins
- Docker
- GitHub

---

#  KEY DEVOPS CONCEPTS DEMONSTRATED

✔ CI/CD Automation  
✔ Docker Containerization  
✔ Jenkins Pipeline as Code  
✔ GitHub Integration  
✔ Automated Deployment  
✔ Infrastructure as Code (basic level)

---

#  PROJECT OUTCOME

After completing this project, you will understand:

- Real-world CI/CD pipeline workflow
- Jenkins job automation
- Docker-based deployments
- Git-based continuous integration
- End-to-end DevOps lifecycle

---
