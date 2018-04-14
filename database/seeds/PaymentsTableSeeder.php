<?php

use Illuminate\Database\Seeder;

class PaymentsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = \App\Category::latest();

        $categories->each(function ($category) {
            factory(\App\Payment::class, rand(4, 10))->create([
                'category_id' => $category->id
            ]);
        });
    }
}
