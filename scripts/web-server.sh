#!/bin/bash
BASE_DIR=`dirname $0`

#
# Start a local web server
#
php -S 0.0.0.0:3000 -t ./ &

WEB_SERVER_PID=$!
echo "Server PID: $WEB_SERVER_PID"

#
# Start SASS compiler
#
compass watch --debug-info --sass-dir=$BASE_DIR/../src/www/scss --css-dir=$BASE_DIR/../src/www/css &
SASS_WATCH_PID=$!
echo "Sass watch PID: $SASS_WATCH_PID"

#
# Open Google Chrome
#
# Only for OSX
#open -a Google\ Chrome http://localhost:3000/src/www/

#
# Cleanup function
#
cleanup() {
  echo "Kill server"
  kill $WEB_SERVER_PID
  echo "Sass watch"
  kill $SASS_WATCH_PID
  exit 1
}

trap 'cleanup' SIGHUP SIGINT SIGTERM EXIT

quitflag=0
while ((!quitflag)) && read -p ">> " v; do
    case $v in
        exit | quit)
            quitflag=1
            ;;
        help | '?')
            echo "Sorry, I can't help you."
            ;;
    esac
done
