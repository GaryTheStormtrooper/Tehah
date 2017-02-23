#!/bin/bash

#service httpd start

sudo npm start > /dev/null 2> /dev/null < /dev/null & echo $! > node.pid
sudo echo $! > node.pid