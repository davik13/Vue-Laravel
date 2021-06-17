<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Routing\Controller;

class AppController extends Controller
{
    /**
     * @return JsonResponse
     */
    public function getUser(): JsonResponse
    {
        return response()->json([
            'name' => 'david',
            'state' => 'Ly',
        ]);
    }
}
