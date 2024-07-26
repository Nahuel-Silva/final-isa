pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('9f47ce4d-d8a3-442c-ae7e-3925d6850964')
        DOCKERHUB_REPO = 'nahuel11/jhipsterProject'
    }

    stages {
        stage('Checkout SCM') {
            steps {
                script {
                    checkout([$class: 'GitSCM', branches: [[name: '*/main']], userRemoteConfigs: [[url: 'https://github.com/Nahuel-Silva/final-isa.git', credentialsId: '9f47ce4d-d8a3-442c-ae7e-3925d6850964']]])
                }
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    def customImage = docker.build("$DOCKERHUB_REPO")
                }
            }
        }
        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', DOCKERHUB_CREDENTIALS) {
                        customImage.push('latest')
                    }
                }
            }
        }
    }
}
