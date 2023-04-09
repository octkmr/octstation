<?php

namespace App\Models;

use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'title',
        'body',
    ];

    protected $casts = [
        'created_at' => 'datetime:Y-m-d H:i:s',
        'updated_at' => 'datetime:Y-m-d H:i:s',
    ];

    // 日付がUTCになってしまうので、日本時間に変換する。
    protected function serializeDate(\DateTimeInterface $date)
    {
        return $date->timezone('Asia/Tokyo');
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public static function fetchHomePosts(): LengthAwarePaginator
    {
        return self::with('user')->latest()->paginate(10);
    }
}
