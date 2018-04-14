<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'categories';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['title', 'created_at'];

    /**
     * Get the payments for the category.
     */
    public function payments()
    {
        return $this->hasMany(Payment::class);
    }
}
