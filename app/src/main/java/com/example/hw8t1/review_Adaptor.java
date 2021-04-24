package com.example.hw8t1;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.cardview.widget.CardView;
import androidx.recyclerview.widget.RecyclerView;

import java.util.ArrayList;

public class review_Adaptor extends  RecyclerView.Adapter<review_Adaptor.ViewHolder>{
    private static final String TAG = "RecycleView REVIEW";
    private ArrayList<reviewModal> Review_list_display  = new ArrayList<>();
    private final Context context;

    public review_Adaptor(Context context,ArrayList<reviewModal> Review_list_display  ) {
        this.context = context;
        this.Review_list_display= Review_list_display;
    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.each_layout_review,parent,false);
        return new ViewHolder(view);    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {
        ViewHolder viewH = holder;
        String temp_line1 = " by "+ Review_list_display.get(position).username +" on "+ Review_list_display.get(position).created_at;
        holder.textView1.setText(temp_line1);

        String temp_line2 = Review_list_display.get(position).rating +"/5 STAR" ;
        holder.textView2.setText(temp_line2);

        holder.textView3.setText(Review_list_display.get(position).content);
        holder.cardView4.setOnClickListener(new View.OnClickListener(){

            @Override
            public void onClick(View view) {
                Intent intent = new Intent(view.getContext(), Activity_Reviews.class);
                Bundle bundle = new Bundle();
                bundle.putString("type","movie");
                bundle.putString("username",(Review_list_display.get(position).username));
                bundle.putString("created_at", Review_list_display.get(position).created_at);
                bundle.putInt("rating",(Review_list_display.get(position).rating));
                bundle.putString("content", Review_list_display.get(position).content);
                intent.putExtras(bundle);
                view.getContext().startActivity(intent);
            }
        });

    }

    @Override
    public int getItemCount() {
        return Review_list_display.size();
    }

    public class ViewHolder extends  RecyclerView.ViewHolder{
        TextView textView1;
        TextView textView2;
        TextView textView3;
        CardView cardView4;
        public ViewHolder(@NonNull View itemView) {
            super(itemView);
            textView1 = itemView.findViewById(R.id.id1);
            textView2= itemView.findViewById(R.id.id2);
            textView3 = itemView.findViewById(R.id.id3);
            cardView4 = itemView.findViewById(R.id.cardview1);
        }
    }
}
