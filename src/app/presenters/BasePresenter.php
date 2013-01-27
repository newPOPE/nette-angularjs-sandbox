<?php

namespace App;

use Nette;

abstract class BasePresenter extends Nette\Application\UI\Presenter {

  public function templatePrepareFilters($template) {
    \AngularJSMacros::install($template);
  }
}
