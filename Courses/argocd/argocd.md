### Install Argocd in Kubernetes cluster:


##### Start k8s cluster:

```bash
minikube start --driver=docker
```

##### Create argocd namespace:

```bash
kubectl create ns argocd
```

##### Install argocd k8s resources(deployment,service,role , rolebinding , service account , volume):
```bash
kubectl apply -n argocd --server-side --force-conflicts -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
```
---

1- check resources:
```bash
kubectl get all -n argocd
```

2- Deploy ArgoCD:
```bash
 kubectl port-forward svc/argocd-server -n argocd 8080:443
 kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d; echo
 ```

3- 