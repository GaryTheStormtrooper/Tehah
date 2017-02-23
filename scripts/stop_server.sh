#!/bin/bash

#isExistApp = `pgrep http`
#if [[ -n  $isExistApp ]]; then
#    service httpd stop        
#fi

if [ -f node.pid ]; then kill
cat node.pid
fi