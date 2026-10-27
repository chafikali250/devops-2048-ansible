# Utiliser l'image officielle Nginx légère
FROM nginx:alpine

# Copier la configuration Nginx personnalisée
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copier les fichiers du jeu (HTML, CSS, JS) dans le dossier web de Nginx
COPY app/ /usr/share/nginx/html/

# Exposer le port 80
EXPOSE 80

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]
