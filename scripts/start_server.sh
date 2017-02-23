#!/bin/bash

# service httpd start

source ~/.bashrc

export NVM_DIR="/root/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm

nvm use 6.10.0

NODE_ENV=production forever start --minUptime 1000ms --spinSleepTime 1000ms /var/www/html/