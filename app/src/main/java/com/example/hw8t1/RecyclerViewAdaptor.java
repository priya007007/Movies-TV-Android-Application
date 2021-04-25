package com.example.hw8t1;

import android.app.Activity;
import android.content.ClipData;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.PopupMenu;
import android.widget.RelativeLayout;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.RequiresApi;

import androidx.appcompat.app.AppCompatActivity;
import androidx.cardview.widget.CardView;
import androidx.recyclerview.widget.RecyclerView;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;
import com.bumptech.glide.Glide;
import com.squareup.picasso.Picasso;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class RecyclerViewAdaptor extends   RecyclerView.Adapter<RecyclerViewAdaptor.ViewHolder>  {

   private static final String TAG = "RecylerViewAdaptor";
    private ArrayList<CardModel> ImageUrls = new ArrayList<>();
    private final Context mcontext;
    boolean p;
    public RecyclerViewAdaptor(Context context,ArrayList<CardModel> mImageUrls,Boolean p ){ //for all
    ImageUrls=mImageUrls; //to send in the data
    mcontext = context;
    this.p=p;
}
    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) { //maps big layout to this
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.layouts_for_each1,parent,false);
        return new ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) { // for each positions, for loop done internally, we iterate through and set the image to imageview
    ViewHolder viewH = holder;
        final String[] title = new String[1];
        final String[] imdb = new String[1];
        String[] videoid = new String[2];
        Log.d(TAG, "onCreateViewHolder:called.");
        Glide.with(mcontext)
                .asBitmap()
                .load(ImageUrls.get(position).img)
                .into(holder.imageView);
        viewH.card_view.setOnClickListener(new View.OnClickListener(){
            public void onClick(View view){
                Intent intent = new Intent(view.getContext(), Details1Activity.class);
                Bundle bundle = new Bundle();
                bundle.putString("type",(ImageUrls.get(position).type));
                bundle.putInt("id",Integer.parseInt(ImageUrls.get(position).id));
                bundle.putString("poster_path",(ImageUrls.get(position).img));
                Log.e(ImageUrls.get(position).id,ImageUrls.get(position).img);
                intent.putExtras(bundle);
                view.getContext().startActivity(intent);
            }
        });

        if(p){
        holder.popups.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View v) {
                RequestQueue queue = Volley.newRequestQueue(v.getContext());
                String url_details_imdb = "http://10.0.2.2:8080/"+(ImageUrls.get(position).type)+"/MovieDetails/"+(ImageUrls.get(position).id);
                StringRequest stringRequestdetails = new StringRequest(Request.Method.GET, url_details_imdb,
                        new Response.Listener<String>() {
                            @Override
                            public void onResponse(String response) {
                                System.out.println("details");
                                System.out.println( response);
                                try {
                                    JSONObject details_list_imdb = new JSONObject(response);
                                    imdb[0] = details_list_imdb.getString("imdb");
                                     title[0] = details_list_imdb.getString("title");
                                    System.out.println(imdb[0]);

                                } catch (JSONException e) {
                                    e.printStackTrace();
                                }
                            }
                        }, new Response.ErrorListener() {
                    @Override
                    public void onErrorResponse(VolleyError error) {
                        System.out.println("didn't work for volley imdb");
                    }
                });
                queue.add(stringRequestdetails);
                ///////////////////////
//                String url ="http://10.0.2.2:8080/"+(ImageUrls.get(position).type)+"/moviesVideo/"+(ImageUrls.get(position).id);
//                StringRequest stringRequest = new StringRequest(Request.Method.GET, url,
//                        new Response.Listener<String>() {
//                            @Override
//                            public void onResponse(String response) {
//                                System.out.println("response details volley");
//                                System.out.println(response);
//                                videoid[0] = response;
//                            }
//                        }, new Response.ErrorListener() {
//                    @Override
//                    public void onErrorResponse(VolleyError error) {
//                        System.out.println(" didn't work for volley video!");
//                    }
//                });
//                queue.add(stringRequest);
                //////////////////////////////////////////////////////////////////
                Watchlist_add_remove x = new Watchlist_add_remove(mcontext.getApplicationContext(),(ImageUrls.get(position).id) ,(ImageUrls.get(position).type),(ImageUrls.get(position).img) ,"temp_name");
                Boolean it_exists =  x.check_if_exists();

                PopupMenu popupMenu = new PopupMenu(v.getContext(), holder.popups);

                if(it_exists){ popupMenu.getMenuInflater().inflate(R.menu.popup_menu_remove, popupMenu.getMenu());}
                else{
                    popupMenu.getMenuInflater().inflate(R.menu.popup_menu, popupMenu.getMenu()); //menu res file and menu to attach, R is resource, menu for menu folder

                }
                popupMenu.show();
                popupMenu.setOnMenuItemClickListener(new PopupMenu.OnMenuItemClickListener(){

                    @RequiresApi(api = Build.VERSION_CODES.O)
                    @Override
                    public boolean onMenuItemClick(MenuItem item) { // handle for each item


                        switch (item.getItemId()){
                            case R.id.tdmb_dots:

                                String url1 = "https://www.imdb.com/title/" +imdb[0];
                                mcontext.startActivity(new Intent(Intent.ACTION_VIEW, Uri.parse(url1)));
                                return true;
                            case R.id.fb_dots:
                                String url1a = "https://www.imdb.com/title/" +imdb[0];
                                String url2 = "https://www.facebook.com/sharer/sharer.php?u=" + url1a;
                                mcontext.startActivity(new Intent(Intent.ACTION_VIEW, Uri.parse(url2)));
                                return true;
                            case R.id.twitter_dots:

                                System.out.println("part c works");
                                String url1b = "https://www.imdb.com/title/" +imdb[0];
                                String url3 = "https://twitter.com/intent/tweet?text=Check%20this%20out!%20" + url1b ;
                                mcontext.startActivity(new Intent(Intent.ACTION_VIEW, Uri.parse(url3)));
                                return true;
                            case R.id.watchlist_dots:
                                Watchlist_add_remove x = new Watchlist_add_remove(mcontext.getApplicationContext(),(ImageUrls.get(position).id ) ,(ImageUrls.get(position).type),(ImageUrls.get(position).img) , title[0]); //goes to class and adds/removes from watchlist.
                                x.item();



                                return true;
                            default:
                                return false;

                        }

                    }
                });
            }
        });
    }
    }
    @Override
    public int getItemCount() {
        return ImageUrls.size(); //returns size of list for internals
    }
    public class ViewHolder extends RecyclerView.ViewHolder{
        ImageView imageView; //need not be same as other
        CardView card_view;
        TextView popups;
        public ViewHolder(@NonNull View itemView) { // return constructor to map indviudal stuff to items
            super(itemView);

            imageView = itemView.findViewById(R.id.imageView);
            card_view = itemView.findViewById(R.id.card_view);
            popups = itemView.findViewById(R.id.dots_button);
            if(!p)
            {
                popups.setVisibility(View.GONE);
            }


        }
    }
}

