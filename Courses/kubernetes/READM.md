### Namespace:
To create any kubernetes resources:
1- Imperative : 
```sh
kubectl create ns dev
```

2 - declarative(yaml)
use kubectl 
```sh
kubectl create ns walid --dry-run -o yaml > production-namespace.yaml
```
this command will generate a yaml content:

```yaml
W0513 19:45:05.515956   99061 helpers.go:636] --dry-run is deprecated and can be replaced with --dry-run=client.
apiVersion: v1
kind: Namespace
metadata:
  creationTimestamp: null
  name: walid
spec: {}
status: {}
```


```yaml
apiVersion: v1
kind: Namespace
metadata:
  creationTimestamp: null
  name: walid
spec: {}
status: {}
```

Apply change using :
```sh
kubectl apply -f production-namespace.yaml
```

### Pod (smallest kubernetes Unit):

pod = one or more containers + IP address + Volume 

when we need more than one container per pod :
- Helper : example container 1 return json , container two convert json to XML
- Security: Authentication container to intercept call before going to the main container
- Logger: one container for the main app + container to read log and send it to a remote log server (elk, linkerd, jaeger ...)

How to create a pod:

2- declarative:
```yaml
 kubectl create ns walid --dry-run -o yaml 
 kubectl create ns walid --dry-run=client -o yaml
 kubectl apply -f namespace.yaml 
 kubectl get ns
 kubectl get ns -o wide
 kubectl describe production
 kubectl describe ns production
 5793  kubectl create --help
 5794  kubectl create -f pod.yaml  -n production
 5795  kubectl create -f pod.yaml  -n demo
 5796  kubectl get po -n demo 
 5797  kubectl describe po webapp-po -n demo
 5798  kubectl get po -n demo 
 5799  kubectl get po webapp-po -n demo -o yaml 
 5800  kubectl get po/webapp-po -n demo -o yaml
 5801  kubectl get po/webapp-pod -n demo -o yaml
 5802  kubectl get po/webapp-pod -n demo -o yaml | grep node
 5803  kubectl describe po/webapp-pod -n demo -o
 5804  kubectl describe po/webapp-pod -n demo 
 5805  kubectl port-forward --help
 5807  kubectl port-forward -n demo po/webapp-pod --address 0.0.0.0 8090:80
```



### configMap:

#### Impertative command
```bash
Examples:
  # Create a new config map named my-config based on folder bar
  kubectl create configmap my-config --from-file=path/to/bar
  
  # Create a new config map named my-config with specified keys instead of file basenames on disk
  kubectl create configmap my-config --from-file=key1=/path/to/bar/file1.txt --from-file=key2=/path/to/bar/file2.txt
  
  # Create a new config map named my-config with key1=config1 and key2=config2
  kubectl create configmap my-config --from-literal=key1=config1 --from-literal=key2=config2
  
  # Create a new config map named my-config with key=value pairs from an env file
  kubectl create configmap my-config --from-env-file=path/to/bar.env
```

Example

```bash
kubectl create configmap web-config --from-literal=username=walid --from-literal=loacation=bizerte -n test
```

#### Declarative from YAML:

```yaml
apiVersion: v1
data:
  location: "bizerte"
  username: "walid"
  phone: "97671263"
kind: ConfigMap
metadata:
  creationTimestamp: "2026-05-18T18:36:43Z"
  name: web-config
  namespace: test
```

Use Create configMap in the POD level:

1- Method 1(ConfigMapKeyRef):

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: envar-demo
  namespace: test
  labels:
    purpose: demonstrate-envars
spec:
  containers:
  - name: envar-demo-container
    image: nginx
    env:
    - name: DEMO_GREETING
      value: "Hello from the environment"
    - name: DEMO_FAREWELL
      value: "Such a sweet sorrow"
    - name: USERNAME # Notice that the case is different here
      valueFrom:
        configMapKeyRef:
          name: web-config           # The ConfigMap this value comes from.
          key: username
    - name: LOCATION # Notice that the case is different here
      valueFrom:
        configMapKeyRef:
          name: web-config           # The ConfigMap this value comes from.
          key: location
    - name: PHONENUMBER # Notice that the case is different here
      valueFrom:
        configMapKeyRef:
          name: web-config           # The ConfigMap this value comes from.
          key: phone

```

2- Method 2(ConfigMapRef): 
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: env-configmap
  namespace: test
spec:
  containers:
    - name: app
      command: ["/bin/sh", "-c", "printenv"]
      image: busybox:latest
      envFrom:
        - configMapRef:
            name: web-config
```



### Secret:

1- Imperative:

```bash
kubectl create secret generic my-secret --from-literal=key1=supersecret --from-literal=key2=topsecret -n test
```

get secret:

```yaml
# kubectl get secret my-secret -n test -o yaml 
apiVersion: v1
data:
  key1: c3VwZXJzZWNyZXQ=
  key2: dG9wc2VjcmV0
kind: Secret
metadata:
  creationTimestamp: "2026-05-18T19:09:11Z"
  name: my-secret
  namespace: test
  resourceVersion: "104736973"
  uid: e52f5d47-8557-4a84-906d-fb45d908925b
type: Opaque
```

```bash
kubectl create secret docker-registry cxgsuiteqafrctlacr \
  --docker-server=cxgsuiteqafrctlacr.azurecr.io \
  --docker-username=radhouen \
  --docker-password=<supersecret\
  --docker-email=askriradhouen@gmail.com -n test

```

result:

```
kubectl get secret -n test
NAME                 TYPE                             DATA   AGE
cxgsuiteqafrctlacr   kubernetes.io/dockerconfigjson   1      8s
my-secret            Opaque                           2      12m
```


```yaml
# kubectl get secret cxgsuiteqafrctlacr -n test -o yaml
apiVersion: v1
data:
  .dockerconfigjson: eyJhdXRocyI6eyJjeGdzdWl0ZXFhZnJjdGxhY3IuYXp1cmVjci5pbyI6eyJ1c2VybmFtZSI6InJhZGhvdWVuIiwicGFzc3dvcmQiOiJzdXBlcnNlY3JldCIsImVtYWlsIjoiYXNrcmlyYWRob3VlbkBnbWFpbC5jb20iLCJhdXRoIjoiY21Ga2FHOTFaVzQ2YzNWd1pYSnpaV055WlhRPSJ9fX0=
kind: Secret
metadata:
  creationTimestamp: "2026-05-18T19:21:26Z"
  name: cxgsuiteqafrctlacr
  namespace: test
  resourceVersion: "104740481"
  uid: 520c595b-160f-4aeb-ae3f-4e58a2ae8b6f
type: kubernetes.io/dockerconfigjson
```

### TLS type:

```bash
kubectl create secret tls <SECRET_NAME> \
  --cert=path/to/tls.crt \
  --key=path/to/tls.key
```

How to use secret:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: pod-use-secret
  namespace: test
  labels:
    purpose: demonstrate-envars
spec:
  containers:
  - name: pod-use-secret-container
    image: nginx
    env:
    - name: PASSWORDONE # Notice that the case is different here
      valueFrom:
        secretKeyRef:
          name: my-secret           # The ConfigMap this value comes from.
          key: key1
    - name: PASSWORDTWO # Notice that the case is different here
      valueFrom:
        secretKeyRef:
          name: my-secret           # The ConfigMap this value comes from.
          key: key2
```

Testing:

```bash
kubectl apply -f pod-with-env-variable-secretkeyref.yaml -n test
pod/pod-use-secret created
# ---
kubectl get po -n test
NAME             READY   STATUS             RESTARTS       AGE
env-configmap    0/1     CrashLoopBackOff   12 (17s ago)   36m
envar-demo       1/1     Running            0              42m
pod-use-secret   1/1     Running            0              6s
# --------
kubectl exec -n test pod-use-secret   -- printenv
PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
HOSTNAME=pod-use-secret
NGINX_VERSION=1.31.0
NJS_VERSION=0.9.8
NJS_RELEASE=1~trixie
ACME_VERSION=0.4.1
PKG_RELEASE=1~trixie
DYNPKG_RELEASE=1~trixie
PASSWORDONE=supersecret  #------- value from secret
PASSWORDTWO=topsecret    #******* value from secret
KUBERNETES_PORT_443_TCP_PORT=443
KUBERNETES_PORT_443_TCP_ADDR=10.2.0.1
KUBERNETES_SERVICE_HOST=10.2.0.1
KUBERNETES_SERVICE_PORT=443
KUBERNETES_SERVICE_PORT_HTTPS=443
KUBERNETES_PORT=tcp://10.2.0.1:443
KUBERNETES_PORT_443_TCP=tcp://10.2.0.1:443
KUBERNETES_PORT_443_TCP_PROTO=tcp
HOME=/root
```