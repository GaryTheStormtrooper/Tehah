#!/bin/bash

#isExistApp = `pgrep httpd`
#if [[ -n  $isExistApp ]]; then
#    service httpd stop        
#fi

if [ -f node.pid ]; then kill
cat node.pid
fi