package com.example.hw8t1;

import android.content.Context;
import android.nfc.Tag;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;

import java.util.ArrayList;

public class RecyclerViewAdaptor extends RecyclerView.Adapter<RecyclerViewAdaptor.ViewHolder> {

   private static final String TAG = "RecylerViewAdaptor";
    private ArrayList<CardModel> ImageUrls = new ArrayList<>();
    private Context mcontext;
    private String s = "Hello, I printed";
public RecyclerViewAdaptor(Context context,ArrayList<CardModel> mImageUrls){ //for all
    ImageUrls=mImageUrls;
    mcontext = context;
}
    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.layouts_for_each1,parent,false);
        return new ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {
    ViewHolder viewH = (ViewHolder) holder;
        Log.d(TAG, "onCreateViewHolder:called.");
        Glide.with(mcontext)
                .asBitmap()
                .load(ImageUrls.get(position).img)
                .into(holder.imageView);
        viewH.imageView.setOnClickListener(new View.OnClickListener(){
            public void onClick(View view){
                Log.d(TAG, "onClick:clicked on an image:");
                Toast.makeText(mcontext,s,Toast.LENGTH_SHORT).show();
            }

        });
    }

    @Override
    public int getItemCount() {
        return ImageUrls.size();
    }

    public class ViewHolder extends RecyclerView.ViewHolder{
        ImageView imageView; //need not be same as other

        public ViewHolder(@NonNull View itemView) {
            super(itemView);
            imageView = itemView.findViewById(R.id.imageView);

        }
    }
}

