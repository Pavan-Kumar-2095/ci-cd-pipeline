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
                sh '''
                    docker rmi my-node-app || true
                '''
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                echo "Stopping old container if exists..."
                docker stop node-app || true
                docker rm node-app || true

            '''
    }
}
    }
}