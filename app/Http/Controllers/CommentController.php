<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    private $commentModel;

    public function __construct(Comment $comment)
    {
        $this->commentModel = $comment;
    }

    public function create(Request $request)
    {
        $request->validate([
            'answerId' => 'required|exists:answer,id',
            'content' => 'required'
        ]);

        $this->commentModel->content = $request->get('content');
        $this->commentModel->answerId = $request->get('answerId');
        $this->commentModel->userId = 1;
        $this->commentModel->save();

        return response()->json([],204);
    }

    public function update(Request $request)
    {
        $request->validate([
            'commentId' => 'required|exists:comment,id',
            'content' => 'required'
        ]);

        $model = $this->commentModel::find($request->get('commentId'));

        $model->update(
            [
                'content' => $request->get('content')
            ]);
        return response()->json([],204);
    }

    public function delete(Request $request)
    {
        $request->validate([
            'commentId' => 'required|exists:comment,id',
        ]);

        $this->commentModel::destroy($request->get('commentId'));

        return response()->json([],204);
    }
}
