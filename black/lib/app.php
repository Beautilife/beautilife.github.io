<?php

class BeforeRenderCallback {

    private $callbacks;
    private $cwd;

    public function __construct($callbacks, $cwd=null) {
        $this->callbacks = $callbacks;
        $this->cwd = $cwd;
    }

    public function addCallback($callback) {
        $this->callbacks[] = $callback;
    }

    public function __invoke($content, $phase) {

        if ($this->cwd) {
            chdir($this->cwd);
        }

        $content = trim($content);
        foreach ($this->callbacks as $callback) {
            $content = $callback($content, $this->cwd);
        }
        return $content;
    }

    public function prepare() {
        foreach ($this->callbacks as $callback) {
            $callback->prepare();
        }
    }
}

function incl($filename, $context=array()) {
    extract($context);
    require($filename);
}

class PrelandInjector {

    public $redirectUrl;
    public $fixImages;
    public $comebacker;
    public $mining;

    private $code;

    public function __invoke($content, $cwd) {
        return str_replace('</head>',  $this->code . '</head>', $content);
    }

    public function prepare() {
        $this->code = $this->render();
    }

    private function render() {
        ob_start();
        incl('js.preland.php', array(
            'redirectUrl' => $this->redirectUrl,
        ));
        $code = ob_get_clean();
        return $code;
    }
}