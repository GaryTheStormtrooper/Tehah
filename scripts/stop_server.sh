#!/bin/bash

#isExistApp = `pgrep httpd`
#if [[ -n  $isExistApp ]]; then
#    service httpd stop        
#fi

source ~/.bashrc

export NVM_DIR="/root/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm

nvm install 6.10.0
nvm use 6.10.0

forever stopall