pipeline {
    agent any

    stages {

        stage('Checkout Code') {
            steps {
                echo 'No need to clone repo Jenkins will clone automaticaly'
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
                    docker build -t my-node-app .
                '''
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                    # Stop and remove existing container safely
                    docker stop node-app || true
                    docker rm node-app || true


                    # Run new container on SAME port
                    docker run -d -p 3000:3000 --name node-app my-node-app
                '''
            }
        }
    }
}

