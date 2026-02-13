FROM jenkins/jenkins:lts

USER root

# install docker cli
RUN apt-get update && apt-get install -y docker.io

# allow jenkins to use docker
RUN usermod -aG docker jenkins

USER jenkins
