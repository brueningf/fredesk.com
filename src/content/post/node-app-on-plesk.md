---
title: "Running a small Node server on Plesk"
description: "Running a websockets node app using PM2 and Apache on Plesk"
publishDate: "10 May 2024"
tags: ["nodejs", "plesk", "apache"]
---

I was in the need of serving a websocket server on Plesk. By default the version of Plesk that I was using can't install Node Apps, or services running on the background.
While looking on the internet for a solution to how redirect traffic to a node app in Plesk, I encountered many posts where there the answer was not really helpful.

After looking for a simple solution, and finding nothing I gave up, and started digging in myself.
I started a SSH connection to the Plesk server, the virtual host for a domain.
There I used NVM to switch to a Node version that suited my app.

`nvm use --delete-prefix v16.20.2 --silent`

Installed PM2 to manage my small app.

`npm install -g pm2`

Then I had to figure out how to route my traffic to the app. Using Nginx as a proxy pass would have been the easiest way for me.
Since I knew how to do that. I looked for Plesk documentation on how to add configuration files, but in the end couldn't make it work.
The conf file would not get recognized by Nginx in a shared hosting environment.

I tried using another port to route traffic to my websocket server, but then I stumbled upon the HTTPS problem.
Accesing the certificate files from Plesk built-in LetsEncrypt to setup a secure connection, and allow for WSS was complicated.
The default paths for the certifcated where inaccessible, and I could not find the certificates.

In the end my solution was to use Apache. Apache would read the .htaccess files, and so I though to create an .htaccess file to route traffic.

```
#########################
#
# NODE.JS app running in Apache
# sample .htaccess  - partialy based on vielhuber/.htaccess
# Also rules to enforce www. prefix and https: SSL access
#
# This file must be on the dir where Apache expects to find the website
# The Node App can be anywhere else but must be accessible as explained below.
#

# ModRewrite must be active on Apache
RewriteEngine On

# Force SSL
RewriteCond %{HTTP_HOST} !^$
RewriteCond %{HTTPS}s ^on(s)|
RewriteCond %{HTTPS} off
RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [R=302,L,NE]

# Redirect all trafic to NODE.JS server.
# It must be running and, in this case, listening to port 3000
RewriteRule ^$ http://127.0.0.1:3000/ [P,L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ http://127.0.0.1:3000/$1 [P,L]
```
