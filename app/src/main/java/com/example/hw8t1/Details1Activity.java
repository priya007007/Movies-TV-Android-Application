package com.example.hw8t1;

import androidx.annotation.NonNull;
import androidx.annotation.RequiresApi;
import androidx.appcompat.app.AppCompatActivity;
import androidx.cardview.widget.CardView;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.content.SharedPreferences;
import android.os.Build;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.ImageView;
import android.widget.RelativeLayout;
import android.widget.TextView;
import android.widget.Toast;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonArrayRequest;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;
import com.pierfrancescosoffritti.androidyoutubeplayer.core.player.YouTubePlayer;
import com.pierfrancescosoffritti.androidyoutubeplayer.core.player.listeners.AbstractYouTubePlayerListener;
import com.pierfrancescosoffritti.androidyoutubeplayer.core.player.views.YouTubePlayerView;
import com.squareup.picasso.Picasso;
//import com.pierfrancescosoffritti.androidyoutubeplayer;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Details1Activity extends AppCompatActivity {

    private static final String TAG = "TAG Details1Actvity TAG";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        final int[] back = {0};
        final String[] videoid = {""};
        Bundle b = getIntent().getExtras();
        int id_here = b.getInt("id");
        String type = b.getString("type");
        String poster = b.getString("poster_path");
        Log.e(String.valueOf(id_here),"id of selected");
        String url ="http://10.0.2.2:8080/moviesVideo/"+id_here;
        RequestQueue queue = Volley.newRequestQueue(this);
        StringRequest stringRequest = new StringRequest(Request.Method.GET, url,
                new Response.Listener<String>() {
                    @Override
                    public void onResponse(String response) {
                        System.out.println("response details volley");
                        System.out.println(response);
                        videoid[0] = response;
                        RelativeLayout y = findViewById(R.id.rel_youtube);
                        RelativeLayout z = findViewById(R.id.rel_backdrop);
                        if(videoid[0].equals("")) {
                            y.setVisibility(View.GONE);
                            z.setVisibility(View.VISIBLE);
                        }
                        else{

                            y.setVisibility(View.VISIBLE);
                            z.setVisibility(View.GONE);
                        }
                    }
                }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                System.out.println(" didn't work for volley video!");
            }
        });
        queue.add(stringRequest);


        String url_details = "http://10.0.2.2:8080/MovieDetails/"+id_here;
        StringRequest stringRequestdetails = new StringRequest(Request.Method.GET, url_details,
                new Response.Listener<String>() {
                    @Override
                    public void onResponse(String response) {
                        System.out.println("details");
                        System.out.println( response);
                        try {
                            JSONObject details_list = new JSONObject(response);

                            String backdrop = details_list.getString("backdrop_path");
                            ImageView backdrop_image = (ImageView)findViewById(R.id.backdrop_path);
                            Picasso.get().load(backdrop).into(backdrop_image);

                            String title = details_list.getString("title");
                            TextView title_view = (TextView) findViewById(R.id.title);
                            title_view.setText(title);

                            String overview = details_list.getString("overview");
                            TextView overview_view = (TextView) findViewById(R.id.textView4) ;
                            overview_view.setText(overview);

                            String genre = details_list.getString("genre");
                            TextView genre_view = (TextView) findViewById(R.id.textView6) ;
                            genre_view.setText(genre);

                            String year = details_list.getString("release_date");
                            TextView year_view = (TextView) findViewById(R.id.textView8) ;
                            year_view.setText(year);

                        } catch (JSONException e) {
                            e.printStackTrace();
                        }
                    }
                }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                System.out.println("That didn't work for volley details!");
            }
        });
        queue.add(stringRequestdetails);
        String url_cast = "http://10.0.2.2:8080/"+type+"/Android_Movie_Cast_Details/"+id_here;
        ArrayList<model_cast> cast_response = new ArrayList<model_cast>();
        JsonArrayRequest string_req_cast = new JsonArrayRequest (Request.Method.GET, url_cast,null,

                response ->
                {
                    System.out.println(response);
                    for(int i=0; i<6;i++){
                        try {
                            JSONObject response_temp = ((JSONObject)response.get(i));
                            String full_profile_path = (String) response_temp.get("full_profile_path");
                            String name = String.valueOf(response_temp.get("name"));
                            cast_response.add(new model_cast(full_profile_path,name));

                        } catch (JSONException e) {
                            e.printStackTrace();
                        }
                    }
                    System.out.println("cast_response");
                    System.out.println(cast_response);
                    initRecyclerView(this,cast_response);

                }, error -> System.out.println(error));

        queue.add(string_req_cast);


        super.onCreate(savedInstanceState);//.
        setContentView(R.layout.details1_layout); //.


            YouTubePlayerView youTubePlayerView = findViewById(R.id.youtube_player_view);
            getLifecycle().addObserver(youTubePlayerView);
            youTubePlayerView.addYouTubePlayerListener(new AbstractYouTubePlayerListener() {
                @Override
                public void onReady(@NonNull YouTubePlayer youTubePlayer) {
                    String videoId = videoid[0];
                    youTubePlayer.cueVideo(videoId, 0); //loadVideo autoplays

                }
            });

        SharedPreferences pref = getApplicationContext().getSharedPreferences("MyPref", 0);
        SharedPreferences.Editor editor = pref.edit();

        String strJson = pref.getString("watchlistB","");
            TextView add_button = findViewById(R.id.add_button);
            TextView remove_button = findViewById(R.id.remove_button);
            remove_button.setVisibility(View.GONE);
            if(strJson==""||strJson==null){
                boolean a = true;
            }
            else{
                List<String> watchlistItems = new ArrayList<>(Arrays.asList(strJson.split("####")));

                for(int i = 0; i<watchlistItems.size();i++)
                {
                    String each_set = watchlistItems.get(i);
                    List<String> each_set_array = new ArrayList<>(Arrays.asList(each_set.split("@")));
                    System.out.println("watchlist before error");
                    System.out.println(each_set_array);
                    String id_set = each_set_array.get(0);
                    String type_set = each_set_array.get(1);
                    if (String.valueOf(id_here).equals(id_set) && type.equals(type_set)){
                        remove_button.setVisibility(View.VISIBLE);
                        add_button.setVisibility(View.GONE);

                    }

                }
            }



        CardView card_add_remove = findViewById(R.id.card_add_remove);
        card_add_remove.setOnClickListener(new View.OnClickListener(){
        String strJson = pref.getString("watchlistB","");

            @RequiresApi(api = Build.VERSION_CODES.O)
            @Override
            public void onClick(View v) {
                String string_id=String.valueOf(id_here);
                Watchlist_add_remove x = new Watchlist_add_remove(getApplicationContext(),string_id ,type,poster ); //goes to class and adds/removes from watchlist.
                x.item();



           /*

                String watchlist = id + "@split@" + poster + "@split@" + type + "####"
                watchlist += id + "@split@" + poster + "@split@" + type + "####"

                String[] watchlistItems = watchlist.split("####")

                // iterate
                String movie = watchlistItems[i]
                movieItems = movie.split("@split@")
                String id = movieItems[0]
                String title = movieItems[1];

                */
/*
                if(strJson==""||strJson==null){
                    System.out.println("The watchlist is empty: first loop");
                    String new_cinema = id_here + "@" + type + "@" + poster;
                    editor.putString("watchlistB",new_cinema );
                    editor.apply();
                }
                else{
                    try {
                       System.out.println("strJson");
                       System.out.println(strJson);
                        List<String> watchlistItems = new ArrayList<>(Arrays.asList(strJson.split("####")));
                        boolean exists = false;
                        for(int i = 0; i<watchlistItems.size();i++){
//                            System.out.println(watchlistItems.size());
//                            System.out.println("entred for loop => not empty");
                            String each_set = watchlistItems.get(i);
                            List<String> each_set_array = new ArrayList<>(Arrays.asList(each_set.split("@")));
                            String id_set = each_set_array.get(0);
                            String type_set = each_set_array.get(1);

                            if (String.valueOf(id_here).equals(id_set) && type.equals(type_set)){
                                String x = " was added to watchlist.";
                                Toast.makeText(getApplicationContext(),(String)x ,Toast.LENGTH_LONG).show();
                                System.out.println("to be removed");
                                System.out.println(id_here);
                                System.out.println(type);
                                System.out.println("above this page, below equality");
                                System.out.println(id_set);
                                System.out.println(type_set);
                                exists = true;
                                watchlistItems.remove(i);
                                System.out.println("watchlistItems array after removal below:");
                                System.out.println(watchlistItems);
                                String put_back_watchlist_after_removal;
                                if(watchlistItems.size()==0){
                                    editor.putString("watchlistB","");
                                    System.out.println("if empty list");
                                    editor.apply();
                                }
                                else{
                                    System.out.println("else not  empty list");
                                    put_back_watchlist_after_removal = String.join("####", watchlistItems);
                                    editor.remove("watchlistB");
                                    editor.putString("watchlistB", put_back_watchlist_after_removal);
                                    editor.apply();
                                }
                                String strJson2 = pref.getString("watchlistB","");
                                System.out.println("below after getting back string from watchlist to check ");
                                System.out.println(strJson2);

                                break;
                            }
                        }
                        if(!exists){
                            String new_cinema ="####"+ id_here + "@" + type + "@" + poster;
                            System.out.println("new_cinema");
                            System.out.println(new_cinema);
                            System.out.println("BEFORE: strJson ");
                            System.out.println(strJson);
                            strJson = strJson + new_cinema;
                            System.out.println("added");
                            System.out.println("AFTER: strJson");
                            System.out.println(strJson);
                            editor.remove("watchlistB");
                            editor.putString("watchlistB", strJson);
                            editor.apply();
                        }

                    } catch (Exception e) {
                        Log.e("BELOW there s exception","Details1Activity ");
                        e.printStackTrace();
                        Log.e("ABOVE there s exception","Details1Activity ");
                    }
                } */
            }

        });
    }
    private void initRecyclerView(Details1Activity details1Activity, ArrayList<model_cast> cast_response){
        Log.d(TAG,"initRecyclerView: init recyclerview");
        GridLayoutManager layoutManager3 = new GridLayoutManager(this,3,GridLayoutManager.VERTICAL,false);
        RecyclerView recyclerView3 = findViewById(R.id.cast_recycle_view);//
        recyclerView3.setLayoutManager(layoutManager3);
        cast_Adapter adapter = new cast_Adapter(this,cast_response); //
        recyclerView3.setAdapter(adapter);//
    }
}
