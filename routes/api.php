<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::get('',function () {
    echo "Hello, World!";
});

Route::group(['middleware' => ['auth:api']], function () {
    Route::get('/user/me','UserController@me');

    Route::get('/emotion','EmotionController@list');

    Route::get('/answer','AnswerController@list');
    Route::get('/answer/{id}','AnswerController@show');
    Route::post('/answer','AnswerController@create');
    Route::patch('/answer','AnswerController@update');
    Route::delete('/answer','AnswerController@delete');

    Route::post('/comment','CommentController@create');
    Route::patch('/comment','CommentController@update');
    Route::delete('/comment','CommentController@delete');

    Route::post('/like','LikeController@create');
    Route::delete('/like','LikeController@delete');

    Route::get('/notice','NoticeController@list');
    Route::get('/notice/{id}','NoticeController@show');
    Route::post('/notice','NoticeController@create');
    Route::patch('/notice','NoticeController@update');
    Route::delete('/notice','NoticeController@delete');
});


