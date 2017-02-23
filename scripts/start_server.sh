#!/bin/bash

#service httpd start

npm start > /dev/null 2> /dev/null < /dev/null & echo $! > node.pid
echo $! > node.pid