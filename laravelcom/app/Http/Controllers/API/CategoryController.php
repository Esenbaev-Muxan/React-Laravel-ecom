<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

use function PHPUnit\Framework\returnValueMap;

class CategoryController extends Controller
{

    public function index()
    {
        $category = Category::all();
        return response()->json([
            'status'=>200,
            'category'=>$category,
        ]);
    }

    public function edit($id) 
    {
        $category = Category::find($id);
        if($category)
        {
            return response()->json([
                'status'=>200,
                'category'=>$category,
            ]);
        }
        else 
        {
            return response()->json([
                'status'=>404,
                'message'=>'No Category Id Found',
            ]);
        }
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'meta_title'=>'required',
            'slug'=>'required',
            'name'=>'required',
        ]);
        if($validator->fails())
        {
            return response()->json([
                'status'=>400,
                'errors'=>$validator->messages(),
            ]);
        }
        else 
        {
            $category = new Category;
            $category->meta_title = $request->input('meta_title');
            $category->meta_keyword = $request->input('meta_keyword');
            $category->meta_descrip = $request->input('meta_descrip');
            $category->slug = $request->input('slug');
            $category->name = $request->input('name');
            $category->description = $request->input('description');
            $category->status = $request->input('status') == true ? '1':'0';
            $category->save();
            return response()->json([
                'status'=>200,
                'message'=>'Category Added Success',
            ]);
        }

    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'meta_title'=>'required',
            'slug'=>'required',
            'name'=>'required',
        ]);
        if($validator->fails())
        {
            return response()->json([
                'status'=>422,
                'errors'=>$validator->messages(),
            ]);
        }
        else 
        {
            $category = Category::find($id);
            if($category)
            {
                $category->meta_title = $request->input('meta_title');
                $category->meta_keyword = $request->input('meta_keyword');
                $category->meta_descrip = $request->input('meta_descrip');
                $category->slug = $request->input('slug');
                $category->name = $request->input('name');
                $category->description = $request->input('description');
                $category->status = $request->input('status') == true ? '1':'0';
                $category->save();
                return response()->json([
                    'status'=>200,
                    'message'=>'Category Updated Success',
                ]);
            }
            else 
            {
                return response()->json([
                    'status'=>404,
                    'message'=> 'No Category ID Found',
                ]);
            }
        }
    }

    public function destroy($id)
    {
        $category = Category::find($id);
        if($category)
        {
            $category->delete();
            return response()->json([
               'status'=>200,
               'message'=>'Category Deleted Successfully',
            ]);
        }
        else 
        {
            return response()->json([
               'status'=>404,
               'message'=>'No Category ID Found',
            ]);
        }
    }
}
