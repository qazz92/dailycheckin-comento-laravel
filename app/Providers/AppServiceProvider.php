<?php

namespace App\Providers;

use Firebase\Auth\Token\Verifier;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        if ($this->app->environment() === 'local') {
            $this->app->register(\Reliese\Coders\CodersServiceProvider::class);
            $this->app->register(\Barryvdh\LaravelIdeHelper\IdeHelperServiceProvider::class);
        }
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->app->singleton(Verifier::class, function ($app) {
            return new Verifier('daily-check-in-comento');
        });

        Collection::macro('setAppends', function ($attributes) {
            return $this->map(function ($item) use ($attributes) {
                return $item->setAppends($attributes);
            });
        });
    }
}
