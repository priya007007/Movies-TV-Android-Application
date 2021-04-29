package com.example.hw8t1;

import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;

import androidx.appcompat.app.AppCompatActivity;

public class app_start_splash extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_splash);
System.out.println("entered splash class");
        new Handler().postDelayed(new Runnable() {
            @Override public void run() {
                System.out.println("entered splash activity");
                Intent i = new Intent(app_start_splash.this, MainActivity.class); startActivity(i);
                finish();
            } }, 3000);


    }

}
