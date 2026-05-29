### Docker Question Answer
# Docker & Podman QCM (40 Questions)

**Level: Beginner → Advanced**

---

## Part 1 — Docker Fundamentals (1–10)

### 1. What is Docker mainly used for?

A. Creating virtual machines
B. Containerizing applications
C. Managing databases only
D. Writing operating systems

**Answer:** B

---

### 2. Which command lists running Docker containers?

A. `docker images`
B. `docker ps`
C. `docker list`
D. `docker run`

**Answer:** B

---

### 3. What is a Docker Image?

A. A running process
B. A Linux kernel
C. A template used to create containers
D. A network driver

**Answer:** C

---

### 4. Which command creates and starts a container?

A. `docker build`
B. `docker start`
C. `docker create`
D. `docker run`

**Answer:** D

---

### 5. What is the default Docker image registry?

A. GitHub
B. Docker Hub
C. Azure Registry
D. Kubernetes

**Answer:** B

---

### 6. Which command downloads an image from Docker Hub?

A. `docker fetch`
B. `docker clone`
C. `docker pull`
D. `docker get`

**Answer:** C

---

### 7. What does a container share with the host system?

A. BIOS
B. Hypervisor
C. Operating system kernel
D. CPU firmware

**Answer:** C

---

### 8. Which command stops a running container?

A. `docker rm`
B. `docker stop`
C. `docker killall`
D. `docker shutdown`

**Answer:** B

---

### 9. Which file is used to build Docker images?

A. `docker.yaml`
B. `Dockerfile`
C. `compose.yml`
D. `image.conf`

**Answer:** B

---

### 10. Which command removes a container?

A. `docker delete`
B. `docker erase`
C. `docker rm`
D. `docker clean`

**Answer:** C

---

# Part 2 — Docker Architecture (11–18)

### 11. Which component is responsible for managing Docker containers?

A. Docker CLI
B. Docker Daemon
C. Docker Registry
D. Docker Proxy

**Answer:** B

---

### 12. What is the role of Docker CLI?

A. Stores images
B. Builds kernels
C. Communicates with Docker Daemon
D. Creates VMs

**Answer:** C

---

### 13. Docker uses which architecture model?

A. Peer-to-peer
B. Client-server
C. Monolithic
D. Master-slave only

**Answer:** B

---

### 14. Which command checks Docker system information?

A. `docker status`
B. `docker info`
C. `docker inspect daemon`
D. `docker version --all`

**Answer:** B

---

### 15. Where are Docker images stored remotely?

A. Registry
B. Hypervisor
C. Bridge
D. Namespace

**Answer:** A

---

### 16. Which low-level runtime is commonly used by Docker?

A. systemd
B. runC
C. kubelet
D. bash

**Answer:** B

---

### 17. What isolates Docker containers from each other?

A. Threads only
B. Linux namespaces and cgroups
C. BIOS virtualization
D. GPUs

**Answer:** B

---

### 18. Which storage mechanism creates Docker image layers?

A. OverlayFS
B. FAT32
C. RAID
D. SMB

**Answer:** A

---

# Part 3 — Docker Containers (19–26)

### 19. Which command opens a shell inside a running container?

A. `docker shell`
B. `docker exec`
C. `docker attach shell`
D. `docker connect`

**Answer:** B

---

### 20. What does this command do?

```bash
docker exec -it mycontainer bash
```

A. Deletes the container
B. Restarts the container
C. Opens an interactive bash shell
D. Creates a new image

**Answer:** C

---

### 21. Which option maps container ports to host ports?

A. `-v`
B. `-e`
C. `-p`
D. `-d`

**Answer:** C

---

### 22. What does this command mean?

```bash
docker run -p 8080:80 nginx
```

A. Maps host 8080 → container 80
B. Maps host 80 → container 8080
C. Opens two ports
D. Uses UDP only

**Answer:** A

---

### 23. Which command displays container logs?

A. `docker monitor`
B. `docker logs`
C. `docker history`
D. `docker inspect logs`

**Answer:** B

---

### 24. Which command shows all containers, including stopped ones?

A. `docker ps -a`
B. `docker ps --running`
C. `docker list all`
D. `docker inspect all`

**Answer:** A

---

### 25. What does the `-d` option do in `docker run -d`?

A. Deletes container
B. Runs in detached mode
C. Enables debug
D. Downloads image

**Answer:** B

---

### 26. Which command inspects detailed container information?

A. `docker details`
B. `docker inspect`
C. `docker info container`
D. `docker status`

**Answer:** B

---

# Part 4 — Docker Images (27–32)

### 27. What is an image layer?

A. A running process
B. A filesystem change in an image
C. A container network
D. A registry user

**Answer:** B

---

### 28. Why are Docker image layers useful?

A. Faster rebuilds and caching
B. Better VM performance
C. GPU acceleration
D. Kernel replacement

**Answer:** A

---

### 29. Which command builds an image from a Dockerfile?

A. `docker create image`
B. `docker compile`
C. `docker build`
D. `docker make`

**Answer:** C

---

### 30. What is a Docker image tag?

A. A process ID
B. An image version identifier
C. A network name
D. A container ID

**Answer:** B

---

### 31. Which command tags an image?

A. `docker rename`
B. `docker commit`
C. `docker tag`
D. `docker label`

**Answer:** C

---

### 32. Which command displays image history and layers?

A. `docker layers`
B. `docker history`
C. `docker inspect image`
D. `docker stats`

**Answer:** B

---

# Part 5 — Docker Compose (33–36)

### 33. What is Docker Compose mainly used for?

A. Managing multiple containers
B. Managing virtual machines
C. Writing Dockerfiles
D. Monitoring CPUs

**Answer:** A

---

### 34. Which file is commonly used by Docker Compose?

A. `docker-compose.yml`
B. `Dockerfile`
C. `compose.conf`
D. `containers.json`

**Answer:** A

---

### 35. Which command starts services defined in Docker Compose?

A. `docker-compose run`
B. `docker compose up`
C. `docker start compose`
D. `docker compose start-all`

**Answer:** B

---

### 36. Which command stops and removes Compose services?

A. `docker compose rm`
B. `docker compose stop`
C. `docker compose down`
D. `docker compose delete`

**Answer:** C

---

# Part 6 — Podman (37–40)

### 37. What is Podman?

A. A Kubernetes plugin only
B. A daemonless container engine
C. A Docker GUI
D. A hypervisor

**Answer:** B

---

### 38. Which Podman feature improves security?

A. Rootless containers
B. Kernel replacement
C. Hypervisor mode
D. BIOS emulation

**Answer:** A

---

### 39. Which command runs a container in Podman?

A. `podman run`
B. `podman create-vm`
C. `podman deploy`
D. `podman execute`

**Answer:** A

---

### 40. Which statement about Docker and Podman is TRUE?

A. Podman requires Docker Daemon
B. Docker cannot run containers
C. Podman is daemonless
D. Docker and Podman use different image formats only

**Answer:** C

---

# Bonus Advanced Questions

### 41. Which namespace isolates process IDs in containers?

A. PID namespace
B. NET namespace
C. MNT namespace
D. USER namespace

**Answer:** A

---

### 42. Which command shows resource usage statistics of containers?

A. `docker usage`
B. `docker top`
C. `docker stats`
D. `docker monitor`

**Answer:** C

---

### 43. In Docker Compose, what does `depends_on` do?

A. Builds images automatically
B. Defines service startup dependency
C. Shares storage
D. Creates networks

**Answer:** B

---

### 44. Which storage driver is most commonly used in modern Docker installations?

A. overlay2
B. ext2
C. aufs2
D. zfs-lite

**Answer:** A

---

### 45. What is the purpose of multi-stage builds?

A. Reduce image size
B. Add multiple kernels
C. Improve networking
D. Increase RAM allocation

**Answer:** A

wahibazaimia@gmail.com
walidgarouachi7@gmail.com
mehersakhri8@gmail
mehersakhri8@gmail.com
mounahamdi72@gmail.com