<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use App\Traits\DateFormat;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Like
 *
 * @property int|null $id
 * @property int|null $answerId
 * @property int|null $userId
 * @property string|null $uid
 * @property Carbon $created_at
 * @property Carbon $updated_at
 * @package App\Models
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Like newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Like newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Like query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Like whereAnswerId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Like whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Like whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Like whereUid($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Like whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Like whereUserId($value)
 * @mixin \Eloquent
 */
class Like extends Model
{
    use DateFormat;

    protected $table = 'like';

	protected $casts = [
		'answerId' => 'int',
		'userId' => 'int'
	];

	protected $fillable = [
		'answerId',
		'userId',
		'uid'
	];

	public function user(){
	    return $this->belongsTo(User::class,'userId','id');
    }
}
