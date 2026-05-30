# CI/CD — Continuous Integration & Continuous Delivery
### A Complete Course

---

## Table of Contents

1. [Module 1 — CI/CD Core Concepts](#module-1--cicd-core-concepts)
2. [Module 2 — The CI/CD Pipeline in Detail](#module-2--the-cicd-pipeline-in-detail)
3. [Module 3 — GitOps](#module-3--gitops)
4. [Module 4 — Build Artifacts & Caches](#module-4--build-artifacts--caches)
5. [Module 5 — Deployment Best Practices & Strategies](#module-5--deployment-best-practices--strategies)
6. [Module 6 — Semantic Versioning & Release Strategies](#module-6--semantic-versioning--release-strategies)
7. [Module 7 — Tooling: Jenkins & GitLab CI](#module-7--tooling-jenkins--gitlab-ci)
8. [Module 8 — Artifact Registries: Artifactory & Nexus](#module-8--artifact-registries-artifactory--nexus)
9. [Quick-Reference Glossary](#quick-reference-glossary)

---

## Module 1 — CI/CD Core Concepts

### 1.1 What is Continuous Integration?

Continuous Integration (CI) is the practice of having every developer on a team merge their code changes into a shared repository frequently — ideally multiple times per day. Each merge triggers an automated process that builds the application and runs a suite of tests.

The core goals of CI are:

- Detect integration problems early, while the context is still fresh in a developer's mind.
- Prevent "integration hell" — the painful experience of trying to combine months of diverged work at the end of a project.
- Maintain a codebase that is always in a known, verifiable state.
- Provide fast feedback: a developer should know within minutes whether their change broke something.

The key discipline CI imposes on a team is: **never let the main branch stay broken**. If a build or test fails, fixing it becomes the team's top priority before anything else is merged.

### 1.2 What is Continuous Delivery?

Continuous Delivery (CD) extends CI by ensuring that, at all times, the software is in a releasable state. After each successful CI pipeline run, the application is automatically deployed to a staging environment and validated through further automated tests. The result is a deployment-ready artifact that can be released to production **at the push of a button**, on demand.

Key points:

- The decision to release to production is a business decision, not a technical one.
- The technical barrier to releasing is essentially zero.
- Teams practicing Continuous Delivery typically release more frequently, in smaller increments, with far lower risk per release.

### 1.3 What is Continuous Deployment?

Continuous Deployment takes the next step: **every change that passes the full automated test pipeline is automatically released to production** with no human intervention. There is no manual approval gate.

This requires a very high level of confidence in the automated test suite. It is common in mature, high-velocity web teams (e.g., Netflix, Amazon) where hundreds of deployments per day are routine.

| | Continuous Integration | Continuous Delivery | Continuous Deployment |
|---|---|---|---|
| Automated build & test | ✅ | ✅ | ✅ |
| Deploy to staging | Optional | ✅ | ✅ |
| Manual release gate | — | ✅ (optional) | ❌ (fully automated) |
| Auto-release to production | ❌ | ❌ | ✅ |

### 1.4 Why CI/CD Matters

Traditional "waterfall" or slow-release models accumulate large batches of changes over weeks or months. The larger the batch, the harder it is to isolate the cause of a failure, the more conflicts accumulate, and the riskier each release becomes.

CI/CD inverts this: it makes releases small, frequent, and safe. Benefits include:

- Faster time to market for new features.
- Reduced risk per release — smaller changes are easier to understand, test, and roll back.
- Higher developer productivity — less time spent on manual integration and debugging.
- Improved collaboration — the shared pipeline acts as a neutral arbiter of code quality.
- Greater confidence — automated tests catch regressions that human review would miss.

---

## Module 2 — The CI/CD Pipeline in Detail

A CI/CD pipeline is a sequence of automated stages. Each stage must pass before the next one begins. A failure at any stage stops the pipeline and notifies the team immediately.

### 2.1 Source Code Stage

The pipeline is triggered when a developer pushes a commit or opens a pull/merge request. The pipeline system (Jenkins, GitLab CI, GitHub Actions, etc.) clones the repository at that exact commit SHA, ensuring full reproducibility.

Best practices at this stage:

- Protect the main branch: require CI to pass before any merge is allowed.
- Use short-lived feature branches. Long-running branches diverge and become painful to integrate.
- Tag each pipeline run with the commit SHA so every artifact can be traced back to its exact source.

### 2.2 Build Stage

The build stage compiles source code, downloads dependencies, and produces a binary or package — the **build artifact**. The artifact must be:

- **Reproducible**: the same source code always produces an equivalent artifact.
- **Immutable**: once created and tagged, an artifact is never modified.
- **Self-contained**: it includes everything needed to run, reducing environment-specific surprises.

Common build tools by ecosystem:

| Ecosystem | Build Tool |
|---|---|
| Java/JVM | Maven, Gradle |
| JavaScript/Node | npm, yarn, pnpm |
| Python | pip, Poetry, setuptools |
| Go | `go build` |
| C/C++ | Make, CMake, Bazel |
| Containers | Docker, Buildah |

Build caches (discussed in Module 4) dramatically speed up this stage by reusing previously compiled dependencies.

### 2.3 Unit Tests

Unit tests are the fastest and most numerous tests in the pipeline. A unit test:

- Tests a single function, method, or class in complete isolation.
- Has no external dependencies (no database, no network, no file system) — these are replaced by mocks or stubs.
- Runs in milliseconds.
- Provides the first line of defence against regressions.

A healthy project typically has hundreds or thousands of unit tests that run in under a minute. If unit tests are slow, something is wrong (they likely have hidden external dependencies).

Code coverage is often measured at this stage. While 100% coverage is not a meaningful goal in itself, coverage below ~70–80% is often a signal that important logic is untested.

### 2.4 Integration Tests

Integration tests verify that multiple components of the system work correctly together. Unlike unit tests, they do involve real infrastructure:

- A real database (often a containerized instance spun up for the test run).
- Real network calls between services.
- Real message queues or caches.

Integration tests are slower than unit tests — typically seconds to minutes — and there are usually fewer of them. They catch bugs that unit tests, by design, cannot: schema mismatches, incorrect SQL queries, serialization errors, network timeouts, and so on.

A common pattern is to use Docker Compose to spin up a temporary environment containing all dependent services for the duration of the integration test run.

### 2.5 Acceptance Tests (End-to-End Tests)

Acceptance tests (also called end-to-end or E2E tests) validate the system from the perspective of a real user or business stakeholder. They exercise the full stack: UI, API, backend services, and database.

Examples:

- A user can register, log in, and complete a purchase.
- A batch job processes a file and produces the correct output.
- An API returns the correct response for a given sequence of calls.

Acceptance tests are the slowest and most expensive to run and maintain. They are precious precisely because they verify that the system delivers real business value. Common frameworks include Selenium, Playwright, Cypress (for web UIs), and Cucumber/Behave (for behaviour-driven development, BDD).

### 2.6 Static Analysis & Security Scanning

Many pipelines include additional quality gates:

- **Linting**: enforce code style and catch common mistakes (ESLint, Pylint, Checkstyle).
- **Static Application Security Testing (SAST)**: analyse source code for known vulnerability patterns without running it (SonarQube, Semgrep, Checkmarx).
- **Dependency scanning**: check third-party libraries for known CVEs (Snyk, Dependabot, OWASP Dependency-Check).
- **Container image scanning**: analyse Docker images for OS-level and library vulnerabilities (Trivy, Clair, Anchore).

### 2.7 Artifact Publication

Once all tests and quality gates pass, the pipeline publishes the build artifact to an artifact registry (Artifactory, Nexus, a container registry, etc.) with a unique, immutable version tag.

From this point forward, the **same artifact** travels through all downstream environments. It is never rebuilt. Configuration (environment variables, secrets, feature flags) is injected at deployment time, not baked into the artifact.

### 2.8 Deployment Stage

The final stage deploys the versioned artifact to one or more environments. Deployment strategies (blue-green, canary, rolling) are covered in detail in Module 5.

A good deployment pipeline:

- Is fully automated — no manual SSH into servers.
- Is idempotent — running it twice produces the same result.
- Includes automated smoke tests or health checks that run immediately after deployment.
- Has a documented, tested rollback procedure.

### 2.9 The Testing Pyramid

The relative proportion of each test type is often visualised as a pyramid:

```
        /\
       /  \  Acceptance (E2E)
      /----\   — few, slow, expensive
     /      \
    /        \ Integration
   /----------\  — moderate number, moderate speed
  /            \
 /              \ Unit
/----------------\  — many, fast, cheap
```

More tests at the bottom (unit) and fewer at the top (acceptance) keeps the pipeline fast and the feedback loop tight.

---

## Module 3 — GitOps

### 3.1 The GitOps Model

GitOps is an operational model in which **Git is the single source of truth for both application code and infrastructure configuration**. Every change to the system — whether a code change, a configuration update, or an infrastructure modification — flows through a Git pull request.

The four core GitOps principles are:

1. **Declarative**: the entire desired state of the system is expressed declaratively (e.g., Kubernetes YAML manifests, Terraform configuration). You describe *what* you want, not *how* to achieve it.
2. **Versioned and immutable**: Git provides a complete, auditable history of every state the system has ever been in. Any version can be restored.
3. **Pulled automatically**: approved changes are automatically applied to the system by a software agent (operator), not pushed by a human running commands.
4. **Continuously reconciled**: a software agent continuously compares the desired state (in Git) with the actual state (the live system) and corrects any divergence.

### 3.2 Reconciliation Loops

The reconciliation loop is the engine of GitOps. A controller (e.g., Flux, ArgoCD) runs continuously and performs the following cycle:

1. **Observe**: read the current actual state of the system (e.g., which container image is running in Kubernetes).
2. **Diff**: compare the actual state against the desired state declared in Git.
3. **Act**: if there is a divergence, apply changes to bring the actual state in line with the desired state.
4. **Repeat**: wait a short interval, then repeat from step 1.

This means the system is **self-healing**. If someone manually modifies a running container or deletes a resource, the reconciliation loop will detect the drift and automatically restore the declared state. This eliminates "configuration drift" — the gradual divergence between what is documented and what is actually running.

### 3.3 Push-based vs Pull-based Deployments

Traditional CI/CD pipelines use a **push model**: the pipeline directly deploys to the target environment (e.g., by running `kubectl apply` or `ansible-playbook`). This requires the pipeline to have credentials with write access to production.

GitOps uses a **pull model**: an agent running *inside* the target environment watches the Git repository and pulls changes when it detects them. This has significant security advantages — no external system ever needs credentials to reach into production.

| | Push-based | Pull-based (GitOps) |
|---|---|---|
| Credentials | Pipeline has production access | Agent inside cluster has access |
| Drift detection | None | Continuous |
| Audit trail | CI logs | Git history |
| Rollback | Re-run old pipeline | `git revert` + auto-reconcile |

### 3.4 GitOps Tooling

- **ArgoCD**: a declarative GitOps controller for Kubernetes. Provides a web UI showing the diff between desired and actual state.
- **Flux**: a CNCF project, lightweight GitOps toolkit for Kubernetes. Strongly follows the pull model.
- **Terraform + Atlantis**: GitOps for infrastructure provisioning (not just Kubernetes).

### 3.5 GitOps vs Traditional CI/CD

GitOps and CI/CD are complementary, not competing. A typical modern setup:

- The CI pipeline builds, tests, and publishes an artifact (e.g., a Docker image tagged with the Git commit SHA).
- The CI pipeline opens a pull request against the **GitOps repository** (also called the "config repo" or "environment repo") to update the image tag in the Kubernetes manifest.
- A human (or automation) approves the PR and merges it.
- The GitOps controller detects the change in the config repo and reconciles the cluster to run the new image.

The config repo contains only configuration — no application source code. This separation means you can audit exactly what is running in each environment by looking at the relevant branch of the config repo.

---

## Module 4 — Build Artifacts & Caches

### 4.1 What is a Build Artifact?

A build artifact is the **immutable, versioned output** of a successful build process. It is the thing that gets deployed — not the source code. Examples:

- A Docker container image.
- A JAR or WAR file (Java).
- A compiled binary (Go, Rust, C).
- A tarball or zip of built frontend assets.
- An npm package, Python wheel, or Debian/RPM package.

The key principle: **build once, deploy many times**. The same artifact is promoted from development to staging to production. It is never rebuilt per environment. Only configuration changes between environments.

This principle guarantees that what was tested in staging is *exactly* what runs in production — byte for byte.

### 4.2 Artifact Versioning

Artifacts are versioned using semantic versioning (see Module 6) or, during development, using the Git commit SHA as a unique identifier. A Docker image, for example, might be tagged as:

```
myapp:2.4.1              # Stable release
myapp:2.4.1-rc.1         # Release candidate
myapp:sha-a3f8c2d        # Development build, traced to exact commit
```

Using commit SHAs as tags during development enables complete traceability: given any running instance, you can look up exactly which commit it was built from.

### 4.3 Artifact Promotion

Artifact promotion is the process of moving a tested artifact through environments as it gains confidence:

```
Build → Publish to dev registry → Deploy to dev
         ↓
     Promote to staging registry → Deploy to staging → Run acceptance tests
         ↓
     Promote to production registry → Deploy to production
```

Each promotion step may involve copying the artifact from one repository to another (e.g., from a "dev" repository to a "release" repository in Artifactory or Nexus), applying an additional version tag, or simply approving a metadata record.

### 4.4 Build Caches

Build caches store the outputs of intermediate build steps so they do not have to be repeated when the inputs have not changed. They dramatically reduce pipeline duration.

Examples of what is cached:

- Downloaded dependency packages (npm's `node_modules`, Maven's `.m2`, pip's package cache).
- Compiled intermediate objects.
- Docker image layers (layers that have not changed since the last build are reused).

Cache invalidation strategy is critical. The cache key must be derived from the inputs that, when changed, should invalidate the cache. The most reliable approach is to use the hash of the dependency lock file:

```
Cache key = hash(package-lock.json)   # npm
Cache key = hash(Gemfile.lock)         # Ruby
Cache key = hash(requirements.txt)     # Python (approximate)
Cache key = hash(go.sum)               # Go
```

Do **not** use branch names as cache keys in production pipelines — different branches may have the same dependencies but different code, leading to false cache hits or misses.

### 4.5 Immutability of Artifacts

A published artifact at a given version must never be modified. If a bug is found, a new version is built and published. The old version remains in the registry unchanged.

This guarantees:

- Any environment can be restored to an exact previous state by deploying the old artifact.
- Investigations of past incidents can reproduce the exact binary that was running.
- The build process is the only way to create a new version — no manual patching of production binaries.

Artifact registries like Artifactory and Nexus enforce this by supporting "immutable" or "release" repositories where re-uploading an existing version is forbidden.

---

## Module 5 — Deployment Best Practices & Strategies

### 5.1 The Three Environments

Most organisations maintain at least three environments through which software is promoted:

**Development (Dev)**
The first environment after a developer's local machine. It receives frequent, potentially unstable deployments. Used for integration testing, early QA, and demonstrating work in progress. Multiple feature branches may deploy to isolated dev environments simultaneously. Resources are typically smaller and cheaper than production.

**Staging (Pre-production)**
A production mirror. Its purpose is to be as identical to production as possible — same infrastructure size, same network topology, same data (anonymised), same configuration. Acceptance tests, performance tests, and security reviews run here. A change must pass staging before it can go to production. The closer staging mirrors production, the more valuable it is.

**Production**
The live environment serving real users. Changes to production are tightly controlled. All deployments to production should be automated (no manual SSH), monitored, and immediately validated by automated health checks.

Additional environments exist in some organisations: a "QA" environment for manual exploratory testing, a "performance" environment for load testing, a "sandbox" environment for experimentation.

### 5.2 General Deployment Best Practices

- **Automate everything**: manual deployments are slow, error-prone, and impossible to audit. Every deployment step should be scripted and executed by the pipeline.
- **Make deployments idempotent**: running a deployment twice should produce the same result. This allows safe retries.
- **Health checks**: after every deployment, the pipeline should verify that the new version is healthy before considering the deployment complete. Unhealthy deployments should trigger an automatic rollback.
- **Feature toggles**: separate deployment from release. Ship code to production with new features disabled. Enable them when ready (see Section 5.5).
- **Infrastructure as Code (IaC)**: define all infrastructure in code (Terraform, CloudFormation, Pulumi) so environments are reproducible and drift-free.
- **Secrets management**: never bake secrets into artifacts or store them in Git. Use a dedicated secrets manager (HashiCorp Vault, AWS Secrets Manager, Kubernetes Secrets).
- **Rollback plan**: every deployment must have a tested rollback procedure. The rollback should be as automated as possible.
- **Small, frequent releases**: smaller releases are easier to test, reason about, and roll back. Avoid large, infrequent releases.

### 5.3 Blue-Green Deployment

Blue-green deployment maintains two identical production environments: Blue (currently serving all traffic) and Green (the new version, being prepared). The process:

1. Deploy the new version to the Green environment.
2. Run automated smoke tests against Green to verify it is healthy.
3. Shift all production traffic from Blue to Green by updating the load balancer or DNS entry. The switch is near-instantaneous.
4. Monitor Green. If any issues are detected, flip the traffic back to Blue immediately.
5. Once confident, decommission or repurpose Blue for the next release.

Advantages:

- Zero-downtime deployments.
- Instant, tested rollback — just flip traffic back.
- The old version remains fully running and validated until you are confident in the new one.

Disadvantages:

- Requires double the infrastructure (two full production environments) during the switchover window.
- Database schema migrations must be backward-compatible: during the switchover, both Blue and Green may be writing to the same database.

Blue-green is well-suited to stateless applications and situations where instant rollback is critical.

### 5.4 Canary Deployment

Canary deployment routes a small percentage of real production traffic to the new version, while the remaining majority continues to use the stable version.

The process:

1. Deploy the new version alongside the current version.
2. Route a small slice of traffic to the new version — typically 1–5% to start.
3. Monitor key metrics on both versions: error rate, latency, business-level metrics (conversion rate, transaction success).
4. If the canary is healthy, gradually increase traffic: 5% → 25% → 50% → 100%.
5. If the canary shows problems at any point, route all traffic back to the stable version.

Advantages:

- Real user traffic validates the new version before it reaches everyone.
- Blast radius of a bad deployment is limited to the canary percentage.
- Graceful, progressive rollout.

Disadvantages:

- Requires sophisticated traffic-splitting infrastructure (a service mesh, an advanced load balancer, or feature-flag system).
- Requires a mature observability stack to detect problems in the canary slice.
- Two versions run simultaneously, which can complicate database schema migrations and stateful operations.

### 5.5 Feature Toggles (Feature Flags)

A feature toggle (also called a feature flag or feature switch) is a conditional in code that enables or disables a feature at runtime without deploying new code.

```python
if feature_flags.is_enabled("new_checkout_flow", user=current_user):
    return render_new_checkout()
else:
    return render_classic_checkout()
```

Feature toggles decouple **deployment** from **release**. Code is merged and deployed continuously; features are released independently, on demand, to specific audiences.

Types of feature toggles:

| Type | Purpose | Lifetime |
|---|---|---|
| Release toggle | Roll out a new feature gradually | Days to weeks — remove after full rollout |
| Operations (ops) toggle | Kill switch for risky functionality | Indefinite — runtime safety net |
| Experiment toggle | A/B test or multivariate experiment | Duration of the experiment |
| Permission toggle | Enable premium features for specific users | Long-lived |

Toggle debt is a real risk. Old, unused toggles accumulate in the codebase, increasing complexity. Every toggle should have a defined owner and expiry policy.

### 5.6 A/B Testing

A/B testing (also called split testing) is an experimentation technique that exposes different user cohorts to different variants of a feature, then measures which variant produces better business outcomes (click-through rate, conversion rate, time on page, etc.).

A/B testing shares infrastructure with canary deployments (traffic splitting) but has a fundamentally different purpose:

- **Canary deployment**: "Is the new version *safe*?" — a risk-reduction technique with a short lifetime.
- **A/B test**: "Which variant produces *better outcomes*?" — a product decision technique that may run for days or weeks to reach statistical significance.

A/B tests require:

- A hypothesis and a primary metric to measure.
- A minimum sample size to achieve statistical power.
- A mechanism to consistently assign users to the same variant across sessions.
- Analysis to determine if results are statistically significant before making a decision.

### 5.7 Rolling Deployment

A rolling deployment gradually replaces instances of the old version with instances of the new version, one or a few at a time. At any point during the rollout, some instances run the old version and some run the new version.

It is simpler than blue-green (no duplicate infrastructure) and more gradual than a big-bang replacement. The main risk, like canary, is that two versions run simultaneously — requiring backward-compatible APIs and database schemas.

---

## Module 6 — Semantic Versioning & Release Strategies

### 6.1 Semantic Versioning (SemVer)

Semantic Versioning is a versioning scheme defined at [semver.org](https://semver.org) that gives structured meaning to version numbers. The format is:

```
MAJOR.MINOR.PATCH
```

- **MAJOR**: incremented when you make incompatible (breaking) changes to the public API. Consumers of your library or service must update their code to handle the breaking change.
- **MINOR**: incremented when you add functionality in a backward-compatible manner. Existing consumers continue to work without modification.
- **PATCH**: incremented when you make backward-compatible bug fixes. No new features, no breaking changes.

Examples:

| Change | Version bump |
|---|---|
| Fix a null pointer exception | `1.4.2` → `1.4.3` |
| Add a new optional API endpoint | `1.4.3` → `1.5.0` |
| Remove a previously public API endpoint | `1.5.0` → `2.0.0` |
| Rename a required request parameter | `1.5.0` → `2.0.0` |

### 6.2 Pre-release Labels

SemVer allows pre-release versions using a hyphen suffix:

```
1.0.0-alpha         # Early prototype, unstable API
1.0.0-alpha.2       # Second alpha iteration
1.0.0-beta          # Feature-complete but may have bugs
1.0.0-beta.3        # Third beta iteration
1.0.0-rc.1          # Release candidate — considered stable unless a blocking bug is found
1.0.0               # Stable release
```

Pre-release versions have lower precedence than the associated stable version:
`1.0.0-alpha` < `1.0.0-beta` < `1.0.0-rc.1` < `1.0.0`

### 6.3 The `0.x.y` Convention

A MAJOR version of zero (`0.x.y`) signals that the software is in initial development. The public API is not yet stable. Breaking changes may happen at any MINOR increment. Once the API is considered stable and ready for production, the first stable release is `1.0.0`.

### 6.4 Build Metadata

Build metadata can be appended after a plus sign and is ignored for version precedence:

```
1.0.0+20240115.1     # Build metadata: build date and sequence number
1.0.0+sha.a3f8c2d    # Build metadata: Git commit SHA
```

Build metadata is useful for traceability but does not affect which version is "newer."

### 6.5 Preview Releases

A preview release is a versioned artifact released publicly for early feedback before the stable release. In SemVer terms, this corresponds to alpha, beta, or release candidate pre-releases. Purposes:

- Allow early adopters and partners to test against the upcoming API.
- Gather feedback before the API is stabilised in the stable release.
- Run integration tests in real-world environments before committing to stability guarantees.

Preview releases should be clearly labelled and documented as not suitable for production use.

### 6.6 Conventional Commits

Many teams use the Conventional Commits specification to make version bumps automatic. Each commit message follows a structured format:

```
feat: add user authentication endpoint
fix: resolve race condition in payment processor
feat!: redesign configuration file format (BREAKING CHANGE)
```

- `fix:` → PATCH bump
- `feat:` → MINOR bump
- Any commit with `!` or a footer containing `BREAKING CHANGE:` → MAJOR bump

Tools like `semantic-release` parse the commit history and automatically compute the next version, generate a changelog, create a Git tag, and publish the artifact.

---

## Module 7 — Tooling: Jenkins & GitLab CI

### 7.1 Jenkins

Jenkins is the most widely deployed open-source CI/CD automation server. It has been in active development since 2011 (forked from Hudson) and has an ecosystem of over 1,800 plugins that extend its capabilities to virtually any build tool, SCM, or deployment target.

Key characteristics:

- Self-hosted: you install and manage Jenkins on your own infrastructure.
- Highly flexible: almost anything can be automated with the right plugin or custom script.
- Large community and extensive documentation.
- Requires ongoing maintenance: plugin updates, security patches, agent management, and backup.

#### 7.1.1 Declarative Pipeline

The modern, recommended way to define Jenkins pipelines is the **Declarative Pipeline** syntax, stored in a file named `Jenkinsfile` at the root of the repository. This is pipeline-as-code: the pipeline definition is version-controlled alongside the application.

A Declarative Pipeline has a fixed, validated structure:

```groovy
pipeline {
    agent any           // Run on any available agent

    environment {
        APP_NAME = 'myapp'
        REGISTRY = 'registry.example.com'
    }

    stages {
        stage('Build') {
            steps {
                sh 'mvn clean package -DskipTests'
                archiveArtifacts artifacts: 'target/*.jar'
            }
        }

        stage('Unit Tests') {
            steps {
                sh 'mvn test'
            }
            post {
                always {
                    junit 'target/surefire-reports/*.xml'
                }
            }
        }

        stage('Integration Tests') {
            steps {
                sh 'docker-compose up -d db'
                sh 'mvn verify -Pintegration-tests'
                sh 'docker-compose down'
            }
        }

        stage('Build & Push Docker Image') {
            steps {
                script {
                    def image = docker.build("${REGISTRY}/${APP_NAME}:${env.BUILD_NUMBER}")
                    docker.withRegistry("https://${REGISTRY}", 'registry-credentials') {
                        image.push()
                        image.push('latest')
                    }
                }
            }
        }

        stage('Deploy to Staging') {
            steps {
                sh "./deploy.sh staging ${env.BUILD_NUMBER}"
            }
        }
    }

    post {
        failure {
            mail to: 'team@example.com',
                 subject: "Pipeline failed: ${env.JOB_NAME}",
                 body: "Build ${env.BUILD_NUMBER} failed. Check ${env.BUILD_URL}"
        }
        success {
            echo 'Pipeline completed successfully.'
        }
    }
}
```

Key blocks in a Declarative Pipeline:

| Block | Purpose |
|---|---|
| `pipeline { }` | Root block — required |
| `agent` | Specifies where the pipeline runs (any, specific label, Docker image) |
| `environment { }` | Declares environment variables available to all stages |
| `stages { }` | Contains all stage definitions |
| `stage('Name') { }` | A named pipeline step |
| `steps { }` | The commands executed within a stage |
| `post { }` | Actions taken after the pipeline or a stage completes (always, success, failure, unstable) |

#### 7.1.2 Jenkins Agents

Jenkins uses a controller–agent architecture. The controller (master) schedules builds and manages state. Agents (workers) execute the actual pipeline steps. Agents can be:

- Persistent: a long-running server or VM that agents connect to.
- Ephemeral: a Docker container or Kubernetes pod that is created for a build and destroyed afterward. This is the modern, preferred approach.

#### 7.1.3 Jenkins Shared Libraries

For large organisations with many pipelines, Shared Libraries allow common pipeline logic (utility functions, standard stages, notification helpers) to be extracted into a shared repository and imported into any Jenkinsfile:

```groovy
@Library('my-shared-library') _

pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                buildAndPush(imageName: 'myapp')  // Function from shared library
            }
        }
    }
}
```

### 7.2 GitLab CI/CD

GitLab CI/CD is built into the GitLab platform — no separate server is required. The pipeline is defined in a file named `.gitlab-ci.yml` at the root of the repository. When a commit is pushed, GitLab reads this file and executes the defined pipeline on GitLab Runners.

Key characteristics:

- Fully integrated with GitLab's source code management, merge requests, container registry, and environments.
- Auto DevOps: an opinionated, pre-built pipeline for common project types (detect language, run tests, build Docker image, deploy to Kubernetes).
- Native support for environments, deployment tracking, and review apps (ephemeral environments created per merge request).

#### 7.2.1 The `.gitlab-ci.yml` Structure

```yaml
# Define pipeline stages in order
stages:
  - build
  - test
  - security
  - publish
  - deploy

# Default settings applied to all jobs
default:
  image: maven:3.9-eclipse-temurin-21
  cache:
    key: ${CI_COMMIT_REF_SLUG}
    paths:
      - .m2/repository/

variables:
  MAVEN_OPTS: "-Dmaven.repo.local=.m2/repository"
  IMAGE_TAG: $CI_REGISTRY_IMAGE:$CI_COMMIT_SHORT_SHA

# ─── Build stage ───────────────────────────────────────────────

build:
  stage: build
  script:
    - mvn clean package -DskipTests
  artifacts:
    paths:
      - target/*.jar
    expire_in: 1 day

# ─── Test stage ────────────────────────────────────────────────

unit-tests:
  stage: test
  script:
    - mvn test
  artifacts:
    reports:
      junit: target/surefire-reports/TEST-*.xml

integration-tests:
  stage: test
  services:
    - postgres:15
  variables:
    POSTGRES_DB: testdb
    POSTGRES_USER: test
    POSTGRES_PASSWORD: test
  script:
    - mvn verify -Pintegration-tests

# ─── Security stage ────────────────────────────────────────────

sast:
  stage: security
  include:
    - template: Security/SAST.gitlab-ci.yml

# ─── Publish stage ─────────────────────────────────────────────

build-image:
  stage: publish
  image: docker:24
  services:
    - docker:24-dind
  script:
    - docker login -u $CI_REGISTRY_USER -p $CI_REGISTRY_PASSWORD $CI_REGISTRY
    - docker build -t $IMAGE_TAG .
    - docker push $IMAGE_TAG
  only:
    - main

# ─── Deploy stage ──────────────────────────────────────────────

deploy-staging:
  stage: deploy
  script:
    - ./deploy.sh staging $CI_COMMIT_SHORT_SHA
  environment:
    name: staging
    url: https://staging.example.com
  only:
    - main

deploy-production:
  stage: deploy
  script:
    - ./deploy.sh production $CI_COMMIT_SHORT_SHA
  environment:
    name: production
    url: https://example.com
  when: manual       # Requires a human to click "Deploy" in the GitLab UI
  only:
    - main
```

#### 7.2.2 Key GitLab CI Concepts

**Runners**: The agents that execute jobs. GitLab provides shared runners (SaaS plans) or you can register your own (self-managed or dedicated). Runners can execute jobs in a shell, Docker container, Kubernetes pod, or virtual machine.

**Jobs and stages**: Jobs are the atomic unit of work. Jobs in the same stage run in parallel. Stages run sequentially.

**Artifacts**: Files produced by one job that can be passed to later jobs. Artifacts are uploaded to GitLab and downloaded by the jobs that need them.

**Caches**: Files shared between pipeline runs of the same job, on the same runner. Unlike artifacts, caches are not guaranteed and are a performance optimisation.

**Services**: Auxiliary Docker containers that run alongside a job (e.g., a database for integration tests).

**Environments**: Named deployment targets (staging, production) that GitLab tracks. Provides a deployment history, rollback button, and link to the live URL.

**`when` keyword**: Controls when a job runs:
- `on_success` (default): run only if all previous jobs succeeded.
- `always`: run regardless.
- `manual`: require a human to trigger the job in the UI.
- `on_failure`: run only if a previous job failed.

**`only` / `except` / `rules`**: Control which branches, tags, or conditions trigger a job.

### 7.3 Jenkins vs GitLab CI — Comparison

| Aspect | Jenkins | GitLab CI |
|---|---|---|
| Hosting | Self-hosted | GitLab SaaS or self-hosted |
| Pipeline definition | `Jenkinsfile` (Groovy DSL) | `.gitlab-ci.yml` (YAML) |
| Plugin ecosystem | 1,800+ plugins | Fewer plugins; more built-in |
| Learning curve | Steeper | Gentler |
| SCM integration | Via plugins (GitHub, Bitbucket, etc.) | Native (GitLab only) |
| Container registry | Via plugins | Built-in |
| Environments & rollbacks | Via plugins | Built-in |
| Maintenance overhead | High (updates, plugins, agents) | Low (managed by GitLab) |
| Best for | Complex, heterogeneous toolchains | Teams already on GitLab |

---

## Module 8 — Artifact Registries: Artifactory & Nexus

### 8.1 Why an Artifact Registry?

An artifact registry is a dedicated, centralised repository for storing, versioning, and distributing build artifacts and their dependencies. Without a registry, teams face problems such as:

- Dependencies downloaded directly from the public internet on every build — slow, fragile, and a security risk.
- No central storage for internal build artifacts.
- No enforcement of immutability — a developer could overwrite a published version.
- No visibility into what dependencies are used across the organisation.

An artifact registry solves all of these by acting as both a **proxy** (caching public upstream repositories) and a **host** (storing private internal artifacts).

### 8.2 JFrog Artifactory

Artifactory is a **universal artifact repository manager** developed by JFrog. It supports virtually every package format:

- Java: Maven, Gradle, Ivy
- JavaScript: npm, yarn
- Python: PyPI
- Container images: Docker, Helm charts (OCI)
- OS packages: Debian, RPM
- Go modules
- Generic files (any binary)

Key features:

**Repository types**: Artifactory organises artifacts into three types of repositories:
- *Local*: where your private artifacts are stored.
- *Remote*: a proxy to an external registry (Maven Central, Docker Hub, npm registry). Packages are cached locally after the first download.
- *Virtual*: aggregates local and remote repositories into a single URL. Clients point to the virtual repository and Artifactory resolves requests transparently.

**Build info**: Artifactory stores rich metadata about each build — which commit triggered it, which dependencies were resolved, the test results, and the environment. This enables full traceability from a running artifact back to its source commit.

**Artifact promotion**: Artifacts can be promoted from one repository to another (e.g., from `libs-snapshot-local` to `libs-release-local`) as they pass quality gates. Promotion updates metadata without copying the binary.

**JFrog Xray**: An optional add-on that performs deep recursive scanning of artifacts for security vulnerabilities (CVEs) and licence compliance. Policies can block promotion of artifacts with critical CVEs.

**Artifactory repositories by maturity**:

```
libs-snapshot-local    ← Development builds (SNAPSHOT versions)
libs-staging-local     ← Release candidates (tested, not yet approved)
libs-release-local     ← Approved stable releases
```

### 8.3 Sonatype Nexus Repository

Nexus Repository Manager (now called Nexus Repository by Sonatype) is the other major artifact registry. It has been widely adopted in Java/JVM ecosystems and is available in a free open-source edition (Nexus Repository OSS) and a commercial edition (Nexus Repository Pro).

Supported formats include Maven, npm, Docker, PyPI, NuGet, Yum, Apt, Helm, and more.

Repository types follow the same pattern as Artifactory:
- *Hosted*: stores your private artifacts.
- *Proxy*: caches an external registry.
- *Group*: aggregates hosted and proxy repositories into a single URL.

**Nexus Repository OSS** is a popular choice for organisations that want a self-hosted registry without licence cost. The Pro edition adds high availability, staging workflows, and advanced reporting.

**Sonatype Nexus Lifecycle** (separate product): dependency scanning and policy enforcement integrated into the development lifecycle, similar to JFrog Xray.

### 8.4 Artifactory vs Nexus — Comparison

| Aspect | JFrog Artifactory | Sonatype Nexus |
|---|---|---|
| Format support | Universal (widest support) | Broad (most common formats) |
| Free tier | Artifactory OSS (Maven, Gradle, Docker only) | Nexus Repository OSS (most formats) |
| Ecosystem strength | Strong across all ecosystems | Particularly strong in Java/JVM |
| Security scanning | JFrog Xray (paid add-on) | Nexus Lifecycle (separate product) |
| Build info / traceability | Rich built-in build info | More limited in OSS |
| Cloud SaaS | JFrog Platform (Cloud) | Available |
| UI | Modern, feature-rich | Functional, less polished in OSS |
| Integration with CI tools | Native Jenkins, GitLab, GitHub Actions plugins | Native plugins available |

### 8.5 Using a Registry in a CI Pipeline

In a typical CI/CD pipeline:

1. The **build stage** downloads dependencies from the registry (which proxies public registries and caches results). This makes the build independent of public internet availability.
2. The **publish stage** uploads the built artifact to the registry with a unique version tag.
3. The **deploy stage** pulls the artifact from the registry to the target environment. The registry serves as the single distribution point.

```yaml
# Example: GitLab CI using Artifactory as both proxy and host

variables:
  ARTIFACTORY_URL: https://artifactory.example.com/artifactory
  MAVEN_REPO_URL: ${ARTIFACTORY_URL}/libs-virtual   # Virtual repo (proxy + local)

build:
  stage: build
  script:
    # Maven resolves dependencies via Artifactory (cached from Maven Central)
    - mvn clean package -s settings.xml -DskipTests
  artifacts:
    paths:
      - target/*.jar

publish:
  stage: publish
  script:
    # Deploy the built artifact to Artifactory
    - mvn deploy -s settings.xml -DskipTests
  only:
    - main
```

---

## Quick-Reference Glossary

| Term | Definition |
|---|---|
| **A/B testing** | Exposing different user cohorts to different feature variants and measuring outcomes to make product decisions. |
| **Acceptance test** | End-to-end test that validates the system from a user or business perspective. |
| **Artifact** | The immutable, versioned output of a build process (JAR, Docker image, binary, package). |
| **Artifact registry** | A system for storing, versioning, and distributing build artifacts (Artifactory, Nexus). |
| **Blue-green deployment** | Running two identical production environments and switching traffic between them for zero-downtime releases. |
| **Build cache** | Stored intermediate build outputs reused across pipeline runs to reduce build time. |
| **Canary deployment** | Routing a small percentage of traffic to a new version and gradually increasing it if metrics are healthy. |
| **CI (Continuous Integration)** | Automatically building and testing code on every commit to a shared repository. |
| **CD (Continuous Delivery)** | Ensuring the codebase is always in a releasable state; deployment to production requires a manual trigger. |
| **Continuous Deployment** | Automatically releasing every passing build to production with no human gate. |
| **Declarative Pipeline** | A structured Jenkins pipeline syntax defined in a `Jenkinsfile` using the `pipeline { }` block. |
| **Feature toggle** | A conditional in code that enables or disables a feature at runtime without deploying new code. |
| **GitOps** | An operational model where Git is the single source of truth for both code and infrastructure, with automated reconciliation. |
| **Integration test** | A test that verifies multiple components working together (with real infrastructure dependencies). |
| **Preview release** | A pre-release version (alpha, beta, RC) published for early feedback before a stable release. |
| **Promotion** | Moving an artifact from one environment/repository to the next as it passes quality gates. |
| **Reconciliation loop** | A GitOps controller cycle that continuously compares desired state (Git) with actual state (live system) and corrects divergence. |
| **Rolling deployment** | Gradually replacing instances of the old version with the new version, one batch at a time. |
| **Semantic Versioning** | A versioning scheme (`MAJOR.MINOR.PATCH`) where each component carries defined meaning about compatibility. |
| **Staging environment** | A production-mirror environment used for final validation before releases reach real users. |
| **Unit test** | A fast, isolated test of a single function or class with no external dependencies. |

---

*End of course.*