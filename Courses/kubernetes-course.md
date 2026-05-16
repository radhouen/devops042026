### Introduction to kubernetes:
# Kubernetes Architecture Overview

> A complete guide to understanding how Kubernetes works under the hood.

---

## Table of Contents

1. [What is Kubernetes?](#what-is-kubernetes)
2. [Cluster Architecture](#cluster-architecture)
3. [Control Plane Components](#control-plane-components)
4. [Worker Node Components](#worker-node-components)
5. [Pods — The Smallest Unit](#pods--the-smallest-unit)
6. [Core Kubernetes Objects](#core-kubernetes-objects)
7. [Networking Model](#networking-model)

---

## What is Kubernetes?

Kubernetes (K8s) is an open-source **container orchestration platform**. It automates deployment, scaling, and management of containerized applications across clusters of machines.

Think of Kubernetes as an **operating system for your data center** — it schedules workloads, manages resources, heals failures, and exposes services, all automatically.

| Feature | Description |
|---|---|
| **Self-healing** | Restarts failed containers, reschedules on healthy nodes automatically |
| **Auto-scaling** | Scales pods up or down based on CPU, memory, or custom metrics |
| **Multi-cloud** | Runs on AWS, GCP, Azure, bare metal, or any mix |
| **Declarative** | You describe the desired state; K8s works to maintain it continuously |

```
Your Application  →  Kubernetes (Scheduling · Scaling · Healing)  →  Infrastructure
```

---

## Cluster Architecture

A Kubernetes cluster has two types of nodes:

- **Control Plane** — the brain: makes global decisions, stores state, schedules workloads
- **Worker Nodes** — the muscle: run your application pods

```
┌─────────────────────────────────────────────────────────────────┐
│                        Control Plane                            │
│  ┌────────────┐  ┌──────┐  ┌───────────┐  ┌─────────────────┐   │
│  │ API Server │  │ etcd │  │ Scheduler │  │ Controller Mgr  │   │
│  └────────────┘  └──────┘  └───────────┘  └─────────────────┘   │
└───────────────────────┬─────────────────────────────────────────┘
                        │ (manages)
        ┌───────────────┼───────────────┐
        ▼               ▼               ▼
┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│ Worker Node 1│ │ Worker Node 2│ │ Worker Node 3│
│ kubelet      │ │ kubelet      │ │ kubelet      │
│ kube-proxy   │ │ kube-proxy   │ │ kube-proxy   │
│ Pods/Runtime │ │ Pods/Runtime │ │ Pods/Runtime │
└──────────────┘ └──────────────┘ └──────────────┘
```

> **Note:** The control plane is HA-deployed (multiple replicas) in production. Worker nodes can be added or removed without downtime.

---

## Control Plane Components

### API Server
- Single front-end for all cluster operations
- Every tool (`kubectl`, dashboard, operators) talks to it via REST
- Validates and mutates API objects
- Horizontally scalable

### etcd
- Distributed key-value store that persists **all cluster state** (pods, services, configs)
- Consistent and highly available
- If etcd fails, the cluster cannot make progress

### Scheduler
- Watches for unscheduled pods
- Picks the best worker node based on:
  - Resource requests (CPU, memory)
  - Affinity / anti-affinity rules
  - Taints & tolerations
  - Node capacity

### Controller Manager
- Runs built-in controllers: ReplicaSet, Deployment, Node, Job, CronJob, etc.
- Each controller watches cluster state and drives it toward the desired state


We have 3 types of controllers:
- Replication Controller manager
- Node Controller manager
- Cloud-controller manager



```bash
kubectl get componentstatuses
# NAME                 STATUS
# scheduler            Healthy
# controller-manager   Healthy
# etcd-0               Healthy
```

---

## Worker Node Components

Three core daemons run on every worker node:

### kubelet
- Manages pod lifecycle on the node
- Reports node and pod status to the API Server
- Mounts volumes into pods
- Runs liveness and readiness probes

### kube-proxy
- Manages `iptables` / `ipvs` rules on the node
- Routes Service traffic to the correct pods
- Watches Service and Endpoint objects

### Container Runtime
- Implements the **Container Runtime Interface (CRI)**
- Common choices: `containerd`, `CRI-O`
- Pulls images, starts and stops containers

> **Note:** Docker is no longer the default runtime. Kubernetes uses the CRI — `containerd` is now the most common choice.

---

## Pods — The Smallest Unit

A **Pod** is the smallest deployable unit in Kubernetes. It wraps one or more containers that share:
- The same **network namespace** and **IP address**
- The same **storage volumes**

```
┌──────────────────────────────────────────────────────┐
│  Pod — IP: 10.244.1.5                                │
│  ┌──────────────────────┐  ┌────────────────────┐   │
│  │   Main container     │  │  Sidecar container  │  │
│  │   nginx:1.25         │  │  log-shipper:2.1    │  │
│  │   port 80            │  │  shares /var/log    │  │
│  └──────────────────────┘  └────────────────────┘   │
│  ┌──────────────────────────────────────────────┐    │
│  │   Shared volumes (emptyDir, PVC, configMap)  │    │
│  └──────────────────────────────────────────────┘    │
└──────────────────────────────────────────────────────┘
```

| Concept | Details |
|---|---|
| **Single responsibility** | Best practice: one main process per pod; use sidecars for logging, proxies, config reloaders |
| **Ephemeral** | Pods are disposable — never "fixed", they are replaced. Store state outside pods |
| **Shared network** | Containers in a pod talk via `localhost`. The pod gets one IP from the cluster network |

```bash
kubectl run nginx --image=nginx --port=80
kubectl get pods -o wide
kubectl describe pod nginx
```

---

## Core Kubernetes Objects

### Workloads

| Object | Purpose |
|---|---|
| **Deployment** | Manages a ReplicaSet. Ensures N replicas of a pod run. Handles rolling updates and rollbacks |
| **ReplicaSet** | Maintains a stable set of replica pods. Usually managed by a Deployment |
| **StatefulSet** | For stateful apps (databases). Gives stable pod names, ordered startup, and per-pod persistent storage |
| **DaemonSet** | Runs one pod per node. Used for log collectors, monitoring agents |
| **Job / CronJob** | Runs pods to completion; CronJob runs on a schedule |

### Networking

| Object | Purpose |
|---|---|
| **Service** | Stable network endpoint for a set of pods. Types: `ClusterIP`, `NodePort`, `LoadBalancer`, `ExternalName` |
| **Ingress** | HTTP/HTTPS routing to Services based on hostname or path. Requires an Ingress Controller (nginx, traefik) |

### Configuration & Storage

| Object | Purpose |
|---|---|
| **ConfigMap** | Stores non-sensitive configuration as key-value pairs. Mounted as env vars or files |
| **Secret** | Stores sensitive data (passwords, tokens) base64-encoded |
| **PersistentVolume** | A piece of storage provisioned in the cluster. Lifecycle independent of any pod |
| **PersistentVolumeClaim** | A request for storage by a user or pod |

```bash
kubectl get deployments,services,ingress -n default
kubectl apply -f deployment.yaml
kubectl rollout history deployment/myapp
```

---

## Networking Model

Kubernetes has a **flat network model**:
- Every pod gets a unique IP
- Pods communicate directly without NAT
- Nodes can reach all pods

```
Internet  →  LoadBalancer (L4)  →  Ingress (L7)  →  Service (ClusterIP)
                                                            │
                                              ┌─────────────┼─────────────┐
                                              ▼             ▼             ▼
                                            Pod 1         Pod 2         Pod 3
```

### Key networking components

| Component | Role |
|---|---|
| **CNI plugin** | Implements the pod network. Options: Calico, Flannel, Cilium (eBPF-based) |
| **CoreDNS** | Built-in DNS. Every Service gets: `svc.namespace.svc.cluster.local` |
| **NetworkPolicy** | Firewall rules for pods. Deny-all by default, then allowlist specific flows |
| **kube-proxy** | Programs `iptables`/`ipvs` rules on each node to route Service traffic |

### Service types

| Type | Accessibility | Use case |
|---|---|---|
| `ClusterIP` | Internal only | Default; pod-to-pod communication |
| `NodePort` | Via node IP + port | Dev/testing external access |
| `LoadBalancer` | External via cloud LB | Production external access |
| `ExternalName` | DNS alias | Point to external services |

---

## Quick Reference

```bash
# Cluster info
kubectl cluster-info
kubectl get nodes -o wide

# Pods
kubectl get pods -A
kubectl describe pod <name>
kubectl logs <pod> -c <container>
kubectl exec -it <pod> -- bash

# Deployments
kubectl apply -f deployment.yaml
kubectl rollout status deployment/<name>
kubectl rollout undo deployment/<name>
kubectl scale deployment/<name> --replicas=5

# Services
kubectl expose deployment/<name> --port=80 --type=ClusterIP
kubectl get svc -o wide

# Debugging
kubectl get events --sort-by='.lastTimestamp'
kubectl top nodes
kubectl top pods
```

---

*Built with Podman + Kubernetes. Happy orchestrating!*