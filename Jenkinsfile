pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = 'dockerhub-login'
        DOCKERHUB_REPO = 'nahuel11/jhipsterproject:latest'
    }

    stages {
        stage('Checkout SCM') {
            steps {
                script {
                    checkout([$class: 'GitSCM', branches: [[name: '*/main']], userRemoteConfigs: [[url: 'https://github.com/Nahuel-Silva/final-isa.git', credentialsId: 'github-login']]])
                }
            }
        }
        stage('Build Application') {
            steps {
                script {
                    // Comando para construir la aplicación
                    sh './mvnw clean package -DskipTests'
                }
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    def dockerrImage = docker.build("$DOCKERHUB_REPO")
                }
            }
        }
        stage('Push Docker Image') {
            steps {
                script {
                    // Log in to Docker Hub
                    withCredentials([usernamePassword(credentialsId: DOCKERHUB_CREDENTIALS, passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                        sh 'echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin'
                    }
                    // Push the image
                    sh 'docker push nahuel11/jhipsterproject:latest'
                }
            }
        }
    }
}
