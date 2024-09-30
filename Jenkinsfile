node {
    env.PATH = "${tool 'nodejs'}/bin:${env.PATH}"
}

pipeline {

    agent any
    options {
        skipDefaultCheckout(true)
    }
     tools {
        nodejs 'NodeJS'
    }
    stages {
        stage('Initializing') {
            steps {
                mattermostSend color: '#E238EC', text: "## Stagging CMS Bắt đầu chạy script autotest :shiba_dance:", message: "Bắt đầu **${env.JOB_NAME}** lần **#${env.BUILD_NUMBER}**"
                cleanWs()
                checkout scm
                sh 'git reset --hard'
                sh 'npm install'
            }
        }
        stage('Running Testcases') {
            steps {
                sh "cp -av ~/AutomationTestingProject/all-env/${env.JOB_NAME}.env .env"
                sh "yarn prod"
            }
        }
    }
    post {
        always {
            sh "/opt/homebrew/bin/allure generate ./output --clean"
            sh "/opt/homebrew/bin/gsed -i 's/Allure Report/${env.JOB_NAME} Report #${env.BUILD_NUMBER}/g' ./allure-report/index.html"
            sh "/opt/homebrew/bin/gsed -i 's/Allure Report/${env.JOB_NAME} Report #${env.BUILD_NUMBER}/g' ./allure-report/widgets/summary.json"
            sh "/opt/homebrew/bin/gsed -i 's/Allure/VietTin/g' ./allure-report/app.js"
            sh "/opt/homebrew/bin/gsed -i 's/Allure Report/VietTin ${env.JOB_NAME} Report #${env.BUILD_NUMBER}/g' ./allure-report/export/mail.html"
            sh "mkdir -p /opt/homebrew/var/www/job/${env.JOB_NAME}/${env.BUILD_NUMBER}/display/redirect"
            sh "cp -av ./allure-report/* /opt/homebrew/var/www/job/${env.JOB_NAME}/${env.BUILD_NUMBER}/display/redirect/"
        }
        success {
            mattermostSend color: '#54C571', text: "## Tuyệt vời, các kiểm thử Stagging **CMS** đều passed :heart_eyes: ${env.BUILD_TAG}", message: "Kết quả autotest **${env.JOB_NAME}** lần **#${env.BUILD_NUMBER}**:\nClick vào đây để xem full report **https://allure.paulpham157.io.vn/job/${env.JOB_NAME}/${env.BUILD_NUMBER}/display/redirect/**"
        }
        failure {
            mattermostSend color: '#F62817', text: "## OMG! Một vài case Stagging **CMS** faild rồi :sneezing_face: ${env.BUILD_TAG}", message: "Xin mời @hungpd @nhungdh @xuanntk @anhtv @letu xem report\nKết quả autotest **${env.JOB_NAME}** lần **#${env.BUILD_NUMBER}**:\n**https://allure.paulpham157.io.vn/job/${env.JOB_NAME}/${env.BUILD_NUMBER}/display/redirect/**"
        }
        aborted {
            mattermostSend color: '#FAF8CC', text: "## Admin Jenkins đã tạm dừng lần chạy Stagging **CMS** này :pleading_face: ${env.BUILD_TAG}", message: "Kết quả autotest **${env.JOB_NAME}** lần **#${env.BUILD_NUMBER}**:\nClick vào đây để xem full report **https://allure.paulpham157.io.vn/job/${env.JOB_NAME}/${env.BUILD_NUMBER}/display/redirect/**"  
        }
    }

}