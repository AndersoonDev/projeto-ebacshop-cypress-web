pipeline {
  agent any

  stages {
    stage('Clonar Rep') {
      steps {
        git branch: 'main', url: 'https://github.com/dynhu/cypress-ebac-portifolio-web.git'        
      }
    }
    stage('instalar dependências') {
      steps {
        sh 'npm install'
      }
    }
    stage('executar testes') {
      steps {
        sh 'npx cypress run'
      }
    }  
  }
}