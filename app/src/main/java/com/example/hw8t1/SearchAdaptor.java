package com.example.hw8t1;

import android.content.Context;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;

import java.util.ArrayList;

//3 methods required to use recycle view
public class SearchAdaptor extends RecyclerView.Adapter<SearchAdaptor.ViewHolder> {
    private static final String TAG = "SEarchtag adaptor class";
    private ArrayList<searchModal> ListSearchResults = new ArrayList<>();
    private Context context;

    public SearchAdaptor(Context context,ArrayList<searchModal> ListSearchResults) {
        this.context = context;
        this.ListSearchResults = ListSearchResults;
    }

    @NonNull
    @Override //inflates each indiviual layouts:bind layout file
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.each_search_card,parent,false);
        return new ViewHolder(view);
    }

    @Override//all list item attached to widgets an stuff
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {
        Log.d(TAG, "onCreateViewHolder:called Search Adatpto");
        Glide.with(context)
                .asBitmap()
                .load(ListSearchResults.get(position).backdrop_path)
                .into(holder.backdrop_displayed); //Reference viewholder when ref imageview widget because widgets are saved in memorey in viewholder class, to ref them need viewholder which is passed thorugh constructor

        String textline1 = ListSearchResults.get(position).type + "("+ListSearchResults.get(position).release_date+")";
        holder.media_type_year.setText(textline1);

        holder.rating.setText(ListSearchResults.get(position).rating);
        holder.title.setText(ListSearchResults.get(position).title);
    }

    @Override
    public int getItemCount() {
        return ListSearchResults.size();
    }
    public class ViewHolder extends RecyclerView.ViewHolder{
        ImageView backdrop_displayed;
        TextView media_type_year;
        TextView title;
        TextView rating;

        public ViewHolder(@NonNull View itemView) {
            super(itemView);
             backdrop_displayed = itemView.findViewById(R.id.backdrop_disp_image);
             media_type_year =itemView.findViewById(R.id.displayed_type_year);
             title = itemView.findViewById(R.id.displayed_name);
             rating = itemView.findViewById(R.id.displayed_rating);
        }
    }
}
