<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use Illuminate\Http\Request;

class AnswerController extends Controller
{
    private $answerModel;

    public function __construct(Answer $answer)
    {
        $this->answerModel = $answer;
    }

    public function list(Request $request) {
        $request->validate([
            'page' => 'required',
            'limit' => 'required'
        ]);

        return $this->answerModel::withCount(['like','comment'])
            ->with(['emotion'])->paginate($request->get('limit'),'*','page',$request->get('page'))
            ->setAppends(['is_like']);
    }

    public function show($id) {

        $model =  $this->answerModel::with(['like'=> function ($query) {
            $query->with(['user']);
        },'comment' => function ($query) {
            $query->with(['user']);
        },'emotion'])->find($id);

        return $model->append('is_like');
    }

    public function create(Request $request)
    {
        $request->validate([
            'emotionId' => 'required|exists:emotion,id',
            'content' => 'required'
        ]);

        $this->answerModel->emotionId = $request->get('emotionId');
        $this->answerModel->content = $request->get('content');
        $this->answerModel->userId = 1;
        $this->answerModel->save();

        return response()->json([],204);
    }

    public function update(Request $request)
    {
        $request->validate([
            'answerId' => 'required|exists:answer,id',
            'emotionId' => 'required|exists:emotion,id',
            'content' => 'required'
        ]);

        $model = $this->answerModel::find($request->get('answerId'));

        $model->update(
            [
                'emotionId' => $request->get('emotionId'),
                'content' => $request->get('content')
            ]);
        return response()->json([],204);
    }

    public function delete(Request $request)
    {
        $request->validate([
            'answerId' => 'required|exists:answer,id'
        ]);

        $this->answerModel::destroy($request->get('answerId'));

        return response()->json([],204);
    }
}
