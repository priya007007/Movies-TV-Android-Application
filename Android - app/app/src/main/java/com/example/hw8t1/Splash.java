package com.example.hw8t1;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;

public class Splash extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_splash);


        System.out.println(" splash activity here");


        new Handler().postDelayed(new Runnable() {
            @Override public void run() {
                System.out.println("entered splash activity");
               Intent i = new Intent(Splash.this, MainActivity.class); startActivity(i);
                finish();
            } }, 3000);


    }
    }
