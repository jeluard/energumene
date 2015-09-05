(ns energumene.ui.admin
  (:require [energumene.ui.component.browser :as bro]
            [picada.bootstrap :as boot]
            [lucuma.core :as luc]))

(boot/register-all)
(luc/register bro/ene-browser)