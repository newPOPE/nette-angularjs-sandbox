# Sandbox with [Nette Framework](http://nette.org) & [AngularJS](http://angularjs.org/)

**TODO** add some basic informations

## Install
Project has some system dependencies:  
- [Twitter Bower](http://twitter.github.com/bower/)  
- [Composer](http://getcomposer.org/)  
- [Testacular](http://vojtajina.github.com/testacular/)

### Run install script

Run ```./scripts/install.sh```

- install Nette Framework via Composer  
- install [Angular, jQuery, Bootstrap.css]
- create empty ```config.local.neon```

### Development server

Command ```./scripts/web-server.sh``` starts the local development server on ```localhost:3000```
and App run on ```localhost:3000/src/www/```

### Run e2e tests

Run```./scripts/e2e-tests.sh```

**Note:** _Before e2e tests starded local development server must run._

