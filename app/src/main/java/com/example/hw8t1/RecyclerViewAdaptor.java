package com.example.hw8t1;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Build;
import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.PopupMenu;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.RequiresApi;
import androidx.appcompat.app.AppCompatActivity;
import androidx.cardview.widget.CardView;
import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class RecyclerViewAdaptor extends   RecyclerView.Adapter<RecyclerViewAdaptor.ViewHolder>  {

   private static final String TAG = "RecylerViewAdaptor";
    private ArrayList<CardModel> ImageUrls = new ArrayList<>();
    private final Context mcontext;
    public RecyclerViewAdaptor(Context context,ArrayList<CardModel> mImageUrls){ //for all
    ImageUrls=mImageUrls; //to send in the data
    mcontext = context;
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
        Log.d(TAG, "onCreateViewHolder:called.");
        Glide.with(mcontext)
                .asBitmap()
                .load(ImageUrls.get(position).img)
                .into(holder.imageView);
        viewH.card_view.setOnClickListener(new View.OnClickListener(){
            public void onClick(View view){
                Intent intent = new Intent(view.getContext(), Details1Activity.class);
                Bundle bundle = new Bundle();
                bundle.putString("type","movie");
                bundle.putInt("id",Integer.parseInt(ImageUrls.get(position).id));
                bundle.putString("poster_path",(ImageUrls.get(position).img));
                Log.e(ImageUrls.get(position).id,ImageUrls.get(position).img);
                intent.putExtras(bundle);
              //  view.getContext().finish();
                view.getContext().startActivity(intent);
//                Log.d(TAG, "onClick:clicked on an image:");
            //   Button button = view.getContext().findViewById(R.id.dots_button);
            }
        });
        holder.popups.setOnClickListener(new View.OnClickListener(){

            @Override
            public void onClick(View v) {
                PopupMenu popupMenu = new PopupMenu(v.getContext(), holder.popups);
                popupMenu.getMenuInflater().inflate(R.menu.popup_menu, popupMenu.getMenu()); //menu res file and menu to attach, R is resource, meny for menu folder
                popupMenu.show();
                popupMenu.setOnMenuItemClickListener(new PopupMenu.OnMenuItemClickListener(){

                    @RequiresApi(api = Build.VERSION_CODES.O)
                    @Override
                    public boolean onMenuItemClick(MenuItem item) { // handle for each item
                        switch (item.getItemId()){
                            case R.id.tdmb_dots:
                                System.out.println("part a works");
                                return true;
                            case R.id.fb_dots:
                                System.out.println("part b works");
                                return true;
                            case R.id.twitter_dots:
                                System.out.println("part c works");
                                return true;
                            case R.id.watchlist_dots:
                                Watchlist_add_remove x = new Watchlist_add_remove(mcontext.getApplicationContext(),(ImageUrls.get(position).id ) ,(ImageUrls.get(position).type),(ImageUrls.get(position).img) ); //goes to class and adds/removes from watchlist.
                                x.item();
/*
                                SharedPreferences pref = mcontext.getApplicationContext().getSharedPreferences("MyPref", 0);
                                SharedPreferences.Editor editor = pref.edit();
                                String strJson = pref.getString("watchlistB","");
                                if(strJson==""||strJson==null){
                                    System.out.println("The watchlist is empty: first loop");
                                    String new_cinema = (ImageUrls.get(position).id) + "@" + (ImageUrls.get(position).type) + "@" + (ImageUrls.get(position).img);
                                    editor.putString("watchlistB",new_cinema );
                                    editor.apply();
                                }
                                else{
                                    try {
                                        List<String> watchlistItems = new ArrayList<>(Arrays.asList(strJson.split("####")));
                                        boolean exists = false;
                                        for(int i = 0; i<watchlistItems.size();i++){
                                            String each_set = watchlistItems.get(i);
                                            List<String> each_set_array = new ArrayList<>(Arrays.asList(each_set.split("@")));
                                            String id_set = each_set_array.get(0);
                                            String type_set = each_set_array.get(1);

                                            if (String.valueOf(ImageUrls.get(position).id ).equals(id_set) && ImageUrls.get(position).type.equals(type_set)){
                                                System.out.println("to be removed");
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
                                            String new_cinema ="####"+ ImageUrls.get(position).id + "@" + ImageUrls.get(position).type + "@" + ImageUrls.get(position).img;
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
                                }
                                */
//
                                Toast.makeText(mcontext, "You Clicked " , Toast.LENGTH_LONG).show();
                                return true;
                            default:
                                return false;

                        }

                    }
                });
            }
        });
    }
    @Override
    public int getItemCount() {
        return ImageUrls.size();
    } //returns size of list for internals
    public class ViewHolder extends RecyclerView.ViewHolder{
        ImageView imageView; //need not be same as other
        CardView card_view;
        TextView popups;
        public ViewHolder(@NonNull View itemView) { // return constructor to map indviudal stuff to items
            super(itemView);

            imageView = itemView.findViewById(R.id.imageView);
            card_view = itemView.findViewById(R.id.card_view);
             popups = itemView.findViewById(R.id.dots_button);

        }
    }
}

