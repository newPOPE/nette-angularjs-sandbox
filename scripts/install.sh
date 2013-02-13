#!/bin/bash

cd src
composer install

cd ..
bower install

echo "#Local config file" > src/app/config/config.local.neon
