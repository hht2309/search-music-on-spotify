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
            sh 'docker build -t search-music-spotify -f Dockerfile.test --no-cache .' 
        }
    }
    catch (err) {
        throw err
    }
}
