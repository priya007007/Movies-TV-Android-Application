package com.example.hw8t1;

import android.os.Bundle;
import android.text.method.LinkMovementMethod;
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
import com.smarteist.autoimageslider.SliderView;

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


        TextView textView = v.findViewById(R.id.tmdbwebsite);
        textView.setMovementMethod(LinkMovementMethod.getInstance());

        RequestQueue queue = Volley.newRequestQueue(getActivity().getApplicationContext());

//ENDPOINT: movieNowPlaying
        String url_movies_slider ="http://10.0.2.2:8080/movieNowPlaying_android"; //MOVIES SLIDER
        ArrayList<CardModel> movies_slider_arraylist = new ArrayList<CardModel>();
        JsonObjectRequest movies_slider_request = new JsonObjectRequest(Request.Method.GET, url_movies_slider, null,
                response ->
                {

                    for (int i = 0; i < 6; i++) {
                        try {
                            JSONObject response_temp = ((JSONObject) response.get(i + ""));
                            String poster_path = (String) response_temp.get("poster_path");
                            String id = String.valueOf(response_temp.get("id"));
                            String name = (String) response_temp.get("title");
                            movies_slider_arraylist.add(new CardModel(poster_path, id, "movie", name));

                        } catch (JSONException e) {
                            e.printStackTrace();
                        }
                    }
                    SliderView sliderView = v.findViewById(R.id.movie_slider_xml);
                    slider_adaptor adapter = new slider_adaptor(v.getContext(), movies_slider_arraylist); //slider_adaptor class object
                    sliderView.setAutoCycleDirection(SliderView.LAYOUT_DIRECTION_LTR);
                    sliderView.setSliderAdapter(adapter);
                    sliderView.setScrollTimeInSec(6);
                    sliderView.setAutoCycle(true);
                    sliderView.startAutoCycle();//show


                }, error -> System.out.println(error));


        queue.add(movies_slider_request);

//ENDPOINT: tvNowPlaying
        String url_tv_slider ="http://10.0.2.2:8080/tvNowPlaying_android";//TV SLIDER
        ArrayList<CardModel> tv_slider_arraylist = new ArrayList<CardModel>();
        JsonObjectRequest tv_slider_request = new JsonObjectRequest(Request.Method.GET, url_tv_slider, null,
                response ->
                {

                    for(int i=0; i<6;i++){
                        try {
                            JSONObject response_temp = ((JSONObject)response.get(i+""));
                            String poster_path = (String) response_temp.get("poster_path");
                            String id = String.valueOf(response_temp.get("id"));
                            String name = (String) response_temp.get("title");
                            tv_slider_arraylist.add(new CardModel(poster_path,id,"tv",name));

                        } catch (JSONException e) {
                            e.printStackTrace();
                        }
                    }
                    SliderView sliderView2 = v.findViewById(R.id.tv_slider_xml);
                    slider_adaptor adapter2 = new slider_adaptor(v.getContext(), tv_slider_arraylist); //slider_adaptor class object
                    sliderView2.setAutoCycleDirection(SliderView.LAYOUT_DIRECTION_LTR);
                    sliderView2.setSliderAdapter(adapter2);
                    sliderView2.setScrollTimeInSec(6);
                    sliderView2.setAutoCycle(true);
                    sliderView2.startAutoCycle();


                }, error -> System.out.println(error));


        queue.add(tv_slider_request) ;
//ENDPOINT: PopularMovies
        String url ="http://10.0.2.2:8080/PopularMovies_android";
        String tag;
        Object msg;
       ArrayList<CardModel> response_new = new ArrayList<CardModel>();
        JsonObjectRequest stringRequest = new JsonObjectRequest(Request.Method.GET, url, null,
                response ->
                {System.out.println(response);
                    for(int i=0; i<10;i++){
                        try {
                            JSONObject response_temp = ((JSONObject)response.get(i+""));
                            String poster_path = (String) response_temp.get("poster_path");
                            String id = String.valueOf(response_temp.get("id"));
                            String name = (String) response_temp.get("title");
                            response_new.add(new CardModel(poster_path,id,"movie",name));
                        } catch (JSONException e) {
                            e.printStackTrace();
                        }
                    }
                    initRecyclerView(v,response_new);
                }, error -> System.out.println(error));


        queue.add(stringRequest);

//ENDPOINT: TopRatedMovies
        String url_top_movies ="http://10.0.2.2:8080/TopRatedMovies_android";
        ArrayList<CardModel> response_top_movies = new ArrayList<CardModel>();
        JsonObjectRequest stringRequest_top_movies = new JsonObjectRequest(Request.Method.GET, url_top_movies, null,
                response ->

                {
                    for(int i=0; i<10;i++){
                        try {
                            JSONObject response_temp = ((JSONObject)response.get(i+""));
                            String poster_path = (String) response_temp.get("poster_path");
                            String id = String.valueOf(response_temp.get("id"));
                            String name = (String) response_temp.get("title");
                            response_top_movies.add(new CardModel(poster_path,id,"movie",name));

                        } catch (JSONException e) {
                            e.printStackTrace();
                        }
                    }
                    initRecyclerView_Top_Rated_Movies(v,response_top_movies);
                }, error -> System.out.println(error));


        queue.add(stringRequest_top_movies) ;


//ENDPOINT: TopRatedTV
        String url_top_tv ="http://10.0.2.2:8080/TopRatedTV_android";
        ArrayList<CardModel> response_top_tv = new ArrayList<CardModel>();
        JsonObjectRequest stringRequest_top_tv = new JsonObjectRequest(Request.Method.GET, url_top_tv, null,
                response ->
                {System.out.println(response);
                    for(int i=0; i<10;i++){
                        try {

                            JSONObject response_temp = ((JSONObject)response.get(i+""));
                            String poster_path = (String) response_temp.get("poster_path");
                            String id = String.valueOf(response_temp.get("id"));
                            String name = (String) response_temp.get("title");
                            response_top_tv.add(new CardModel(poster_path,id,"tv",name));
                        } catch (JSONException e) {
                            e.printStackTrace();
                        }
                    }
                    init_Top_Rated_TV(v,response_top_tv);
                }, error -> System.out.println(error));



//ENDPOINT: POPULAR TV
        String url_popular_tv ="http://10.0.2.2:8080/PopularTV_android";
        ArrayList<CardModel> response_popular_tv = new ArrayList<CardModel>();
        JsonObjectRequest stringRequest_popular_tv = new JsonObjectRequest(Request.Method.GET, url_popular_tv, null,
                response ->
                {System.out.println(response);
                    for(int i=0; i<10;i++){
                        try {

                            JSONObject response_temp = ((JSONObject)response.get(i+""));
                            String poster_path = (String) response_temp.get("poster_path");
                            String id = String.valueOf(response_temp.get("id"));
                            String name = (String) response_temp.get("title");
                            response_popular_tv.add(new CardModel(poster_path,id,"tv",name));
                        } catch (JSONException e) {
                            e.printStackTrace();
                        }
                    }
                    init_Popular_TV(v,response_popular_tv);
                    queue.add(stringRequest_top_tv) ;
                }, error -> System.out.println(error));
        queue.add(stringRequest_popular_tv);

//TAB SWAP: movie and tv
        final Button button_movie = v.findViewById(R.id.movies_button);
        final Button button_tv = v.findViewById(R.id.tv_button);
        View  rel_movie = v.findViewById(R.id.scrollViewmovie);
        View  rel_tv = v.findViewById(R.id.scrollViewtv);
        button_movie.setTextColor(getResources().getColor(R.color.blueIcon));
        button_movie.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                rel_movie.setVisibility(View.VISIBLE);
                rel_tv.setVisibility(View.GONE);
                button_movie.setTextColor(getResources().getColor(R.color.blueIcon));
                button_tv.setTextColor(getResources().getColor(R.color.white));

            }
        });
        button_tv.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                rel_tv.setVisibility(View.VISIBLE);
                rel_movie.setVisibility(View.GONE);
                button_tv.setTextColor(getResources().getColor(R.color.blueIcon));
                button_movie.setTextColor(getResources().getColor(R.color.white));

            }
        });
        return v;
    }




    //RECYCLER VIEW for 4 cards
    private void initRecyclerView(View v,ArrayList<CardModel> response_new ){
        Log.d(TAG,"initRecyclerView: init recyclerview");
        LinearLayoutManager layoutManager = new LinearLayoutManager(v.getContext(), LinearLayoutManager.HORIZONTAL,false);
        RecyclerView recyclerView = v.findViewById(R.id.recylerView1);//
        recyclerView.setLayoutManager(layoutManager);
        Boolean q = true;
        RecyclerViewAdaptor adapter = new RecyclerViewAdaptor(v.getContext(),response_new,q); //
        recyclerView.setAdapter(adapter);//
    }

    private void initRecyclerView_Top_Rated_Movies(View v,ArrayList<CardModel> response_top_movies ){
        LinearLayoutManager layoutManager2 = new LinearLayoutManager(v.getContext(), LinearLayoutManager.HORIZONTAL,false);
        RecyclerView recyclerView2 = v.findViewById(R.id.recylerView2);//
        recyclerView2.setLayoutManager(layoutManager2);
        Boolean q = true;
        RecyclerViewAdaptor adapter2 = new RecyclerViewAdaptor(v.getContext(),response_top_movies,q); //
        recyclerView2.setAdapter(adapter2);//
    }

    private void init_Top_Rated_TV(View v,ArrayList<CardModel> response_top_tv ){
        System.out.println(response_top_tv);
        System.out.println("top rated tv response");
        LinearLayoutManager layoutManager3 = new LinearLayoutManager(v.getContext(), LinearLayoutManager.HORIZONTAL,false);
        RecyclerView recyclerView3 = v.findViewById(R.id.recylerViewtvTop);//
        recyclerView3.setLayoutManager(layoutManager3);
        Boolean q = true;
        RecyclerViewAdaptor adapter3 = new RecyclerViewAdaptor(v.getContext(),response_top_tv,q); //
        recyclerView3.setAdapter(adapter3);//
    }
    private void init_Popular_TV(View v,ArrayList<CardModel> response_popular_tv ){
        System.out.println(response_popular_tv);
        System.out.println("popular tv response");
        LinearLayoutManager layoutManager4 = new LinearLayoutManager(v.getContext(), LinearLayoutManager.HORIZONTAL,false);
        RecyclerView recyclerView4 = v.findViewById(R.id.recylerViewTVPopular);//
        recyclerView4.setLayoutManager(layoutManager4);
        Boolean q = true;
        RecyclerViewAdaptor adapter4 = new RecyclerViewAdaptor(v.getContext(),response_popular_tv,q); //
        recyclerView4.setAdapter(adapter4);//
    }
    }
