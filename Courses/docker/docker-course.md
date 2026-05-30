### Introduction to docker:
# Docker Course Resume / Cheat Sheet

## 1. What is Docker?

Docker is a containerization platform that allows applications to run consistently across environments by packaging code, dependencies, libraries, and runtime into lightweight containers.

### Benefits

* Fast deployment
* Environment consistency
* Lightweight compared to VMs
* Easy scalability
* Isolation between applications

---

# 2. Docker Architecture

## Main Components

![Image](https://images.openai.com/static-rsc-4/NeGeO-2KE4LO06-fFVEB_VenoMqeXWKbw5bpo5kVU2gjHZP2cFA7OwAIoUBRUt9yI4l7MzjHOCxsf2MOFBhNMY-AVO-Ek8dTmgByI1pPrs8r0A6zP8Rmr7XKK_O7b-Xuwi3qnQUjpYHECXEtb2SZ0gUyeVubwZFArVLbYD4OSKqTlr2DHBQ_PSltEjyURVAM?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/_T0cq9L-SxnDYQ398m1tZYPpn7jGY5oxL3NhpxdRnIkPVyUK3rRZLeaCI1Uyv3WLy_QQyjKwNptxXguU5RBFKsJwTskx-OBlMZS2P5zQn8TzGHkBBr77mW01w92jUnwfTI1qAdLEySJl5SPHRHrkQJBQKht_bUlEiif6baNW16epCJm8M5t34tF7p0P5dtcK?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/9WXiLNMjy3F6Jjkpfr8BAopV2KUu7Tl_MLrZoZ2XjktZNej9tClqqKRzQZBeW4r0AfXQn_QvwAcVFa-s3_bMBVL-HCy_XQzWbDFAkBlAy8IpFKk4ATXcxVXM4ZILJw5ck1yNZFxhYTriQPqGREXtsDejXsH4UN7PRe9so7VJcD00P8Ya7Nz6TlDydaO6eYUg?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/ZH5LHZwhgjVinSswQ0thDwAWzYC42-AhymkQzyblPP_lPWFBPZLbAak-wamiZWX-cvlMv2oBaODyTmjGb3ixXq7QKCRZt-UF-kEAkHn2aQFod6G5thch0texGoJFnhhOuXIdQKibb-Wy8QdPS5hCsfoXIbPAi4LFK0HFoqled1lysLJEHxEdW3GmfPN8QzD7?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/mXs6XwnoZtZbYf0hMqDeKXYXYRXgdboKOPcX_0XaS2-mwrPyWshboLsJuCXzsFk5FJfBT7oXNjDOcVyYVAclTFSfFfTZLxR_iUtdPQP2XuboxbGXMsUuO1DLGbWnDDgWTJG3-dwdkMd5iihm0ESi9KfzZJGRbfPpuos6vlygU9HRgCSMt066gwnQT6mf3rzY?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/BCiZ6vkk410X0H71GdjA5e8d-_VXNLKjYzciYFAO0ulDjzuGQ5QhNuoBH0uxV9vTTReF00UDUrftHc2YwHpUIi5ohDC4kdgDMYT3PgW--UpETATvH6LoSHkCKGXUvR_BSZte1bmXD59bcH7YIxubRhwsvn5j2hkUxyR9wSgOjhGg1ej16Aj02fgPg-p69R4M?purpose=fullsize)

### Docker Client

The CLI (`docker`) used to interact with Docker.

Example:

```bash
docker ps
docker run nginx
```

---

### Docker Daemon (`dockerd`)

Runs in the background and manages:

* Containers
* Images
* Networks
* Volumes

---

### Docker Engine

Core runtime that builds and runs containers.

Includes:

* Docker CLI
* REST API
* Docker Daemon

---

### Docker Images

Read-only templates used to create containers.

Example:

```bash
docker pull ubuntu
```

---

### Docker Containers

Running instances of Docker images.

Example:

```bash
docker run ubuntu
```

---

### Docker Registry

Stores Docker images.

Types:

* Public Registry
* Private Registry

Examples:

* [Docker Hub](https://hub.docker.com?utm_source=chatgpt.com)
* [GitHub Container Registry](https://ghcr.io?utm_source=chatgpt.com)
* [Azure Container Registry](https://azure.microsoft.com/en-us/products/container-registry?utm_source=chatgpt.com)

---

# 3. Docker Workflow

![Image](https://images.openai.com/static-rsc-4/C5agZQzdzVhJcmeWwwzJ0TPRycihBxkd66lN6T52khTm2UUVhXaV_Sr2yerQiole7xg42eALqq7R8X9gRHLjrMPThVE2C2IxdU5OO7re0cJ8R9e_0Sd2hQwmClcNl6kig4Cy6kZW6yaeT05P47trFxkYiZt-pTbFFMRTkUm7nqBnJGnj9isjGVujqhcg6BnD?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/j8S5bpWObadfXkeZqz8XTb3IZD6OESElMCKVeEYeO6xZZmhrFds7hIoajb6Rxgj7BnukgqcMlw_YlETxriUNP3YvPbkL771gyFw_Kd47iCsa-d_oGGkKX0jbqyTGZRGovrR3BDg_dTE15gPPOYkHkxoNgV8OreABQDjq9pegqJs60GW_T8SuPX9d2wbKGTwq?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/3MPsJToBJ2yD7hTCzthSARvfGIUo9u9PEXOa55Qx6S0GeItfjzXg_9aFOePhz7iNDkgiCi0lpN_fvvP-fDAGu-wxUzoXJkgVUxQ-0uOTcwqBT0BeLM0MrvXphQTCJfU-hQQMhmOMO7tHmxjeNN2lrHymSeyuCKBQNi1G1JdIq4G34bOciUyxnPj5MEcIEEBM?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/20dOoAkcvFDC7zt98HNOkRq906v-XNEn-0UZrRbeX3CcqLbXRMxMViZLv2chbKytdEUC6C3p32_wY0EEEyeTUYDdVQWWsQDIXN4IIyDOTx4lLx1oHj9JP39KmEMyWnsBT9WDaZpLNLfvwbQYHe7YJ1tUIJ0b5hp7s71rr2nJDdscLQLef-DnYZ6TFEVEc4dm?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/ujbKOMGh8-93GYAoeuyDDRE8pPklNJKcTFk5d_Ro7ekQt9PU-YbJo_o7VX_xQ9PxtFgYTb0tDdQ5T9rrHJ9J1BILjHHTAr2M0ahquq830waCOdTlWz1r80NOF40e7DSf6ULoYQ8bRoUY4zrwOvZrFCCpR3DWnWgJFIiP7c2ZRKv2USiM65rwCl-glSud7BQN?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/fTd1VfoOckdCTH92l6ICwvGgwF7qp-iYWKcVyB8-cBqjs1d2IVGGQmz-3zesLg7hFhHAAkKJ7RRplQZCOmkpGLBrMXRPUtnfRm9H-LwY-NUeqrfFJlCH0FCAHIC1WEklVxGxfrmo3t8rZFNWPqgC4xU5DIVxhjT3OgS-B53HAx2papyYnMIH0FFc5FpDyEtz?purpose=fullsize)

1. Create Dockerfile
2. Build Image
3. Run Container
4. Push Image to Registry
5. Pull Image from Registry
6. Deploy Container

---

# 4. Docker Images Commands

## List Images

```bash
docker images
```

## Pull Image

```bash
docker pull nginx
```

## Build Image

```bash
docker build -t myapp:v1 .
```

## Remove Image

```bash
docker rmi nginx
```

## Tag Image

```bash
docker tag myapp:v1 myrepo/myapp:v1
```

## Push Image

```bash
docker push myrepo/myapp:v1
```

## Inspect Image

```bash
docker inspect nginx
```

---

# 5. Docker Containers Commands

## Run Container

```bash
docker run nginx
```

## Run Container in Background

```bash
docker run -d nginx
```

## Run with Port Mapping

```bash
docker run -d -p 8080:80 nginx
```

## List Running Containers

```bash
docker ps
```

## List All Containers

```bash
docker ps -a
```

## Stop Container

```bash
docker stop container_id
```

## Start Container

```bash
docker start container_id
```

## Restart Container

```bash
docker restart container_id
```

## Remove Container

```bash
docker rm container_id
```

## View Logs

```bash
docker logs container_id
```

## Execute Command Inside Container

```bash
docker exec -it container_id bash
```

## Container Resource Usage

```bash
docker stats
```

---

# 6. Dockerfile Example

```dockerfile
FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
```

Build:

```bash
docker build -t nodeapp .
```

Run:

```bash
docker run -d -p 3000:3000 nodeapp
```

---

# 7. Public Registry vs Private Registry

## Public Registry

Accessible by everyone.

Examples:

* [Docker Hub](https://hub.docker.com?utm_source=chatgpt.com)
* [Quay.io](https://quay.io?utm_source=chatgpt.com)

### Push Example

```bash
docker login

docker tag myapp username/myapp:v1

docker push username/myapp:v1
```

---

## Private Registry

Accessible only to authorized users.

Examples:

* Azure Container Registry
* Amazon Elastic Container Registry
* Google Artifact Registry

### Run Local Private Registry

```bash
docker run -d -p 5000:5000 --name registry registry:2
```

### Push to Private Registry

```bash
docker tag myapp localhost:5000/myapp

docker push localhost:5000/myapp
```

### Pull from Private Registry

```bash
docker pull localhost:5000/myapp
```

---

# 8. Docker Volumes

Volumes store persistent data outside containers.

Without volumes:

* Data is lost when container is removed.

---

# 9. Bind Mount vs Docker Volume

![Image](https://images.openai.com/static-rsc-4/bE0hxPeEUm7o7L6szoC0jZHqPv-bT9DP1olp_ZLju7r6vKn1gizWqRoA2yKvXMiiwrBPTmUiOgQ48aZjQgdxEyYJJPI2ZbQ_YAt4B5oSNienZR_RNdKA7FwTy00EQYpWZqazEPtzp7GDXd7iE-WsJDomdY6Dugr-pS8fwhoDykQA54fKnInL3ZFFWps5hNaX?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/7D1rsOdRK31dNWMip5-Hz83uKReSzcs2aQ1jBWNcTd7EBzHlVyVs2qYStQXIPaheQDtj83o3N7hIT7-v-ZNCYuScSaNDac0RqrnwfBBs0d_nuwDzkQauQHaxL7bja6bYLEAqweWKamJ51lnQX1d122ZBGRtHMTIz9UQ_EAkki04_16UrlPbElKvHTH83vd8Z?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/ymZaKzzNncyQhRxOEZn16yK20z2TQ3HjLWXxGWi6HdWfcmumOGyemZQWjqDLs6l1Ekr82NgzTatEeBs2B6TNGAU6Imu9v6SNPEpeCZgzMeaP1gNPbvB5VwVGgdxUEluL40qKv0ipUzouphL3r_d_ao34jCOya-7gf0MjPpu9E1YoKq4nd256_Rhr1I_OPpN4?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/gS5Lt5oARIVIJ9hnOmslK6fq7vm5_8UBy2PlkJz8hdxLfbo12Aw18gb6cGuWFB70oUAfg7oUb7K_kUeSPnQT8bVrlQ55R1XJW6_0bs4fA5u-s3d_ac1Yg_hZII0v24-UfpvvfjhQyMA-YG4Piit8051qnjp-nKTRBlSw2dbSYJSZiTXx069tbDhlBtE6QKW2?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/KcZxuL20nio87kDnoXrEy1iciMKmiWtF_vedi9GKs1Ol2xyCl_aN_lUuMyopXKar93aOmF41ihzO0KA_9GIwjKy7k4M94oUXxs0kAejxG5FrLVY-EJwSUqVQhXQ8mPHWpF_kqJ2OOZu2nEsIZmg5GOApGwmzFd1LUkVAiqkiR_khtFm8bXvr0Vg3uwLQKG5A?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/q6Sl1vW_1PMDAyeAtBdJulgYT5FgjzjFaHer-xD3bdMBt2J2mEqiC7hZOdyBWxm1l3i4XOXJZeNgKBjkZ46czmvV_kgni23anl6JnngFTerBOAasH0sRvKHMS1HU38x4qIU9pVW2KYTBmbZOUXH9wdShElLGLKWnCsYPxlINvBawvg1PzbURjFfKuzoW0xlb?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/-Kd3gr6xv6Wu6DZsggJLv1iTC-S2Cf90DYvNo5XFIjb6f8ij7Yz8aVNjvytbtPfwFsn6Z-6nid-TqBPc_cQ-yKPavDSNKZ_W2qduE2WjqYoK15ajpsJ09JZJ1RrAZptqdwst8f06hxkjiiSI5Wz1MoIaWCa7toqiPvelMup25usiOjYfcbXCTojvYXIhn-W-?purpose=fullsize)

| Feature     | Bind Mount         | Docker Volume     |
| ----------- | ------------------ | ----------------- |
| Location    | Host filesystem    | Managed by Docker |
| Performance | Depends on host    | Optimized         |
| Portability | Less portable      | More portable     |
| Security    | Direct host access | Safer             |
| Backup      | Manual             | Easier            |

---

## Bind Mount Example

```bash
docker run -d \
-v /host/data:/app/data \
nginx
```

Host directory is mounted directly.

---

## Docker Volume Example

### Create Volume

```bash
docker volume create myvolume
```

### Use Volume

```bash
docker run -d \
-v myvolume:/app/data \
nginx
```

### List Volumes

```bash
docker volume ls
```

### Inspect Volume

```bash
docker volume inspect myvolume
```

---

# 10. Docker Networking

Docker networking allows containers to communicate.

![Image](https://images.openai.com/static-rsc-4/UVOkDyTr0pfjo0cVheG_yhPsO2nu8BnoJhm9Nv6co25ibmRQZrK89XQGZg23j-ibq1-FzJS0bfIFrUGZGsCll29QSeQ-rxbCZMIx5rSwgvEEFyFRcwbCyyvC5psM7TXXegTfPs2QL1W0imbk1f_narscfao-JIp8t6PULJzUZ9BPUuGA9OfgW1gNRLx-pYB4?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/XHu1fGXCLDptY5XAgU1keRfSBjmsO1xFItQ-CLfNgQcW5nhQ9yRsE3Ac2g8obEQNLPCzpE0ZeOJDK0uYWJYoPozywbYZoyjfyHRxz2CHlloJ-DUuyCR0ILJUegRufCfi7XumSBFtBAvgVzIda0pZZExPMLwo4XgY82A-XAeb3LUGFAqapr6x2g18GOXy1TiB?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/dwhKbm1F1z62g0-pPorMe0vBEDwuZUM3IM8GQLSyBvwQ78bO0n1QyFOyvd7Rb5rraarSGZ-XWDrVELqA-vCE5XaPy48_Z-rzKUVR6aWt574aB8KWIK7rxwfTt9czsRvElClCt33vXiXFG7aanJQZcKjQQBkyvKwjwpltWwo8lK1GS044BFAJ1JLLIp9q53oa?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/uwp_h_UdNm3WH5pxotIHBbhPW6H6VjrH_ry0dKqDNu2-xf01vX-bA4kjAxsb6Jc9-zZZnZo_8lq6j-fvpwMaG5oakOL5BnV0GaO-_MmIun4TQqe9e-Zp9qkaE1DucRkQJsxsRLQ_PwT1iE-4t0-f4RQV7x_uiJCbzdA7zUFqyGYQz3r3tnF62D9dxJPa6lrQ?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/RJCwg0MS5z2MNQw5TszxAJrXH3am9Lccv4poYBjihfRHG0A98Rsm2eW93cALLMZBu-Ccz8pqL9opEF7W8knw8R_1sN9uItiIfSD_6tIGkZqx7xbN6Cn_ooLx9oVfmhjzFlfzPwW33Gsmgxq_1XEvdyku3tmFAABhboN5hNH_77hs1gHAZB3uR-ikHRj_94-g?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/SoFKEPH6J5xXb5MM8uEaGofBn1RCp6ISclSPUJYh0fDik0NLIuWLouCHIHdjWAcDpWWxO6YIjo4XhpF18vGcsyBhU5WYcgcxfNFxL0CyGXr0E3FsvQlRSlFg8NYG4iQKrpv4_dTtIrtGVdSL1wOl6G1tUhfRnUp27BLnIR1doT14m9BGmHtBbCJrgp0JZaoX?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/HF0nlCm5KJ5PFDTtzpaqAx6lC_d1AhReYKkb5wwsV35nJdH54YumVh5GqyNN__Az8w2eT6E6shUEdPNjyJ6A3t63TyTzP8qHIK7YfckY-1NSyJEKFldS32OQgWzlP67b-WwKx77cKwP56158bw2c1mkrXMvIsQIn1akqdfSqQjQxG0H_BaYcxS0AgExd0JjG?purpose=fullsize)

---

# 11. Types of Docker Networks

## 1. Bridge Network (Default)

Used for communication between containers on the same host.

### Create

```bash
docker network create mybridge
```

### Run Containers

```bash
docker run -d --network mybridge --name app1 nginx

docker run -d --network mybridge --name app2 busybox
```

### Test Communication

```bash
docker exec -it app2 ping app1
```

---

## 2. Host Network

Container uses host machine network directly.

### Example

```bash
docker run --network host nginx
```

Advantages:

* Better performance
* No NAT

Disadvantages:

* Less isolation

---

## 3. None Network

Container has no networking.

### Example

```bash
docker run --network none nginx
```

Used for:

* Security
* Offline processing

---

## 4. Overlay Network

Used in Docker Swarm for multi-host communication.

### Example

```bash
docker network create \
-d overlay myoverlay
```

Used for:

* Microservices
* Multi-node clusters

---

## 5. Macvlan Network

Assigns MAC address to container.

### Example

```bash
docker network create -d macvlan \
--subnet=192.168.1.0/24 \
--gateway=192.168.1.1 \
-o parent=eth0 macvlan_net
```

Used for:

* Legacy applications
* Direct LAN access

---

# 12. Useful Docker Commands

## System Information

```bash
docker info
```

## Docker Version

```bash
docker version
```

## Remove Unused Resources

```bash
docker system prune
```

## Remove Stopped Containers

```bash
docker container prune
```

## Remove Unused Images

```bash
docker image prune
```

## Remove Unused Volumes

```bash
docker volume prune
```

---

# 13. Docker Compose Example

Docker Compose helps manage multi-container applications.

## docker-compose.yml

```yaml
version: '3'

services:
  web:
    image: nginx
    ports:
      - "8080:80"

  db:
    image: mysql
    environment:
      MYSQL_ROOT_PASSWORD: root
```

## Start

```bash
docker compose up -d
```

## Stop

```bash
docker compose down
```

---

# 14. Best Practices

* Use lightweight images (`alpine`)
* Avoid running containers as root
* Use `.dockerignore`
* Keep images small
* Use multi-stage builds
* Store secrets securely
* Use named volumes for persistence
* Scan images for vulnerabilities

---

# 15. Quick Interview Questions

### Difference between Image and Container?

* Image = template
* Container = running instance

### Difference between VM and Docker?

* VM includes full OS
* Docker shares host kernel

### What is Docker Volume?

Persistent storage managed by Docker.

### Why use Overlay Network?

Communication across multiple Docker hosts.

### What is Port Mapping?

Expose container ports to host.
Example:

```bash
-p 8080:80
```

### What is Docker Registry?

Storage repository for Docker images.
