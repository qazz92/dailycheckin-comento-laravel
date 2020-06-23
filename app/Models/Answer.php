<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use App\Traits\DateFormat;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Answer
 *
 * @property int|null $id
 * @property int|null $emotionId
 * @property int|null $userId
 * @property string|null $content
 * @property string|null $uid
 * @property Carbon $created_at
 * @property Carbon $updated_at
 * @package App\Models
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Answer newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Answer newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Answer query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Answer whereContent($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Answer whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Answer whereEmotionId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Answer whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Answer whereUid($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Answer whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Answer whereUserId($value)
 * @mixin \Eloquent
 */
class Answer extends Model
{
    use DateFormat;

	protected $table = 'answer';

	protected $casts = [
		'emotionId' => 'int',
		'userId' => 'int'
	];

	protected $fillable = [
		'emotionId',
		'userId',
		'content',
		'uid'
	];

    protected $appends = ['is_like'];

    public function getIsLikeAttribute()
    {
        $userId = 0;
        if (auth()->check()) {
            $userId = auth()->id();
        }
        return $this->attributes['is_like'] = Like::whereAnswerId($this->id)->where('userId',$userId)->count() > 0;
    }

	public function like() {
	    return $this->hasMany(Like::class,'answerId','id');
    }

    public function comment() {
	    return $this->hasMany(Comment::class,'answerId','id');
    }

    public function emotion() {
	    return $this->hasOne(Emotion::class,'id','emotionId');
    }
}
