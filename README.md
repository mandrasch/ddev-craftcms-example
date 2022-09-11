Let's get the party started. Based on https://github.com/thomasbendl/craft4-ddev-vite-blueprint.

```
ddev npm run dev
ddev launch
```

## Local first time setup

```
ddev composer install
# TODO: automatic .env creation?
ddev npm install
```

## TODOs

- [ ] Automatic .env creation with current primary url (https://ddev.readthedocs.io/en/latest/users/quickstart/#laravel)
- [ ] Full pipeline build CI/CD + deployer (https://www.mitrais.com/news-updates/how-to-create-ci-cd-with-github-action-and-laravel/)
    - (Improve https://dev.to/mandrasch/deploy-craft-cms-with-ddev-deployer-and-ploi-on-hetzner-cloud-part-1-27l2)
- [ ] Add bootstrap5 or tailwind?

## How was this created?

```
ddev config --project-type=php --php-version=8.0 --docroot=web --create-docroot
ddev composer create -y craftcms/craft
# Are you ready to begin the setup? (yes|no) [no]: yes

# Answer the following:

# Which database driver are you using?
# (mysql or pgsql) → mysql (default)
# Database server name or IP address → db
# Database port → 3306 (default)
# Database username → db
# Database password → db
# Database name → db
# Database table prefix → (leave blank)

# Answer yes to the prompt on whether to install Craft now, and answer the remaining prompts as you like. The only one that matters is Site URL, which you should answer with https://ddev-craftcms-example.ddev.site.

ddev launch

# Install vite
ddev composer require nystudio107/craft-vite
ddev php craft plugin/install vite

ddev npm init -y
ddev npm i vite
ddev npm i sass vite-plugin-live-reload @vitejs/plugin-legacy vite-plugin-compression

# Add scripts to package.json:
    "dev": "NODE_ENV=dev vite",
    "build":"NODE_ENV=production vite",

# Add .ddev/docker.compose.vite.yaml (needs 'ddev restart')

# Add 'config/vite.php' and 'vite.config.js' 
# (Copied from https://github.com/thomasbendl/craft4-ddev-vite-blueprint)

# Bonus: For prettier auto formatting in vs code:
npm i --save-dev prettier-plugin-twig-melody
```


https://craftquest.io/courses/ddev-and-craft-cms-quick-start-guide/43674