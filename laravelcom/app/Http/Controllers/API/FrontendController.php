<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;

class FrontendController extends Controller
{
    public function category()
    {
        $category = Category::where('status','0')->get();
        return response()->json([
            'status'=>200,
            'category'=>$category
        ]);
    }

    public function product($slug)
    {
        $category = Category::where('status','0', $slug)->where('status', '0')->first();
        if($category)
        {
            $product = Product::where('category_id', $category->id)->where('status', '0')->get();
            if($product)
            {
                return response()->json([
                    'status'=>200,
                    'product_data' => [
                        'product' => $product,
                        'category'=>$category,
                    ]
                ]);
            }
            else 
            {
                return response()->json([
                    'status'=>400,
                    'message'=>'No Product Available',
                ]);
            }
        }
        else 
        {
            return response()->json([
                'status'=>404,
                'message'=>'No Such Catebgory Found',
            ]);
        }
    }
}
