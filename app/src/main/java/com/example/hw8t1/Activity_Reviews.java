package com.example.hw8t1;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.widget.TextView;

public class Activity_Reviews extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity__reviews);

        Bundle b = getIntent().getExtras();
        int rating = b.getInt("rating");
        String username = b.getString("username");
        String created_at = b.getString("created_at");
        String content = b.getString("content");

        String line2_string = rating +"/5 STAR" ;
        TextView line2 = findViewById(R.id.idA);
        line2.setText(line2_string);

        String line1_string = " by " + username + " on " + created_at;
        TextView line1 = findViewById(R.id.idB);
        line1.setText(line1_string);



        TextView line3 = findViewById(R.id.idC);
        line3.setText(content);


    }
}