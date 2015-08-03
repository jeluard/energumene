(set-env!
 :source-paths   #{"src"}
 :resource-paths #{"resources"}
 :dependencies '[[adzerk/boot-cljs      "0.0-2814-4" :scope "test"]
                 [adzerk/boot-reload    "0.2.6"      :scope "test"]
                 [danielsz/boot-environ "0.0.3"      :scope "test"]
                 [environ"1.0.0"]
                 ; server
                 [org.clojure/clojure "1.7.0"]
                 [org.danielsz/system "0.1.8"]
                 [io.aviso/config "0.1.6"]
                 [prismatic/schema "0.4.3"]

                 [aleph "0.4.0"]
                 [com.domkm/silk "0.1.1"]
                 [org.clojure/tools.nrepl "0.2.10"]

                 [org.clojure/java.jdbc "0.3.7"]
                 [com.zaxxer/HikariCP "2.3.9"]
                 [hikari-cp "1.2.4"]
                 [com.h2database/h2 "1.4.188"]])

(require
 '[adzerk.boot-cljs      :refer [cljs]]
 '[adzerk.boot-reload    :refer [reload]]
 ;'[reloaded.repl :refer [init start stop go reset]]
 '[energumene.systems :refer [dev-system prod-system]]
 '[danielsz.boot-environ :refer [environ]]
 '[system.boot :refer [system run]])

(deftask dev
  "Run a restartable system in the Repl"
  []
  (merge-env! :source-paths #{"src-dev"})
  (comp
   (environ :env {:http-port 3000})
   (watch :verbose true)
   (system :sys #'dev-system :auto-start true :hot-reload true :files ["handler.clj"])
   (reload)
   (cljs :source-map true)
   (repl :server true :init-ns 'energumene.repl)))

(deftask repl-client
  ""
  []
  (repl :client true :skip-init true :eval '(init)))

; TODO migrate run to boot.core?
; TODO add exec to boot.core
; TODO watcher triggered even if file unchanged (but timestamp changed)
; TODO watcher: filter .DS_STORE
; TODO adzerk/boot_reload.cljs part of watched files?

(deftask dev-run
  "Run a dev system from the command line"
  []
  (comp
   (environ :env {:http-port 3000})
   (cljs)
   (run :main-namespace "energumene.main" :arguments [#'dev-system])
   (wait)))

(deftask prod-run
  "Run a prod system from the command line"
  []
  (comp
   (environ :env {:http-port 8008
                  :repl-port 8009})
   (cljs :optimizations :advanced)
   (run :main-namespace "energumene.main" :arguments [#'prod-system])
   (wait)))

(deftask package
  []
  "Run a prod system as an uberjar. Launch via `HTTP_PORT=8008 REPL_PORT=8009 java -jar target/holy-grail-1.0.0.jar`"
  (comp
    (aot :namespace '#{energumene.core})
    (pom :project 'energumene :version "1.0.0")
    (uber)
    (jar :main 'energumene.main)))
