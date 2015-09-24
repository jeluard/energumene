(defproject energumene "0.2.0-SNAPSHOT"
  :description "."
  :url "https://github.com/jeluard/energumene"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [com.velisco/herbert "0.6.11"]
                 [cheshire "5.5.0"]
                 [funcool/clojure.jdbc "0.6.0"]]
  :profiles
  {:dev
   {:source-paths ["src" "src-dev"]
    :resource-paths ["test-resources"]
    :dependencies [[aleph "0.4.0"]
                   [com.h2database/h2 "1.4.189"]
                   [org.clojure/test.check "0.7.0" :scope "test"]
                   [criterium "0.4.3" :scope "test"]
                   [ring/ring-mock "0.2.0" :scope "test"]
                   [org.openjdk.jmh/jmh-core "1.10.5" :scope "test"]]
    :plugins [[quickie "0.4.0"]]}}
  :min-lein-version "2.5.0")
