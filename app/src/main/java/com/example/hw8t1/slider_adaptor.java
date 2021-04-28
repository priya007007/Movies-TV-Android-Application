package com.example.hw8t1;

import android.content.Context;
import android.content.Intent;
import android.graphics.Bitmap;
import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;

import com.bumptech.glide.Glide;
import com.bumptech.glide.load.Transformation;
import com.bumptech.glide.request.RequestOptions;
import com.smarteist.autoimageslider.SliderViewAdapter;

import java.util.ArrayList;

//import jp.wasabeef.blurry.Blurry;

import static com.bumptech.glide.request.RequestOptions.bitmapTransform;
import jp.wasabeef.glide.transformations.BlurTransformation;

public class slider_adaptor extends  SliderViewAdapter<slider_adaptor.SliderAdapterViewHolder>{
    private ArrayList<CardModel>  Slider_List  = new ArrayList<>();
    private final Context context;

    public slider_adaptor(Context context, ArrayList<CardModel> slider_list ) {
        this.context = context;
        Slider_List = slider_list;

    }

    @Override
    public slider_adaptor.SliderAdapterViewHolder onCreateViewHolder(ViewGroup parent) {
        View inflate = LayoutInflater.from(parent.getContext()).inflate(R.layout.image_slider_each, null);
        return new SliderAdapterViewHolder(inflate);
    }

    @Override
    public void onBindViewHolder(slider_adaptor.SliderAdapterViewHolder viewHolder, int position) {
        Glide.with(context) //context or viewHolder.itemView????both work https://www.geeksforgeeks.org/auto-image-slider-in-android-with-example/ seem to pass itemview instead of context
                .asBitmap()
                .load(Slider_List.get(position).img)
                .apply(new RequestOptions().centerCrop()) //new code
                .transform(new BlurTransformation( 20, 2)) //new code
                .into(viewHolder.imageView_parent);
//        Blurry.with(context).from().into(viewHolder.imageView_parent);


        Glide.with(context) //context or viewHolder.itemView????both work https://www.geeksforgeeks.org/auto-image-slider-in-android-with-example/ seem to pass itemview instead of context
                .asBitmap()
                .load(Slider_List.get(position).img)
                .into(viewHolder.imageView_child);

        viewHolder.imageView_parent.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(v.getContext(), Details1Activity.class);
                Bundle bundle = new Bundle();
                bundle.putString("type",(Slider_List.get(position).type));
                bundle.putInt("id",Integer.parseInt(Slider_List.get(position).id));
                bundle.putString("poster_path",(Slider_List.get(position).img));
                intent.putExtras(bundle);
                v.getContext().startActivity(intent);
            }
        });
    }



    @Override
    public int getCount() {
        return Slider_List.size();
    }

    static class SliderAdapterViewHolder extends SliderViewAdapter.ViewHolder{
        ImageView imageView_parent;
        ImageView imageView_child;
        public SliderAdapterViewHolder(View itemView) {
            super(itemView);
            imageView_parent = itemView.findViewById(R.id.imageView_parent);
            imageView_child = itemView.findViewById(R.id.imageView_child);
        }
    }

}
