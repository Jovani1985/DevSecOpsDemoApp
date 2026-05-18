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
    }
}
