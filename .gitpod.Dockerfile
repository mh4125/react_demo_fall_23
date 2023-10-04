FROM gitpod/workspace-full
RUN sudo apt-get update
# Install Cypress-base dependencies
RUN sudo apt-get install -y \
RUN sudo DEBIAN_FRONTEND=noninteractive apt-get install -yq \
RUN sudo apt-get install -y \
RUN sudo apt-get install -y \