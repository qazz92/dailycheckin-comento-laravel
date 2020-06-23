<?php

namespace App\Http\Controllers;

use App\Models\Like;
use Illuminate\Http\Request;

class LikeController extends Controller
{
    private $likeModel;

    public function __construct(Like $like)
    {
        $this->likeModel = $like;
    }


    public function create(Request $request)
    {
        $request->validate([
            'answerId' => 'required|exists:answer,id'
        ]);

        $this->likeModel->answerId = $request->get('answerId');
        $this->likeModel->userId = 1;
        $this->likeModel->save();

        return response()->json([],204);
    }

    public function delete(Request $request)
    {
        $request->validate([
            'likeId' => 'required|exists:like,id'
        ]);

        $this->likeModel::destroy($request->get('likeId'));

        return response()->json([],204);
    }
}
