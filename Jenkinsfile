pipeline {
    agent any

    stages {
        stage('Check Python') {
            steps {
                bat 'echo %PATH%'
                bat '"C:\\Program Files\\Python312\\python.exe" --version'
                bat '"C:\\Program Files\\Python312\\Scripts\\pip.exe" --version'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat '"C:\\Program Files\\Python312\\Scripts\\pip.exe" install -r requirements.txt'
            }
        }

        stage('Run Tests') {
            steps {
                bat '"C:\\Program Files\\Python312\\python.exe" -m unittest test_app.py'
            }
        }
    }

    post {
        success {
            echo '✅ Tests passed!'
        }
        failure {
            echo '❌ Tests failed.'
        }
    }
}
