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
                    # Stop and remove existing container safely
                    docker stop node-app || true
                    docker rm node-app || true

                    # Remove any container using port 3000 (safe version)
                    container_id=$(docker ps -q --filter "publish=3000")
                    if [ ! -z "$container_id" ]; then
                        docker stop $container_id || true
                        docker rm -f $container_id || true
                    fi

                    # Run new container on SAME port
                    docker run -d -p 3000:3000 --name node-app my-node-app
                '''
            }
        }
    }
}