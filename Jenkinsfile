pipeline {
    agent any

    environment {
        APP_NAME = 'devsecopsdemoapp'
        IMAGE_TAG = 'latest'
        RELEASE_TAG = 'release-v1'
        CONTAINER_NAME = 'devsecopsdemoapp-container'
    }

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out source code...'
                checkout scm
            }
        }

        stage('Test') {
            steps {
                echo 'Installing dependencies and running tests...'
                bat 'npm install'
                bat 'npm test'
            }
        }

        stage('Code Quality') {
            steps {
                echo 'Running ESLint code quality checks...'
                bat 'npx eslint .'
            }
        }

        stage('Security') {
            steps {
                echo 'Running security scan...'
                bat 'npm audit'
            }
        }

        stage('Build') {
            steps {
                echo 'Building Docker image...'
                bat 'docker build -t %APP_NAME%:%IMAGE_TAG% .'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application container...'
                bat 'docker rm -f %CONTAINER_NAME% || exit /b 0'
                bat 'docker run -d --name %CONTAINER_NAME% -p 3000:3000 %APP_NAME%:%IMAGE_TAG%'
            }
        }

        stage('Release') {
            steps {
                echo 'Creating release image tag...'
                bat 'docker tag %APP_NAME%:%IMAGE_TAG% %APP_NAME%:%RELEASE_TAG%'
            }
        }

        stage('Monitoring') {
            steps {
                echo 'Monitoring application health endpoint...'
                bat 'curl http://localhost:3000/health'
            }
        }
    }
}
