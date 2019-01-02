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
        stage('Build and deploy') {
            sh 'docker build -t search-music-spotify --no-cache .'
            sh 'docker tag react-app localhost:5000/react-app'
	    sh 'docker push locahost:5000/react-app'
            sh 'docker rmi -f react-app localhost:5000/react-app'
        }
    }
    catch (err) {
        throw err
    }
}
