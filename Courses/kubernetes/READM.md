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