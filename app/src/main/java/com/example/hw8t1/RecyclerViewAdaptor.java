package com.example.hw8t1;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageView;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.cardview.widget.CardView;
import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;

import java.util.ArrayList;

public class RecyclerViewAdaptor extends   RecyclerView.Adapter<RecyclerViewAdaptor.ViewHolder> {

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
    }
    @Override
    public int getItemCount() {
        return ImageUrls.size();
    } //returns size of list for internals
    public class ViewHolder extends RecyclerView.ViewHolder{
        ImageView imageView; //need not be same as other
        CardView card_view;

        public ViewHolder(@NonNull View itemView) { // return constructor to map indviudal stuff to items
            super(itemView);

            imageView = itemView.findViewById(R.id.imageView);
            card_view = itemView.findViewById(R.id.card_view);
        }
    }
}

