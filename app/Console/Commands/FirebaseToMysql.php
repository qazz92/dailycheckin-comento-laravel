<?php


namespace App\Console\Commands;


use App\Models\Answer;
use App\Models\Comment;
use App\Models\Emotion;
use App\Models\Like;
use App\Models\Notice;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Console\Command;
use File;
use Storage;

class FirebaseToMysql extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'firebase:migrate {--table=}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Firebase To Mysql';

    /**
     * Create a new command instance.
     *
     *
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $tableName = $this->option('table');

        $data = File::get(storage_path("firebase/$tableName.json"));
        $collection = json_decode($data, true);
        $collection = collect($collection[$tableName]);

        if ($tableName === 'users') {
            $users = $collection->groupBy('uid');

            \DB::beginTransaction();
            foreach ($users as $key => $value) {

                $userData = $value[0];

                if ($key === "") continue;
                $model = new User();
                $model->uid = $userData['uid'];
                $model->displayName = $userData['displayName'];
                $model->token = $userData['token'];
                $model->email = $userData['email'];
                $model->photoURL = $userData['photoURL'];
                $model->save();
            }
            \DB::commit();
        } else if ($tableName === 'notice') {

            \DB::beginTransaction();
            foreach ($collection as $key => $value) {

                if ($key === "none") continue;
                $model = new Notice();
                $model->title = $value['title'];
                $model->version = $value['version'];
                $model->content = $value['content'];
                $model->created_at = Carbon::parse($value['created_at']['_seconds']);

                $model->save();
            }
            \DB::commit();
        } else if ($tableName === 'emotion') {
            \DB::beginTransaction();
            foreach ($collection as $key => $value) {

                $model = new Emotion();
                $model->emoji = $value['emoji'];
                $model->value = $value['value'];
                $model->comment = $value['comment'];
                $model->name = $value['name'];
                $model->answer = $value['answer'];
                $model->uid = $key;
                $model->save();
            }
            \DB::commit();
        } else if ($tableName === 'answer') {
            \DB::beginTransaction();
            foreach ($collection as $key => $value) {

                if (isset($value['uid'])) {

                    $userId = User::whereUid($value['uid'])->first()->id;
                    $answer = collect($value['answer']);

                    $version = $value['version'];

                    $emotionId = null;
                    if ($version < 4) {
                        $content = $answer->last();
                    } else {
                        $emotionId = Emotion::whereUid($answer->get(0))->first()->id;
                        $content = $answer->get(1);
                    }

                    $model = new Answer();
                    $model->userId = $userId;
                    $model->emotionId = $emotionId;
                    $model->content = $content;
                    $model->uid = $key;
                    $model->created_at = Carbon::parse($value['created_at']['_seconds']);
                    $model->save();
                }
            }
            \DB::commit();
        } else if ($tableName === 'comment') {
            \DB::beginTransaction();
            foreach ($collection as $key => $value) {

                if (isset($value['uid'], $value['answer_id'])) {

                    $uid = $value['uid'];

                    $answer_id = $value['answer_id'];

                    $user = User::whereUid($uid)->first();
                    $answer = Answer::whereUid($answer_id)->first();

                    if ($answer && $user) {
                        $answerId = $answer->id;
                        $userId = $user->id;

                        $model = new Comment();
                        $model->userId = $userId;
                        $model->answerId = $answerId;
                        $model->content = $value['comment'];
                        $model->uid = $key;
                        $model->created_at = Carbon::parse($value['created_at']['_seconds']);
                        $model->updated_at = Carbon::parse($value['created_at']['_seconds']);
                        $model->save();
                    }
                }
            }
            \DB::commit();
        } else if ($tableName === 'like') {
            \DB::beginTransaction();
            foreach ($collection as $key => $value) {

                if (isset($value['uid'], $value['answer_id'])) {

                    $uid = $value['uid'];

                    $answer_id = $value['answer_id'];

                    $user = User::whereUid($uid)->first();
                    $answer = Answer::whereUid($answer_id)->first();

                    if ($answer && $user) {
                        $answerId = $answer->id;
                        $userId = $user->id;

                        $model = new Like();
                        $model->userId = $userId;
                        $model->answerId = $answerId;
                        $model->uid = $key;
                        $model->created_at = Carbon::parse($value['created_at']['_seconds']);
                        $model->updated_at = Carbon::parse($value['created_at']['_seconds']);
                        $model->save();
                    }
                }
            }
            \DB::commit();
        }

    }
}
