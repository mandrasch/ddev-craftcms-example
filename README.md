Let's get the party started.


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

```