# Docker Instructions for WaybackMachine

This guide outlines how to build, tag, authenticate, and push the Docker image for the `WaybackAPI` project to GitHub Container Registry (GHCR) under the `baisd-cc` organization.

## Project Structure

Your folder structure should look like this:

```
WaybackMachine/
├── WaybackAPI/
│   ├── Dockerfile
│   └── <other project files>
```

## Step 1: Build the Docker Image

Navigate into the `WaybackAPI` directory and build the Docker image:

```bash
cd WaybackMachine/WaybackAPI
docker build -t ghcr.io/baisd-cc/waybackapi .
```

## Step 2: Authenticate with GitHub Container Registry

You’ll need a **Personal Access Token (PAT)** from GitHub with these scopes:

- `write:packages`
- `read:packages`
- `repo` (if pushing from a private repo)

Then run:

```bash
echo YOUR_GITHUB_PAT | docker login ghcr.io -u YOUR_GITHUB_USERNAME --password-stdin
```

## Step 3: Push to GitHub Container Registry

```bash
docker push ghcr.io/baisd-cc/waybackapi:latest
```

## Done!

Your image is now available in the GitHub Container Registry for your organization and can be used in Docker Compose or pulled manually with:

```bash
docker pull ghcr.io/baisd-cc/waybackapi:latest
```
