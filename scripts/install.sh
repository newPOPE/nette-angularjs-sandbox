#!/bin/bash

# http://getcomposer.org/
composer install

# https://github.com/twitter/bower
bower install

# create empty local configuration file
echo "development:" >> src/app/config/config.local.neon
echo "" >> src/app/config/config.local.neon
echo "production:" >> src/app/config/config.local.neon
echo "" >> src/app/config/config.local.neon

