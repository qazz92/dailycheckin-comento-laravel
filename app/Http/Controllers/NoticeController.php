<?php

namespace App\Http\Controllers;

use App\Models\Notice;
use Illuminate\Http\Request;

class NoticeController extends Controller
{
    private $noticeModel;

    public function __construct(Notice $notice)
    {
        $this->noticeModel = $notice;
    }

    public function list(Request $request) {
        $request->validate([
            'page' => 'required',
            'limit' => 'required'
        ]);

        return $this->noticeModel::paginate($request->get('limit'),'*','page',$request->get('page'));
    }

    public function show($id) {

        return $this->noticeModel::find($id);
    }

    public function create(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'content' => 'required',
            'version' => 'required'
        ]);

        $this->noticeModel->title = $request->get('title');
        $this->noticeModel->content = $request->get('content');
        $this->noticeModel->version = $request->get('version');
        $this->noticeModel->save();

        return response()->json([],204);
    }

    public function update(Request $request)
    {
        $request->validate([
            'noticeId' => 'required|exists:notice,id',
            'title' => 'required',
            'content' => 'required',
            'version' => 'required'
        ]);

        $model = $this->noticeModel::find($request->get('noticeId'));

        $model->update(
            [
                'title' => $request->get('title'),
                'content' => $request->get('content'),
                'version' => $request->get('version')
            ]);
        return response()->json([],204);
    }

    public function delete(Request $request)
    {
        $request->validate([
            'noticeId' => 'required|exists:notice,id',
        ]);

        $this->noticeModel::destroy($request->get('noticeId'));

        return response()->json([],204);
    }
}
