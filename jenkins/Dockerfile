FROM jenkins/jenkins:lts

USER root

# install docker cli
RUN apt-get update && apt-get install -y docker.io

# match docker group id with host (986)
ARG DOCKER_GID=986
RUN groupmod -g ${DOCKER_GID} docker || true
RUN usermod -aG docker jenkins

USER jenkins
