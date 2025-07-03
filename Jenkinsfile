pipeline {
    agent any

    stages {
        stage('Check Python') {
            steps {
                bat '"C:\\Users\\Jai Vishal.R\\AppData\\Local\\Programs\\Python\\Python313\\python.exe" --version'
                bat '"C:\\Users\\Jai Vishal.R\\AppData\\Local\\Programs\\Python\\Python313\\Scripts\\pip.exe" --version'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat '"C:\\Users\\Jai Vishal.R\\AppData\\Local\\Programs\\Python\\Python313\\Scripts\\pip.exe" install -r requirements.txt'
            }
        }

        stage('Run Tests') {
            steps {
                bat '"C:\\Users\\Jai Vishal.R\\AppData\\Local\\Programs\\Python\\Python313\\python.exe" -m unittest test_app.py'
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
