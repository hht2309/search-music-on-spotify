node {
    try {
        stage('Checkout') {
            checkout scm
        }
        stage('Environment') {
            sh 'git --version'
            echo "Branch: ${env.BRANCH_NAME}"
            sh 'docker -v'
            sh 'printenv'
        }
        stage('Build') {
            echo 'check wether docker can run inside container'
            sh 'docker -v' 
        }
    }
    catch (err) {
        throw err
    }
}