<?php

use Carbon\Carbon;
use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\Payment::class, function (Faker $faker) {

    $date = Carbon::create(2018, 1, 1, 0, 0, 0);

    return [
        'title' => $faker->jobTitle,
        'comment' => $faker->text,
        'amount' => $faker->numberBetween(1, 100),
        'created_at' => $date->addWeeks(rand(1, 52))->format('Y-m-d H:i:s')
    ];
});
