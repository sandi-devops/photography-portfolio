<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class GalleryController extends Controller
{
    public function index()
    {
        return response()->json([
            [
                "id" => 1,
                "title" => "Mountain Sunrise",
                "image" => "/images/1.jpg",
                "price" => "$120",
                "story" => "Beautiful sunrise in mountains."
            ],
            [
                "id" => 2,
                "title" => "City Night",
                "image" => "/images/2.jpg",
                "price" => "$90",
                "story" => "Tokyo city lights at night."
            ],
            [
                "id" => 3,
                "title" => "Forest Mood",
                "image" => "/images/3.jpg",
                "price" => "$150",
                "story" => "Nature and calm atmosphere."
            ]
        ]);
    }
}