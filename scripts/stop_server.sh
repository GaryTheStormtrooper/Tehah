#!/bin/bash

isExistApp = `pgrep httpd-node`
if [[ -n  $isExistApp ]]; then
    service httpd-node stop        
fi