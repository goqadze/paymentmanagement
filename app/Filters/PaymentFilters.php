<?php

namespace App\Filters;

class PaymentFilters extends Filters
{
    /**
     * Registered filters to operate upon.
     *
     * @var array
     */
    protected $filters = ['title', 'start_date', 'end_date', 'min_amount', 'max_amount', 'category_id'];


    protected function title($value)
    {
        return $this->builder->where('title',  'LiKE', "%{$value}%");
    }

    protected function start_date($value)
    {
        return $this->builder->where('created_at', '>=', $value);
    }

    protected function end_date($value)
    {
        return $this->builder->where('created_at', '<=', $value);
    }

    protected function min_amount($value)
    {
        return $this->builder->where('amount', '>=', $value);
    }

    protected function max_amount($value)
    {
        return $this->builder->where('amount', '<=', $value);
    }

    protected function category_id($value)
    {
        if ($value <= 0)
            return $this->builder;

        return $this->builder->where('category_id', $value);
    }
}
