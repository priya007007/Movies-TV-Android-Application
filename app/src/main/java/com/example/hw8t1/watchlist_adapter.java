package com.example.hw8t1;

import android.content.Context;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.cardview.widget.CardView;
import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;

import java.util.ArrayList;

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
         holder.textView.setText(List_items_display.get(position).type);}
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

        public ViewHolder(@NonNull View itemView) {
            super(itemView);
            imageView = itemView.findViewById(R.id.imageView_watchlist);
            card_view = itemView.findViewById(R.id.card_s);
            textView = itemView.findViewById(R.id.type_movie_tv);
        }
    }
}
