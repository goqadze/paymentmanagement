<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'payments';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['title', 'amount', 'comment', 'category_id', 'created_at'];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = ['created_at_formatted'];

    /**
     * Get the formatted date.
     *
     * @return string
     */
    public function getCreatedAtFormattedAttribute()
    {
        return $this->created_at->format('\\o\\n l, d F Y');
    }

    /**
     * Get the category that owns the payment.
     */
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function scopeFilter($query, $filters)
    {
        return $filters->apply($query);
    }

    public function scopeWithCategory($query)
    {
        return $query->with('category:id,title');
    }

    public function loadCategory()
    {
        return $this->load('category:id,title');
    }
}
