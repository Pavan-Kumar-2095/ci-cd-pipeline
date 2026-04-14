pipeline {
    agent any

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/Pavan-Kumar-2095/ci-cd-pipeline'
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
                sh '''
                    docker stop node-app || true
                    docker rm node-app || true
                    docker rm -f $(docker ps -q --filter "publish=3000") || true
                    docker run -d -p 3000:3000 --name node-app my-node-app
                '''
            }
        }
    }
}