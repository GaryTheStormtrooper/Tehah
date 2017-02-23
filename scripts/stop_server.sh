#!/bin/bash

isExistApp = `pgrep http`
if [[ -n  $isExistApp ]]; then
    service http stop        
fi