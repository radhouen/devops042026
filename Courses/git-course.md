## Git Introduction

Git is a **distributed version control system (DVCS)** used to track changes in source code and collaborate with teams. It is fast, flexible, and widely used in DevOps and software development.

---

# 1. Git vs SVN

| Feature       | Git                                | SVN (Subversion)           |
| ------------- | ---------------------------------- | -------------------------- |
| Architecture  | Distributed                        | Centralized                |
| Repository    | Each developer has full local repo | Single central repo        |
| Speed         | Faster (local operations)          | Slower (network dependent) |
| Branching     | Lightweight and easy               | Heavy and slower           |
| Offline Work  | Yes                                | Limited                    |
| Merge Support | Strong                             | Basic                      |
| Popularity    | Very high                          | Legacy systems             |

### Example:

* **Git**: Every developer has complete project history locally.
* **SVN**: Developers depend on central server.

### Why Git Wins:

* Better branching strategy
* Faster commits/log/history
* Safer collaboration
* Ideal for DevOps / CI-CD

---

# 2. Git Configuration

Git stores username/email for commits.

## Set Global Config

```bash
git config --global user.name "Your Name"
git config --global user.email "you@email.com"
```

## Check Config

```bash
git config --list
```

## Set Default Editor

```bash
git config --global core.editor "vim"
```

## Local Repo Config

```bash
git config user.name "ProjectUser"
```

(Only for current repository)

---

# 3. Basic Git Commands

## Initialize Repo

```bash
git init
```

## Clone Existing Repo

```bash
git clone <repo-url>
```

## Check Status

```bash
git status
```

## Add Files

```bash
git add file.txt
git add .
```

## Commit Changes

```bash
git commit -m "Initial commit"
```

## View History

```bash
git log
git log --oneline
```

## Push Changes

```bash
git push origin main
```

## Pull Changes

```bash
git pull origin main
```

---

# 4. Git Branch Commands

## Create Branch

```bash
git branch feature-login
```

## Switch Branch

```bash
git checkout feature-login
```

or modern command:

```bash
git switch feature-login
```

## Create + Switch

```bash
git checkout -b feature-login
```

or:

```bash
git switch -c feature-login
```

## List Branches

```bash
git branch
```

## Delete Branch

```bash
git branch -d feature-login
```

Force delete:

```bash
git branch -D feature-login
```

---

# 5. Git Revert vs Reset

## Git Revert

Creates a new commit that undoes previous commit.

```bash
git revert <commit-id>
```

### Use When:

* Commit already pushed
* Safe for shared branches

---

## Git Reset

Moves HEAD backward.

### Soft Reset

```bash
git reset --soft HEAD~1
```

(Remove commit, keep staged changes)

### Mixed Reset

```bash
git reset HEAD~1
```

(Remove commit, keep files)

### Hard Reset

```bash
git reset --hard HEAD~1
```

(Remove commit + delete changes)

### Use When:

* Local cleanup
* Before pushing

---

## Summary

| Command | Safe Shared Repo | Removes History |
| ------- | ---------------- | --------------- |
| revert  | Yes              | No              |
| reset   | No               | Yes             |

---

# 6. Merge vs Rebase vs Cherry-pick

---

## Git Merge

Combines two branches with merge commit.

```bash
git checkout main
git merge feature-login
```

### Result:

Keeps branch history.

---

## Git Rebase

Moves commits on top of another branch.

```bash
git checkout feature-login
git rebase main
```

### Result:

Cleaner linear history.

---

## Git Cherry-pick

Copies one specific commit to another branch.

```bash
git cherry-pick <commit-id>
```

### Use Case:

Bring hotfix commit from one branch to another.

---

## Summary

| Command     | Purpose                 |
| ----------- | ----------------------- |
| merge       | Combine branches        |
| rebase      | Rewrite history cleanly |
| cherry-pick | Copy one commit         |

---

# 7. Git Stash Commands

Temporarily save uncommitted work.

## Save Work

```bash
git stash
```
Note: git stash working only with tracked files (Staged Area)
so before ```bash git stash ``` 
you should run ```bash git add . ```
## Save with Message

```bash
git stash push -m "WIP login page"
```

## List Stashes

```bash
git stash list
```
Result example:

```bash
stash@{0}: WIP on dev: ec0138f Merge pull request #2 from radhouen/main
stash@{1}: WIP on dev: ec0138f Merge pull request #2 from radhouen/main
```

### Display Stashed files:

```bash
git stash show stash@{stash_id} --name-only
```
Example
```bash
git stash show stash@{1} --name only 

#---Result -----
Courses/git-history.md
application/backend/README.md
application/cache/README.md
application/database/README.md
application/frontend/README.md

```

## Apply Last Stash

```bash
git stash apply
```
### Apply specific Stash:

```bash
git stash apply stash@{1}
```

## Apply and Remove

```bash
git stash pop
```

## Remove Stash

```bash
git stash drop
```
Note :

git stash pop = git stash apply + git stash drop
## Clear All

```bash
git stash clear
```

---
### GIT tag:

#### Create Tag:

```bash
git tag -a v1.0.0 -m "initial release"
```

#### List Tags:

```bash
git tag
```

#### Push tag:

```bahs
git push origin v1.0.0
```
---

# 8. Real DevOps Workflow Example

```bash
git clone repo
git checkout -b feature-api
git add .
git commit -m "API changes"
git push origin feature-api
```

Then create Pull Request.

---

# 9. Best Practices

✅ Commit often
✅ Use feature branches
✅ Pull before push
✅ Use rebase for clean history
✅ Use revert in production branches
✅ Never hard reset shared branches

---

# 10. Quick Cheat Sheet

```bash
git status
git add .
git commit -m "msg"
git push
git pull
git branch
git switch branch1
git merge feature
git rebase main
git revert HEAD
git reset --hard HEAD~1
git stash
```

---

# Final Recommendation

For teams:

* **main** → production
* **develop** → integration
* **feature/*** → new work
* **hotfix/*** → urgent fixes
