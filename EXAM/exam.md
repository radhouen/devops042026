1. Which of the following statements are true regarding microservices? (Choose TWO correct answers.)
A. Microservices can have a negative impact on the overall performance of an application because of the use of external APIs for inter-process communication.
B. Microservices facilitate fast and frequent releases of new features because only the affected services have to be redeployed.
C. Microservices require all services of an application to be written in the same programming language for compatibility reasons.
D. Microservices increase the risk associated with updates because a single failed microservice stops the whole application.
E. Microservices make it hard to replace the implementation of a specific functionality because of their specific APIs.

2. How can REST APIs support changes in the API? (Choose TWO correct answers.) 
A. By using versioned API endpoint hostnames, such as v1.api.example.com. 
B. By using the X-API-Version HTTP header which is part of the REST standard. 
C. By using versioned resources, such as /users/1234-APIV1 and /users/1234-APIV2.
D. By using versioned HTTP commands, such as GETv1.0.8rc2 instead of GET.
E. By using versioned API endpoint URLS, such as /v1/users/1234.


3. Which of the following statements are true regarding immutable servers? (Choose
TWO correct answers.)
A. In case of small changes, immutable servers must be rebuilt and redeployed.
B. Immutable servers store persistent data and can not be deleted without data loss.
C. Preparation and configuration tasks are moved from the time of deployment to the time of building.
D. Immutable servers cannot use external services such as databases and object
stores.
E.All interactions with immutable servers have to happen through shared file systems.

4. If an application consists of multiple microservices which persist data and run on a container platform with multiple hosts, how many databases are typically used?
A. One database per microservice.
B. One database per microservice instance.
C. One database per application.
D. One database per container host.
E. One database per container.

5. Which of the following statements are true when migrating legacy applications into containers? (Choose TWO correct answers.)
A. Most legacy applications are monolithic applications which cannot easily be scaled or run multiple times in parallel.
B. Legacy applications tend to handle state information and persistent data in tight coupled storage which cannot easily be cut off.
C. Containers can split monolithic applications into distinct components which can then be treated as microservices.
D. Wrapper applications can be used to create a modern API to access functionality and data of a legacy application.
E. Containers mitigate most aspects of monolithic applications which prevent them from being arbitrarily scaled.

6. Which of the following software development processes are agile? (Choose TWO correct answers.)
A. Kanban
B. Rational Unified Process
C. V-Model
D. Scrum
E. Waterfall

7. How is the access to the content of an object store such as OpenStack Swift controlled? (Choose TWO correct answers.)
A. Access to objects is governed by the bucket's permissions and cannot be changed for an individual object.
B. Access to objects is controlled only by the IP addresses of clients accessing the object.
C. Access to objects is granted to any client unless a packet filter rejects its connection to the object store.
D. Access to objects is granted if the Referer header of a requests matches the object's CORS header.
E. Access to objects is controlled by access control lists granting permissions to
users.
8. Which of the following features are provided by message brokers? (Choose THREE correct answers.)
A. Queue messages which cannot be delivered immediately.
B. Archive messages as HTTP resources for infinite access and updates.
C. Let recipients subscribe and unsubscribe to specific messages.
D. Forward messages to single or multiple recipients.
E. Execute stored procedures based on the content of specific message fields.

9. Which git sub command retrieves a remote git repository's content? (Specify ONLY
the sub command without any path or parameters.)
Answer: Write the answer on the answer sheet

10. Which of the following git commands shows the changes contained in the last three commits?
A. git diff --history 3
B. git diff HEAD-3
C. git diff HEAD!3
D. git diff --commits 3
E. git diff HEAD^^^

11. When compiling an application, the compiler raises an error related to line 587 of the file main.c. If the source code of this application is managed in a git repository, which command reports the last changes made to the erroneous line of code?
A. git rerere -L 586,588 main.c
B. git search -t commit -f main.c --range 586,588
C. git log main.c:586,588
D. git blame -L 586,588 main.c
E. git log -f main.c -1 586,588

12. While trying to upload local commits to a remote repository, git push raises the
following error:
! [rejected]
staging -> staging (fetch first)
error: failed to push some refs to 'git@git.example.com:myapp.git'
What should be done to resolve this issue?
A. Add the --nocheck parameter to git push to disable all consistency checks.
B. Integrate the remote changes using git checkout.
C. Push the local commits to another remote branch by adding the branch name to git push.
D. Use git merge --recursive instead of git push.
E. Retrieve and merge the latest remote commit using git pull.

13. Which of the following SCM do not use sequential revision numbers?
A. SVN
B. CVS
C. git
D. Mercurial
E. RCS

14. Which of the following goals belong to continuous delivery? (Choose THREE correct answers.)
A. Avoid unnecessary deployments by grouping updates over a specific amount of
time.
B. Run the same artifacts in production that were used for testing.
C. Provide immediate feedback about the functionality of source code changes.
D. Minimize the number of automated unit and acceptance tests.
E. Reduce the time from developing a feature to delivering it to clients.

15. How do unit tests work?
A. Professional testers run the application to manually investigate its behavior when using new features.
B. The test interacts with the elements of the user interface of the tested application to trigger specific actions.
C. A compiler is called to verify the syntax and logic of the source code of the tested application.
D. Methods are called with specific parameters and their effect is compared to the desired result.
E. The external API of the tested service is called and the returned values are
compared to the correct result.



16. What is A/B testing?
A. Two instances of the same service are run in parallel in order to terminate one
instance to test the behavior of the other.
B. Two or more instances of a service are run in parallel on multiple hosts to allow the parallel execution of tests.
C. Two different versions of the same user interface are run in parallel to gather comparable metrics about the competing versions.
D. Two different releases of the same application are tested with the exact same requests to compare the resulting databases.
E. Two different releases of the same service are installed in parallel to be able to flip over operations from one release to the other.

17. After adding the first slave server to an existing Jenkins installation, all jobs continue to be executed on the master server. What has to be done to also run jobs on the slave server?
A. Assign Jenkins plugins to be executed on the new slave server.
B. Change jobs to be allowed to run on all Jenkins servers.
C. Change the type of the job's project to Delegated Build.
D. Move the job's working directory to a storage shared with all Jenkins servers.
E. Set a weight greater an 0 for the new slave server.

18. Which of the following post conditions exist in a Jenkins declarative pipeline? (Choose
TWO correct answers.)
A. always
B.never
C. pending
D. success
E. Partial

19. What is true about the -i parameter in the docker run -ti container command?
A. -i, short for --infinite, keeps the container running until it is explicitly stopped, even if all processes of the container are terminated.
B. -i, short for --interactive, keeps the standard input of the container open so it can be used to interact with the container.
C. -i, short for --independent, starts the container immediately instead of waiting for other containers which share volumes and ports to be completely started.
D. -i, short for --install, boots the container into the container's Linux installer instead of booting it into its preexisting base image.
E. -i, short for --isolated, disconnects the container from all shared volumes and network ports.

20. Which of the following statements are true regarding the following command? (Choose
THREE correct answers.)
docker run -ti -v /srv/www/:/var/www/html/ debian bash
A. When starting the container, Docker copies the content of /srv/www/from the host system to the container.
B. Changes made to the content of /var/www/html/ from within the container affect /srv/www/ in the host system.
C. If the container image contains files within /srv/www/, these files are copied to the host file system.
D. The content of /srv/www/ in the host system is available at /var/www/html/ within the container.
E. If the path /srv/www/ does not already exist on the host system, Docker creates this directory before starting the container.

21. Which of the following instructions in a Dockerfile can download a file via HTTP into the container image?
A. CURL
B. COPY
C. WGET
D. ADD
E. PLACE

22. Which instruction in a Dockerfile executes a command while an image is created? (Specify ONLY the statement's name without any values or parameters.)
Answer: Write the answer on the answer sheet

23. The Docker image my image was built from the following Dockerfile:
FROM debian: 9
ENTRYPOINT ["echo", "hello", "world"]
What is the output the following command?
docker run myimage cat /etc/debian_version
A. hello world cat /etc/debian_version
B. 9.0 echo hello world
C. cat: 'echo hello world': No such file or directory
D. hello world

24. The following lines are included in the Dockerfile used to build the image myimage:
VOLUME /data What happens when running docker run my image? (Choose TWO correct answers.)
A. Docker creates a new persistent volume for the container's /data file system. B. Docker creates a new persistent volume for the container's root file system.
C. Docker searches for an existing volume called data and attaches it to the
container.
D. Docker creates a new temporary volume for the container's /data file system.
E. Docker creates a new temporary volume for the container's root file system.

25. Which of the following directives in a Dockerfile are evaluated when a new container is created from an existing image built from the Dockerfile? (Choose TWO correct answers.)
A. COPY
B. ADD
C. EXPOSE
D. RUN
E. CMD
26. Which parameter of docker-compose up starts the containers in the background instead of attaching them to the local console? (Specify ONLY the parameter name without any values.)
Answer: Write the answer on the answer sheet
27. Which of the following elements exist in a Docker Compose file? (Choose THREE correct answers.)
A. volumes
B. services
C. containers
D. nodes
E. networks
28. In a Docker Swarm, what is the unique property of a replicated service? (Choose TWO correct answers.)
A. It can run multiple times in the Swarm.
B. It runs a shadow copy of each container on another Swarm node.
C. It always runs all replicas on the same single node in the Swarm.
D. It can run on an arbitrary number of Swarm nodes.
E. It always runs on every node in the Swarm.
29. Which of the following statements are true regarding the relation of Kubernetes
objects? (Choose TWO correct answers.)
A. Services create Deployments.
B. Deployments create ReplicaSets.
C. Services create ReplicaSets.
D. ReplicaSets start Pods.
E. Pods start Deployments.
30. Which of the following container properties are shared by all containers within a Kubernetes Pod? (Choose TWO correct answers.)
A. All resource limits and requests.
B. All labels assigned to the containers.
C. The container base image.
D. The IP address and networking ports.
E. All storage volumes.

31. After setting up a Docker Swarm cluster using docker-machine, what must be done
in order to deploy services to the cluster using docker-compose?
A. Use docker-machine compose, which provides the same options as
docker-compose.
B. Add the parameters --swarm and --machine to docker-compose.
C. Login to all of the nodes managed by docker-machine and install the Docker Compose server.
D. Add a swarm section to the Docker compose file and add the list of docker nodes.
E. Run eval "$(docker-machine env --swarm docker-vm) " before using docker-compose.


32. When the command docker network is returns the following output:
NETWORK ID  NAME       DRIVER
7ae0400dcb3d   node2/host      host 
596678655616    node1/bridge     bridge 
d299d7f4db09   mynet          overlay 
cf3834c2adf3    node1/none     null 
46a0d105ae25    node1/host      host 
ac7e61856f8b    node2/bridge    bridge
a40e88404a74 node2/none null
which of the following statements are true? (Choose TWO correct answers.)
A. The network mynet is not available because it is not assigned to a host.
B. The Docker nodes mentioned in the output belong to a Docker Swarm.
C. Containers on both hosts can communicate through the network bridge. X
D. The network host is not available because it is assigned to more than one host.
E. The network mynet is available on more than one Docker host.

33.What is true about shared Docker volumes and Flocker?
A. Flocker does not support volumes used by more than one container at the same time.
B. Flocker requires volumes to be explicitly created as shareable in order to be used by more than one container.
C. Flocker can share volumes by containers running on multiple hosts which participate in the same Flocker cluster.
D. Flocker volumes can only be shared by multiple containers running on the same host.
E. Flocker must be configured to put volumes on a shared storage to support volume sharing one host.

34.What role does etcd play in a container cluster?

A. All container images are stored in etcd to be accessible from all nodes.
B. Kubernetes stores its cluster configuration and runtime information in etcd.
C. Overlay networks route their traffic through etcd from one node to the others. D. etcd synchronizes the contents of the /etc/ directory in all containers.
E. Container volumes can be stored in etcd if they are required on more than one node.


35.What is true regarding the configuration file of a Vagrant box? (Choose TWO correct answers.)

A. Vagrant maintains one configuration file per user which contains all of the user's projects and boxes.
B. Vagrant assumes the configuration file is called Vagrant file.
C. A Vagrant configuration file can describe multiple boxes and guest systems.
D. By default, Vagrant parses all files ending in .conf within the current directory.
E. The file should not be shared or put under version control because it contains sensitive information, such as private SSH keys.

36.What has to be done in order to change the provisioner in an existing Vagrant setup? 

A. The box image has to be manually moved to the new hypervisor's storage under the name specified in config.vm.box in the Vagrant configuration.
B. The option config.vm. auto_convert has to be set in the Vagrant configuration to make Vagrant convert the box to the new platform on the first
start.
C. It must be verified that the current boxes are available for the new provisioner.
D. The box has to be rebuilt by using vagrant rebuild in conjunction with the --provider parameter.
E. The new provisioner must be specified in the configuration file or on the command line when invoking vagrant.

37.How can a Vagrant configuration contain multiple guest systems? (Choose TWO correct answers.)

A. The Vagrant project directory has to contain multiple configuration files, each ending in the name of the specific guest system.
B. config.vm. define can be used to define multiple guest systems and provide specific configuration options.
C. config.vm.count can be set to a value higher than one to create multiple instances of the same box.
D. All guest systems in the Vagrant project must use boxes which explicitly support multi guest system setup.
E. The content of config. vm is merged with the specific configuration options of each guest system.

38. How can Vagrant be used in conjunction with Packer?
A. Vagrant boxes are shipped as Packer templates which are built during the start of a guest system.
B. Vagrant uses Packer as an abstraction layer to interact with hypervisors.
C. Packer is the default hypervisor Vagrant uses to run guest systems.
D. Packer can prepare and package Vagrant boxes which serve as templates for new guest systems.
E. Vagrant can run Packer within a guest system to perform configuration tasks.


39. When is cloud-init run? 
A. After cloning an existing laaS instance and before the clone is launched.
B. At any time when the cloud platform requests a cloud-init run.
C. Within an instance during each start of the respective instance.
D. After creating a new laaS instance and right before the first start of the new
instance.
E. Within the laaS instance right before shutting down that instance.

40. Which cloud-init modules have to be used in order to partition a persistent volume, create file systems on the partitions and mount the file systems? (Choose THREE correct answers.)

A. mounts
B. directories
C. disk_setup
D. volume_setup
E. fs_setup

41.If a Packer template contains multiple builders and multiple provisioners, which of the following statements is true?

A. The described template is invalid because Packer templates can either contain provisioners or builders but not both.
B. The provisioners are run only on the first builder; afterwards their results are copied to the remaining builders.
C. The provisioners are run once in a temporary image; afterwards their results are copied to all builders and the temporary image is discarded.
D. Each builder runs an instance of the target image in which, by default, all provisioners are run.
E. The provisioners are run once on the Packer host; afterwards their results are copied to all builders.

42. A Packer template contains the following excerpt:
"variables": {
"cloud_access_key": "1a2b3c"
}
How can the variable cloud_access_key be used within the template?
A. "access_key": cloud_access_key@uservars
B. "access_key": "${env `cloud_access_key` }"
C. "access_key": "{{user cloud_access_key"}}"
D. "access_key": user [cloud_access_key]
E. "access_key": "$cloud_access_key"

43. Which of the following statements are true when using Ansible for configuration management of Linux systems? (Choose TWO correct answers.)

A. A master server is required from which all systems are managed.
B. Changes in configuration files on the managed systems may be overwritten.
C. The Ansible agent software must be installed on the managed systems.
D. The Secure Shell (SSH) server must be running on the managed systems.
E. An X.509 client certificate must be issued for each managed system.


44. What is the default location of the Ansible inventory configuration file?

A. /etc/ansible/manifest
B. /etc/ansible/hosts
C. /etc/ansible/galaxy
D. /etc/ansible/inventory
E. /etc/hosts

45. Using the Ansible service module, which of the following tasks ensures that httpd is running and started on system boot?
A.
- service:
name: httpd 
target: state
persistent: yes
B.
- service:
name: httpd
state: started
enable: yes

C.
- service:
name: httpd
active: yes
onboot: yes
D.
- service:
name: httpd
state: started
boot_state: started
E
- service:
name: httpd
start: yes
autostart: yes

46. What command line option instructs ansible-playbook to switch to a privileged
user account before running tasks on a target system? (Specify ONLY the option name without any values or parameters.)
Answer: Write the answer on the answer sheet

47. Which Ansible keyword allows tasks to be run only under specific conditions?
A. case
B. condition
C. require
D. when
E. if

48. Which Ansible command is used to create and edit encrypted files which contain secrets used by Ansible when configuring remote systems? (Specify ONLY the command without any path or parameters.)
Answer: Write the answer on the answer sheet

49. Which of the following Ansible tasks have to be used to install a Debian package which requires answers to questions asked during the installation? (Choose TWO correct answers.)
A. debconf
B. dpkg
C. apt conf
D. apt
E. apt_set

50. Which of the following statements inserts the value of the Ansible variable server_name within a Jinja2 template?
A. $server_name
B. $(server_name}
C. $server_name$
D. {{ server_name}}
E. ANSIBLE('server_name'}

51. What is the Chef equivalent to an Ansible Playbook called?
A. Chef Catalog
B. Chef Manifest
C. Chef Factsheet
D. Chef Ingredient
E. Chef Recipe

52. Which puppet subcommand applies a manifest to the local computer without requiring a Puppet master? (Specify ONLY the subcommand without any path or parameters.)
Answer: Write the answer on the answer sheet

53. Which of the following kinds of metric types can Prometheus collect? (Choose THREE correct answers.)
A. State
B. Histogram
C. Counter
D. Dictionary
E. Summary


54.How should a Linux system be configured in order to allow Prometheus to monitor general properties of the system, such as memory consumption and system load?
55.
A. Install PushGateway on the respective node and configure it to gather and forward information using the operating system's tools.
B. Install Prometheus on the respective node and configure it to gather information directly using the operating system's tools.
C. Install Alert Manager on the respective node and configure it to inform Prometheus
about critical events.
D. Install node-exporter on the respective node which provides an endpoint
Prometheus can scrape.
E. Create a prometheus SSH account on the respective node which can be accessed using Prometheus' publicly known service key pair.

55. Which of the following actions are typical functionalities of an HTTP application layer gateway? (Choose THREE correct answers.)

A. Route requests to specific backends according to the request's URL.
B. Receive HTTPS connections and forward requests using HTTP.
C. Deliver static elements to clients without using a backend server.
D. Manage the creation and deletion of backend server virtual machines.
E. Add, remove or change HTTP headers of requests.


56. Which data contained in cloud instances should never be exposed to the public? (Choose TWO correct answers.)

A. Private SSL keys used for HTTPS.
B. Metrics about server load and memory consumption.
C. Public SSL keys used for HTTPS.
D. X.509 certificates used for HTTPS.
E. Configuration files for database access.


57. Which of the following statements are true about the Elastic Stack's components?
(Choose TWO correct answers.)

A. Logstash provides a web interface to analyze log data.
B. Logstash supports multiple protocols for log submission.
C. Kibana permanently stores processed log data.
D. Elasticsearch stores and indexes processed log data.
E. Kibana receives and processes raw log data.


58. Which section in the Logstash configuration defines what happens to a message after it is processed by all configured Logstash filters? (Specify ONLY the option name without any values or parameters.)
Answer: Write the answer on the answer sheet


59. How can a number greater than zero be described in the match pattern of the Logstash grok filter?

A. $<count>POSINT
B. %{POSINT:count}
C. $count
D. %i{count}
E. POSINT (count)

60.Which of the following statements are true regarding syslog? (Choose TWO correct answers.)

A. Syslog is a traditional service for logging on Unix systems.
B. Syslog by default encrypts all remote log message transfers using TLS.
C. Syslog is a Logstash specific network protocol to ship log data.
D. Syslog classifies log messages by fixed priorities and facilities.
E. Syslog is a local log storage service which has no networking functionality.