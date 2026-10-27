# DevOps 2048 Game Deployment 🚀

Ce projet a pour objectif d'automatiser le déploiement du jeu **2048** (HTML/CSS/JS) sur une instance cloud AWS EC2 en utilisant une approche DevOps moderne basée sur **Docker**, **Docker Hub**, **Ansible**, et **GitHub Actions**.

---

## 🛠️ Technologies Utilisées
* **Linux (Ubuntu)** : Système d'exploitation cible (AWS EC2).
* **Docker & Docker Hub** : Conteneurisation de l'application (Nginx) et stockage de l'image.
* **Ansible** : Orchestration et automatisation du déploiement (Infrastructure as Code).
* **GitHub Actions** : Pipeline CI/CD pour automatiser le build, le push et le déploiement.

---

## 📁 Structure du Projet

```text
app/
├── .github/
│   └── workflows/
│       └── deploy.yml         # Pipeline CI/CD GitHub Actions
├── app/                       # Code source du jeu
│   ├── index.html
│   ├── style.css
│   └── script.js
├── roles/
│   └── game_deploy/
│       ├── tasks/
│       │   └── main.yml       # Tâches d'installation et de lancement Ansible
│       ├── templates/
│       │   └── docker-compose.yml.j2 # Template dynamique Docker Compose
│       └── files/
│           └── nginx.conf     # Configuration du serveur Nginx
├── Dockerfile                 # Fichier de build de l'image Docker du jeu
├── ansible.cfg                # Configuration générale d'Ansible
├── inventory.ini              # Inventaire des serveurs cibles (IP AWS)
├── playbook.yml               # Playbook Ansible principal
└── README.md                  # Documentation du projet
