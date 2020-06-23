<?php


namespace App\Firebase;

use Firebase\Auth\Token\Verifier;

class Guard
{
    protected $verifier;

    public function __construct(Verifier $verifier)
    {
        $this->verifier = $verifier;
    }

    public function user($request)
    {
        $token = $request->bearerToken();

        try {
            $token = $this->verifier->verifyIdToken($token);

            $claims = $token->getClaims();

            return \App\Models\User::firstOrCreate(
                ['uid'=>$claims['sub']],
                ['email'=>$claims['email'],'photoURL'=>$claims['picture'],'displayName'=>$claims['name']]
            );
        }
        catch (\Exception $e) {
            return null;
        }
    }
}
