package com.example.hw8t1;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Build;
import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.annotation.RequiresApi;
import androidx.cardview.widget.CardView;
import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;

import java.security.AccessController;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class watchlist_adapter extends RecyclerView.Adapter<watchlist_adapter.ViewHolder> {
    private static final String TAG = "RecycleView WATCHLIST";
    private ArrayList<watchlist_model> List_items_display  = new ArrayList<>();
     private final Context context;

    public watchlist_adapter(Context context, ArrayList<watchlist_model> list_items_display) {
         this.context = context;
         List_items_display = list_items_display;
     }
     @NonNull
     @Override
     public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
         View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.watchlist_item,parent,false);
         return new ViewHolder(view);
     }

     @Override
     public void onBindViewHolder(@NonNull ViewHolder holder, int position) {
         try{ViewHolder viewH = holder;
             Log.d(TAG, "onCreateViewHolder:watchlist.");
             Glide.with(context)
                     .asBitmap()
                     .load(List_items_display.get(position).img)
                     .into(holder.imageView);
         holder.textView.setText(List_items_display.get(position).type);

             viewH.imageView.setOnClickListener(new View.OnClickListener() {
                 public void onClick(View view) {
                     Intent intent = new Intent(view.getContext(), Details1Activity.class);
                     Bundle bundle = new Bundle();
                     bundle.putString("type", "movie");
                     bundle.putInt("id", Integer.parseInt(List_items_display.get(position).id));
                     bundle.putString("poster_path", (List_items_display.get(position).img));
                     intent.putExtras(bundle);
                     view.getContext().startActivity(intent);
                 }


             });
             holder.rem.setOnClickListener(new View.OnClickListener(){
                 @RequiresApi(api = Build.VERSION_CODES.O)
                 @Override
                 public void onClick(View view) {
                     Watchlist_add_remove x = new Watchlist_add_remove(
                             context.getApplicationContext(),List_items_display.get(position).id ,List_items_display.get(position)
                             .type,List_items_display.get(position).img ); //goes to class and adds/removes from watchlist.
                     x.item();


//                     System.out.println("removed button clicked");
//                     SharedPreferences pref = context.getApplicationContext().getSharedPreferences("MyPref", 0);
//                     SharedPreferences.Editor editor = pref.edit();
//                      String type_remove =   List_items_display.get(position).type;
//                      String id_remove =  List_items_display.get(position).id;
//                      String strJson = pref.getString("watchlistB","");
//                     List<String> watchlistItems = new ArrayList<>(Arrays.asList(strJson.split("####")));
//                     for(int i = 0; i<watchlistItems.size();i++){
//                         String each_set = watchlistItems.get(i);
//                         List<String> each_set_array = new ArrayList<>(Arrays.asList(each_set.split("@")));
//                         String id_set = each_set_array.get(0);
//                         String type_set = each_set_array.get(1);
//                         if (String.valueOf(id_set).equals(id_remove) && type_set.equals(type_remove)){
//                             watchlistItems.remove(i);
//                             String put_back_watchlist_after_removal;
//                             if(watchlistItems.size()==0){
//                                 notifyDataSetChanged();
//                                 editor.putString("watchlistB","");
//                                 editor.commit();
//                                // notifyDataSetChanged();
//                             }
//                             else{
//                                 notifyDataSetChanged();
//                                 System.out.println("else not  empty list");
//                                 put_back_watchlist_after_removal = String.join("####", watchlistItems);
//                                 editor.remove("watchlistB");
//                                 editor.putString("watchlistB", put_back_watchlist_after_removal);
//                                 editor.commit();
//                                 System.out.println("else");
//                                 System.out.println(put_back_watchlist_after_removal);
//
//                             }
//
//                         }
//                     }

                     notifyDataSetChanged();
                 }

              });



         }
         catch(Exception e){}

     }
     @Override
     public int getItemCount() {
         return List_items_display.size();
     }

     public class ViewHolder extends  RecyclerView.ViewHolder{
         ImageView imageView;
         CardView card_view;
         TextView textView;
         TextView rem;

        public ViewHolder(@NonNull View itemView) {
            super(itemView);
            imageView = itemView.findViewById(R.id.imageView_watchlist);
            card_view = itemView.findViewById(R.id.card_s);
            textView = itemView.findViewById(R.id.type_movie_tv);
            rem = itemView.findViewById(R.id.remove_from_watchlist);
        }
    }

    public void outside_adaptor(){
    }
}
