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
	stage('Clean up') {
	    sh 'docker rmi -f localhost:5000/search-music-spotify:latest'
	}
        stage('Build') { 
            sh 'docker build -t search-music-spotify --no-cache .'
            sh 'docker tag search-music-spotify localhost:5000/search-music-spotify'
	    sh 'docker push localhost:5000/search-music-spotify'
            sh 'docker rmi -f search-music-spotify localhost:5000/search-music-spotify'
        }
	stage('Deploy') {
	    sh 'docker run -p 3000:3000 --name search-music-spotify localhost:5000/search-music-spotify:latest'
	
	}
    }
    catch (err) {
       throw err
    }
}
