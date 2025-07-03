pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'pip install -r requirements.txt'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'python -m unittest test_app.py'
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
