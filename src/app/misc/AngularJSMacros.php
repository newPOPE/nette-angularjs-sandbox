<?php

class AngularJSMacros {

  public static function install($template) {
    $latte = new Nette\Latte\Engine;
    $macroSet = new Nette\Latte\Macros\MacroSet($latte->getCompiler());
    $macroSet->addMacro(
      'ng',
      "echo '{{' . %node.word . '}}'"
    );
    $template->registerFilter($latte);
  }
}
