package com.example.hw8t1;

import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.toolbox.JsonArrayRequest;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;
import com.bumptech.glide.Glide;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;

public class HomeFragment extends Fragment {
    private static final String TAG = "initRecyclerView";//tag words not sure what it is

    @Override
    public void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        System.out.println("Called - goes to home fragment");
        View v =inflater.inflate(R.layout.fragment_home,container,false);
        RequestQueue queue = Volley.newRequestQueue(getActivity().getApplicationContext());
        String url ="http://10.0.2.2:8080/PopularMovies";
        String tag;
        Object msg;
       ArrayList<CardModel> response_new = new ArrayList<CardModel>();
        JsonObjectRequest stringRequest = new JsonObjectRequest(Request.Method.GET, url, null,
                response ->
                {
                    System.out.println(response);
                    for(int i=0; i<10;i++){
                        try {
                            JSONObject response_temp = ((JSONObject)response.get(i+""));
                            String poster_path = (String) response_temp.get("poster_path");
                            String id = String.valueOf(response_temp.get("id"));
                            response_new.add(new CardModel(poster_path,id));
                        } catch (JSONException e) {
                            e.printStackTrace();
                        }
                    }
                    initRecyclerView(v,response_new);
                    System.out.println("response_new");
                    System.out.println(response_new);
                }, error -> System.out.println(error));


        queue.add(stringRequest) ;


        final Button button_movie = v.findViewById(R.id.movies_button);
        final Button button_tv = v.findViewById(R.id.tv_button);
        View  rel_movie = v.findViewById(R.id.movies_layout);
        View  rel_tv = v.findViewById(R.id.tv_layout);
        button_movie.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                rel_movie.setVisibility(View.VISIBLE);
                rel_tv.setVisibility(View.GONE);
                Toast.makeText(v.getContext(),"hello?",Toast.LENGTH_SHORT).show();

            }
        });
        button_tv.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                rel_tv.setVisibility(View.VISIBLE);
                rel_movie.setVisibility(View.GONE);
            }
        });

       // initRecyclerView(v,response_new);

        return v;
    }
    private void initRecyclerView(View v,ArrayList<CardModel> response_new ){
        Log.d(TAG,"initRecyclerView: init recyclerview");
        LinearLayoutManager layoutManager = new LinearLayoutManager(v.getContext(), LinearLayoutManager.HORIZONTAL,false);
        RecyclerView recyclerView = v.findViewById(R.id.recylerView1);//
        recyclerView.setLayoutManager(layoutManager);
        RecyclerViewAdaptor adapter = new RecyclerViewAdaptor(v.getContext(),response_new); //
        recyclerView.setAdapter(adapter);//
    }
    }
