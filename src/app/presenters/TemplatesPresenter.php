<?php

namespace App;

class TemplatesPresenter extends BasePresenter {

  public function actionDefault($path) {
    if(!is_null($path)) {
      $this->setView($path);
    }
  }

}
