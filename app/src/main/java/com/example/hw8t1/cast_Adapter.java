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

public class cast_Adapter extends RecyclerView.Adapter<cast_Adapter.ViewHolder> {
    private final Context context;
    private static final String TAG = "RecycleView CAST";
    private ArrayList<model_cast> Cast_items_display  = new ArrayList<>();
    public cast_Adapter(Context context, ArrayList<model_cast> cast_items_display){
        this.context = context;
        Cast_items_display = cast_items_display;
    }
    @NonNull
    @Override
    public cast_Adapter.ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.cast_item,parent,false);
        return new ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull cast_Adapter.ViewHolder holder, int position) {
        ViewHolder vH = holder;
        Log.d(TAG, "onCreateViewHolder:cast.");
        Glide.with(context)
                .asBitmap()
                .load(Cast_items_display.get(position).profile)
                .into(holder.imageView);
        holder.textView.setText(Cast_items_display.get(position).name);
    }

    @Override
    public int getItemCount() {
        return Cast_items_display.size();
    }
    public class ViewHolder extends  RecyclerView.ViewHolder{
        ImageView imageView;
        CardView card_view;
        TextView textView;

        public ViewHolder(@NonNull View itemView) {
            super(itemView);
            imageView = itemView.findViewById(R.id.cicular_image);
            card_view = itemView.findViewById(R.id.cards_cast);
            textView = itemView.findViewById(R.id.cast_name);

        }
    }
}
