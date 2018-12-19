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
            sh 'docker build -t spotify -f Dockerfile.test --no-cache'
            echo 'Built successfully !'   
        }
    }
    catch (err) {
        throw err
    }
}