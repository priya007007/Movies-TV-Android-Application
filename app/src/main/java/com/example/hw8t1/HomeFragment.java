package com.example.hw8t1;

import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.toolbox.JsonArrayRequest;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;
import com.bumptech.glide.Glide;

import org.json.JSONObject;

import java.util.ArrayList;

public class HomeFragment extends Fragment {



    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        RequestQueue queue = Volley.newRequestQueue(getActivity().getApplicationContext());
        String url ="http://10.0.2.2:8080/movieNowPlaying";
        String tag;
        Object msg;
        ArrayList<JSONObject> response_new = new ArrayList<JSONObject>();


        JsonObjectRequest stringRequest = new JsonObjectRequest(Request.Method.GET, url, null,


                response ->
                {
                    System.out.println(response);
//                    response
                }, error -> System.out.println(error));

        queue.add(stringRequest) ;
        View v =inflater.inflate(R.layout.fragment_home,container,false);
//        Glide.with(context)
//                .load("http://via.placeholder.com/300.png")
//                .override(300, 200)
//                .into(ivImg);
//       final TextView textView = v.findViewById(R.id.text_test);
        final Button button_movie = v.findViewById(R.id.movies_button);
        final Button button_tv = v.findViewById(R.id.tv_button);
        View  rel_movie = v.findViewById(R.id.movies_layout);
        View  rel_tv = v.findViewById(R.id.tv_layout);
        rel_movie.setVisibility(View.VISIBLE);
        rel_tv.setVisibility(View.GONE);
        button_movie.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                rel_movie.setVisibility(View.VISIBLE);
                rel_tv.setVisibility(View.GONE);
            }
        });
        button_tv.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                rel_tv.setVisibility(View.VISIBLE);
                rel_movie.setVisibility(View.GONE);
            }
        });


        return v;
    };
    }
