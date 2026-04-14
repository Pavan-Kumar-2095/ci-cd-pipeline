pipeline {
    agent any

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/YOUR_USERNAME/YOUR_REPO.git'
            }
        }

        stage('Check Docker') {
            steps {
                sh 'docker version'
                sh 'docker ps'
            }
        }

        stage('Build Image') {
            steps {
                sh 'docker rmi my-node-app || true'
                sh 'docker build -t my-node-app .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker rm -f node-app || true'
                sh 'docker run -d -p 3000:3000 --name node-app my-node-app'
            }
        }
    }
}