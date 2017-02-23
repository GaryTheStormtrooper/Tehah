#!/bin/bash

#isExistApp = `pgrep httpd`
#if [[ -n  $isExistApp ]]; then
#    service httpd stop        
#fi

source ~/.bashrc

export NVM_DIR="/root/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm

nvm install 6.9.5
nvm use 6.9.5

forever stopall