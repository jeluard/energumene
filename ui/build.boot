(set-env!
 :source-paths  #{"src"}
 :resource-paths  #{"resources"}
 :dependencies '[[org.clojure/clojure           "1.7.0"]
                 [adzerk/boot-cljs              "1.7.48-3"   :scope "test"]
                 [adzerk/boot-reload            "0.3.2"      :scope "test"]
                 [pandeiro/boot-http            "0.6.3"      :scope "test"]
                 [jeluard/boot-notify           "0.2.0"      :scope "test"]
                 [adzerk/bootlaces              "0.1.11"     :scope "test"]

                 [org.clojure/clojurescript "1.7.107"]
                 [picada "0.5.0-SNAPSHOT"]
                 ;[lucuma "0.5.0"]
                 [happy "0.5.1"]])

(def dev-dependencies '[[cljsjs/document-register-element "0.4.3-0"]
                        [cljsjs/dom4 "1.4.5-0"]
                        [cljsjs/web-animations "2.1.2-0"]])

(require
 '[adzerk.boot-cljs              :refer [cljs]]
 '[adzerk.boot-reload            :refer [reload]]
 '[pandeiro.boot-http            :refer [serve]]
 '[jeluard.boot-notify           :refer [notify]]
 '[adzerk.bootlaces              :refer [bootlaces! build-jar]])

(def +version+ "0.2.0-SNAPSHOT")

(bootlaces! +version+)
(task-options!
  pom  {:project     'energumene-ui
        :version     +version+
        :description "A Material inspired collection of HTML elements (Custom Elements)"
        :url         "https://github.com/jeluard/picada"
        :scm         {:url "https://github.com/jeluard/picada"}
        :license     {"EPL" "http://www.eclipse.org/legal/epl-v10.html"}})

(deftask dev
  []
  (merge-env! :dependencies dev-dependencies)
  (comp
    (watch :verbose true)
    (notify)
    (reload)
    (cljs :optimizations :none)
    (serve)
    (build-jar)))

(deftask release
  []
  (merge-env! :dependencies dev-dependencies)
  (merge-env! :source-paths #{"src-dev"})
  (comp
    (cljs :optimizations :advanced :compiler-options {:output-to "picada.js"})))
