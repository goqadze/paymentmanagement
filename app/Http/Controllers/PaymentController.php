<?php

namespace App\Http\Controllers;

use App\Filters\PaymentFilters;
use App\Payment;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('home', [
            'payments' => Payment::latest()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        request()->validate([
            'title' => 'required|spamfree',
            'amount' => 'required|numeric|min:0.01',
            'comment' => 'required|spamfree',
            'category_id' => 'required|exists:categories,id',
        ]);

        return Payment::create($request->all());
    }

    /**
     * Display a filtered listing of the resource.
     *
     * @param PaymentFilters $filters
     * @return void
     */
    public function filter(PaymentFilters $filters)
    {
        return Payment::latest()->filter($filters)->get();
    }
}
