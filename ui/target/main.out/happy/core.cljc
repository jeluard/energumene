(ns happy.core)

(defprotocol Client
  ; #{:timeout {:body-as #{:string :buffer}} :cancel}
  (-supports [_])
  (-send! [_ req m]) ; returns a payload that can be used with other methods
  (-abort [_ o])
  (-status [_ o])
  (-body [_ o])
  (-header [_ o s])
  (-headers [_ o]))

(defprotocol Representator
  (-mime-types [_ t]) ; mime, "image/*" "application/*-json"
  (-serialize [_ o])                                      ; before passing req body to client
  (-unserialize [_ t o]))                                   ;after getting resp body from client

(defn rep-int-req
       []
       ;lookup in order up to one applies, then call ser or unser
       )
#_
(reify RepresentatorInterceptor Interceptor)

; Utils methods for CLient implementations

(defn response
  [c o]
  {:type :response
   :status (-status c o)
   :body (-body c o)
   :headers (-headers c o)})

(defn progress
  ([t] (progress t nil))
  ([t m]
   (let [b {:type :progress :change t}]
     (if m
       (merge b m)
       b))))

(defn failure
  [t]
  {:type :failure
   :termination t})

(def default-client (atom nil))

(defn set-default-client!
  [c]
  (reset! default-client c))

; TODO
; client part of options map
; RequestInterceptor, ResponseInterceptor as function applied via transducers?
; set default options (not default client)

; options
; report-progress?
(defn send!
  ([req m]
    (let [c @default-client]
      (send! c req m)))
  ([c req m]
   (-send! c req m)))

(defn GET
  ([url] (GET url {}))
  ([url m] (GET nil url m))
  ([c url m]
   (send! c (assoc m :method :get :url url))))