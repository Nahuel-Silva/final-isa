pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-login')
        DOCKERHUB_REPO = 'nahuel11/jhipsterproject'
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
                    docker.withRegistry('https://index.docker.io/', DOCKERHUB_CREDENTIALS) {
                        dockerrImage.push('latest')
                    }
                }
            }
        }
    }
}
