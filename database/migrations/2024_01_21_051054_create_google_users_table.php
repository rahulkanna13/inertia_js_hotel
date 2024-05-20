<?php
// database/migrations/yyyy_mm_dd_create_google_users_table.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGoogleUsersTable extends Migration
{
    public function up()
    {
        Schema::create('google_users', function (Blueprint $table) {
            $table->id();
            $table->string('google_id')->unique();
            $table->string('name');
            $table->string('email')->unique();
            // Additional columns if needed
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('google_users');
    }
}
