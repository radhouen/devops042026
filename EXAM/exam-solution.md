Here are the answers to all 60 questions, one by one:

---

**Q1. True statements about microservices? (Choose TWO)**
✅ **A** – Microservices can negatively impact performance due to inter-process API communication overhead.
✅ **B** – They enable fast/frequent releases since only affected services need redeployment.

---

**Q2. How can REST APIs support changes? (Choose TWO)**
✅ **A** – Versioned API endpoint hostnames (e.g., `v1.api.example.com`).
✅ **E** – Versioned API endpoint URLs (e.g., `/v1/users/1234`).

---

**Q3. True statements about immutable servers? (Choose TWO)**
✅ **A** – Even small changes require a full rebuild and redeploy.
✅ **C** – Preparation/configuration tasks are moved to build time, not deployment time.

---

**Q4. How many databases are typically used in a multi-microservice application?**
✅ **A** – One database per microservice. (Each microservice owns its own data store.)

---

**Q5. True statements when migrating legacy apps to containers? (Choose TWO)**
✅ **B** – Legacy apps often use tightly coupled storage that's hard to separate.
✅ **D** – Wrapper applications can expose a modern API over legacy functionality and data.

---

**Q6. Which software development processes are agile? (Choose TWO)**
✅ **A** – Kanban
✅ **D** – Scrum

---

**Q7. How is access to an object store (e.g., OpenStack Swift) controlled? (Choose TWO)**
✅ **D** – Access can be granted via CORS headers matching the Referer header.
✅ **E** – Access is controlled by ACLs granting permissions to users.

---

**Q8. Features provided by message brokers? (Choose THREE)**
✅ **A** – Queue messages that can't be delivered immediately.
✅ **C** – Let recipients subscribe/unsubscribe to specific messages.
✅ **D** – Forward messages to single or multiple recipients.

---

**Q9. Which git subcommand retrieves a remote repository's content?**
✅ **`clone`**

---

**Q10. Which git command shows changes in the last three commits?**
✅ **E** – `git diff HEAD^^^`

---

**Q11. Which command reports last changes to a specific line in a file?**
✅ **D** – `git blame -L 586,588 main.c`

---

**Q12. How to resolve the `git push` rejection (fetch first)?**
✅ **E** – Retrieve and merge the latest remote commit using `git pull`.

---

**Q13. Which SCM does NOT use sequential revision numbers?**
✅ **C** – `git` (uses SHA-1 hashes, not sequential numbers)
✅ **D** – `Mercurial` (also uses hashes, though it shows local revision numbers as a convenience)
> Primary answer expected: **C – git**

---

**Q14. Goals of continuous delivery? (Choose THREE)**
✅ **B** – Run the same artifacts in production that were used for testing.
✅ **C** – Provide immediate feedback about source code changes.
✅ **E** – Reduce the time from developing a feature to delivering it to clients.

---

**Q15. How do unit tests work?**
✅ **D** – Methods are called with specific parameters and their effect is compared to the desired result.

---

**Q16. What is A/B testing?**
✅ **C** – Two different versions of the same UI are run in parallel to gather comparable metrics about the competing versions.

---

**Q17. What must be done to run Jenkins jobs on a new slave server?**
✅ **B** – Change jobs to be allowed to run on all Jenkins servers (set the "Restrict where this project can be run" or remove master restriction).

---

**Q18. Post conditions in a Jenkins declarative pipeline? (Choose TWO)**
✅ **A** – `always`
✅ **D** – `success`

---

**Q19. What is true about the `-i` parameter in `docker run -ti`?**
✅ **B** – `-i` (short for `--interactive`) keeps the standard input of the container open.

---

**Q20. True statements about `docker run -ti -v /srv/www/:/var/www/html/ debian bash`? (Choose THREE)**
✅ **B** – Changes to `/var/www/html/` inside the container affect `/srv/www/` on the host.
✅ **D** – The host's `/srv/www/` is available at `/var/www/html/` within the container.
✅ **E** – If `/srv/www/` doesn't exist on the host, Docker creates it before starting the container.

---

**Q21. Which Dockerfile instruction can download a file via HTTP?**
✅ **D** – `ADD` (it supports URLs as a source)

---

**Q22. Which Dockerfile instruction executes a command while an image is created?**
✅ **`RUN`**

---

**Q23. Output of `docker run myimage cat /etc/debian_version` with `ENTRYPOINT ["echo", "hello", "world"]`?**
✅ **A** – `hello world cat /etc/debian_version`
(The ENTRYPOINT is `echo hello world`; the `cat /etc/debian_version` arguments are appended to it.)

---

**Q24. What happens when running `docker run myimage` with `VOLUME /data` in the Dockerfile? (Choose TWO)**
✅ **A** – Docker creates a new persistent volume for the container's `/data` filesystem.
✅ **C** – Docker searches for an existing volume called `data` and attaches it, or creates a new anonymous one.
> More precisely: **A** and (since no named volume is specified) Docker creates a new anonymous persistent volume — **A** is correct; **D** is wrong because it's not temporary.

---

**Q25. Dockerfile directives evaluated at container creation (not image build)? (Choose TWO)**
✅ **C** – `EXPOSE` (defines port metadata, interpreted at runtime)
✅ **E** – `CMD` (executed when the container starts)

---

**Q26. Which `docker-compose up` parameter starts containers in the background?**
✅ **`-d`** (short for `--detach`)

---

**Q27. Elements that exist in a Docker Compose file? (Choose THREE)**
✅ **A** – `volumes`
✅ **B** – `services`
✅ **E** – `networks`

---

**Q28. Unique properties of a replicated service in Docker Swarm? (Choose TWO)**
✅ **A** – It can run multiple times in the Swarm.
✅ **D** – It can run on an arbitrary number of Swarm nodes.

---

**Q29. True statements about Kubernetes object relations? (Choose TWO)**
✅ **B** – Deployments create ReplicaSets.
✅ **D** – ReplicaSets start Pods.

---

**Q30. Container properties shared by all containers within a Kubernetes Pod? (Choose TWO)**
✅ **D** – The IP address and networking ports.
✅ **E** – All storage volumes.

---

**Q31. What must be done to deploy services to a Docker Swarm via `docker-compose`?**
✅ **E** – Run `eval "$(docker-machine env --swarm docker-vm)"` before using `docker-compose`.

---

**Q32. True statements about the `docker network ls` output showing overlay `mynet`? (Choose TWO)**
✅ **B** – The Docker nodes belong to a Docker Swarm (overlay networks are Swarm-specific).
✅ **E** – The network `mynet` is available on more than one Docker host (overlay networks span hosts).

---

**Q33. What is true about shared Docker volumes and Flocker?**
✅ **C** – Flocker can share volumes between containers running on multiple hosts in the same Flocker cluster.

---

**Q34. What role does etcd play in a container cluster?**
✅ **B** – Kubernetes stores its cluster configuration and runtime information in etcd.

---

**Q35. True statements about a Vagrant box configuration file? (Choose TWO)**
✅ **B** – Vagrant assumes the configuration file is called `Vagrantfile`.
✅ **C** – A single Vagrant configuration file can describe multiple boxes and guest systems.

---

**Q36. What must be done to change the provisioner in an existing Vagrant setup?**
✅ **C** – It must be verified that the current boxes are available for the new provisioner.

---

**Q37. How can a Vagrant configuration contain multiple guest systems? (Choose TWO)**
✅ **B** – `config.vm.define` can be used to define multiple guest systems with specific options.
✅ **E** – The content of `config.vm` is merged with the specific configuration options of each guest system.

---

**Q38. How can Vagrant be used with Packer?**
✅ **D** – Packer can prepare and package Vagrant boxes which serve as templates for new guest systems.

---

**Q39. When is cloud-init run?**
✅ **C** – Within an instance during each start of the respective instance.
> Note: More precisely, cloud-init runs on first boot by default, but **C** is the closest correct answer among the options.

---

**Q40. Which cloud-init modules are needed to partition, create filesystems, and mount volumes? (Choose THREE)**
✅ **A** – `mounts`
✅ **C** – `disk_setup`
✅ **E** – `fs_setup`

---

**Q41. If a Packer template has multiple builders and provisioners, which statement is true?**
✅ **D** – Each builder runs an instance of the target image in which, by default, all provisioners are run.

---

**Q42. How can the variable `cloud_access_key` be used within a Packer template?**
✅ **C** – `"access_key": "{{user `cloud_access_key`}}"`

---

**Q43. True statements about Ansible for Linux configuration management? (Choose TWO)**
✅ **B** – Changes in configuration files on managed systems may be overwritten by Ansible.
✅ **D** – The SSH server must be running on managed systems (Ansible connects via SSH).

---

**Q44. Default location of the Ansible inventory configuration file?**
✅ **B** – `/etc/ansible/hosts`

---

**Q45. Which Ansible task ensures `httpd` is running and starts on boot?**
✅ **B**:
```yaml
- service:
    name: httpd
    state: started
    enabled: yes
```
(Note: the correct parameter is `enabled`, not `enable`)

---

**Q46. Which `ansible-playbook` option switches to a privileged user before running tasks?**
✅ **`--become`**

---

**Q47. Which Ansible keyword allows tasks to run only under specific conditions?**
✅ **D** – `when`

---

**Q48. Which Ansible command creates and edits encrypted files containing secrets?**
✅ **`ansible-vault`**

---

**Q49. Which Ansible tasks install a Debian package requiring interactive answers? (Choose TWO)**
✅ **A** – `debconf` (pre-seeds answers to installer questions)
✅ **D** – `apt` (used to install the package itself)

---

**Q50. Which statement inserts the value of Ansible variable `server_name` in a Jinja2 template?**
✅ **D** – `{{ server_name }}`

---

**Q51. What is the Chef equivalent to an Ansible Playbook?**
✅ **E** – Chef Recipe

---

**Q52. Which Puppet subcommand applies a manifest locally without a Puppet master?**
✅ **`apply`**

---

**Q53. Metric types Prometheus can collect? (Choose THREE)**
✅ **B** – Histogram
✅ **C** – Counter
✅ **E** – Summary

---

**Q54. How should a Linux system be configured to allow Prometheus to monitor it?**
✅ **D** – Install `node-exporter` on the node, which provides an endpoint Prometheus can scrape.

---

**Q55. Typical functionalities of an HTTP application layer gateway? (Choose THREE)**
✅ **A** – Route requests to specific backends based on the URL.
✅ **B** – Receive HTTPS connections and forward using HTTP (SSL termination).
✅ **E** – Add, remove, or change HTTP headers of requests.

---

**Q56. Which data in cloud instances should never be exposed publicly? (Choose TWO)**
✅ **A** – Private SSL keys used for HTTPS.
✅ **E** – Configuration files for database access.

---

**Q57. True statements about Elastic Stack components? (Choose TWO)**
✅ **B** – Logstash supports multiple protocols for log submission.
✅ **D** – Elasticsearch stores and indexes processed log data.

---

**Q58. Which Logstash configuration section defines what happens to a message after filtering?**
✅ **`output`**

---

**Q59. How is a number greater than zero described in a Logstash grok filter match pattern?**
✅ **B** – `%{POSINT:count}`

---

**Q60. True statements regarding syslog? (Choose TWO)**
✅ **A** – Syslog is a traditional service for logging on Unix systems.
✅ **D** – Syslog classifies log messages by fixed priorities and facilities.