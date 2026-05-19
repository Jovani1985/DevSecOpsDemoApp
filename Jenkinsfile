pipeline {
    agent any

    environment {
        APP_NAME = 'devsecopsdemoapp'
        IMAGE_TAG = 'latest'
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

        stage('Build') {
            steps {
                echo 'Building Docker image...'
                bat 'docker build -t %APP_NAME%:%IMAGE_TAG% .'
            }
        }
    }
}
