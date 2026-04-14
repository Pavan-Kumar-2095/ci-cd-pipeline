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
                    docker build -t my-node-app .
                '''
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                echo "Stopping old container if exists..."
                docker stop node-app || true
                docker rm node-app || true

                echo "Freeing port 3000 containers..."
                docker ps -q --filter "publish=3000" | xargs -r docker stop
                docker ps -aq --filter "publish=3000" | xargs -r docker rm -f

                echo "Starting new container..."
                docker run -d -p 3000:3000 --name node-app my-node-app
            '''
    }
}
    }
}