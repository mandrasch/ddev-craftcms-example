<?php

// https://github.com/thomasbendl/craft4-ddev-vite-blueprint/blob/main/config/vite.php

use craft\helpers\App;

return [
    // activate dev server on local env, but not production
    'useDevServer' => (bool) App::env('CRAFT_ENVIRONMENT') === 'dev',
    'manifestPath' => Craft::getAlias('@webroot') . '/dist/manifest.json',
    'devServerPublic' => Craft::getAlias('@web') . ':3000',
    'serverPublic' => Craft::getAlias('@web') . '/dist/',
    'errorEntry' => 'src/js/app.ts',
    'cacheKeySuffix' => '',
    'devServerInternal' => '',
    'checkDevServer' => false,
    'includeReactRefreshShim' => false,
    'includeModulePreloadShim' => true,
    //'criticalPath' => '@webroot/dist/criticalcss',
    //'criticalSuffix' => '_critical.min.css',
];