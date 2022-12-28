📢 Update 28.12.2022 📢 

There is a now an official craftcms project type since DDEV v1.21.2, please refer to it:

- https://ddev.readthedocs.io/en/latest/users/quickstart/#craft-cms

The repository might use outdated techniques. Cheers!

<hr>

Let's get the party started! 

CraftCMS + DDEV + vite + Deployer

Based on https://github.com/thomasbendl/craft4-ddev-vite-blueprint. 

Work in progress.

## Local development

```
ddev npm run dev
ddev launch
```

## Local first time setup

```
ddev composer install
ddev exec "cat .env.example.dev | sed  -E 's/CRAFT_DB_(SERVER|DATABASE|USER|PASSWORD)=(.*)/CRAFT_DB_\1=db/g' > .env"
# The following only works if PRIMARY_SITE_URL is in .env
ddev exec 'sed -i "s#PRIMARY_SITE_URL=.*#PRIMARY_SITE_URL=${DDEV_PRIMARY_URL}#g" .env'

ddev exec php craft setup/app-id 
ddev exec php craft setup/security-key
ddev exec php craft install
# TODO: more steps needed? migrate?
ddev launch

ddev npm install
ddev npm run build
ddev npm run dev
```

## Reset 

```
# reset files
git clean -fdx -e .ddev/
# delete database and ddev project (without snapshot)
ddev delete -O
```

## TODOs

- [ ] Automatic .env creation with current primary url (https://ddev.readthedocs.io/en/latest/users/quickstart/#laravel)
- [ ] Full pipeline build CI/CD + deployer (https://www.mitrais.com/news-updates/how-to-create-ci-cd-with-github-action-and-laravel/)
    - (Improve https://dev.to/mandrasch/deploy-craft-cms-with-ddev-deployer-and-ploi-on-hetzner-cloud-part-1-27l2)
- [ ] Add bootstrap5 or tailwind?
- [ ] Use `ddev pull` to get media files and db from production/staging server
- [ ] Add Gitpod support (https://my-ddev-lab.mandrasch.eu/ddev-meets-gitpod.html)

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

# Added PRIMARY_SITE_URL=https://ddev-craftcms-example.ddev.site to .env and .env.example.dev

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
