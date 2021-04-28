package com.example.hw8t1;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Filter;
import android.widget.Filterable;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;

import java.util.ArrayList;
import java.util.Collection;

//3 methods required to use recycle view
public class SearchAdaptor extends RecyclerView.Adapter<SearchAdaptor.ViewHolder>{ // searchview = implements Filterable
    private static final String TAG = "SEarchtag adaptor class";
    private ArrayList<searchModal> ListSearchResults = new ArrayList<>();
    private ArrayList<searchModal> ListSearchResults_Search_View = new ArrayList<>();// searchview - track of all present in recycle view
    TextView no_results;
    private Context context;

    public SearchAdaptor(Context context,ArrayList<searchModal> ListSearchResults) {
        this.context = context;
        this.ListSearchResults = ListSearchResults;
        this.ListSearchResults_Search_View= ListSearchResults;  // searchview

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

        holder.backdrop_displayed.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(v.getContext(), Details1Activity.class);
                Bundle bundle = new Bundle();
                bundle.putString("type",(ListSearchResults.get(position).type).toLowerCase());
                bundle.putInt("id",Integer.parseInt(ListSearchResults.get(position).id));
                bundle.putString("poster_path",(ListSearchResults.get(position).poster_path));
                intent.putExtras(bundle);
                v.getContext().startActivity(intent);
            }
        });
    }

    @Override
    public int getItemCount() {
        return ListSearchResults.size();
    }

//    @Override
//    public static Filter getFilter() {// searchview
//        return filter;
//    }

//    Filter filter = new Filter() { // searchview:All logic of filtering goes here
//        @Override
//        protected FilterResults performFiltering(CharSequence constraint) { // run on background thread //returns a var of filtering results
//            ArrayList<searchModal> filteredList = new ArrayList<>();
//            if(constraint.toString().isEmpty()){
//                no_results.setVisibility(View.VISIBLE);
//            }
//            else{
//                for(int i = 0; i< ListSearchResults.size();i++){
//                    if (ListSearchResults.get(i).title.toLowerCase().contains(constraint.toString().toLowerCase())) {
//                        filteredList.add(ListSearchResults.get(i));
//                    }
//                }
//
//            }
//            FilterResults filterResults = new FilterResults();
//            filterResults.values = filteredList;
//            return filterResults; //will return this to publish resukts
//        }
//
//        @Override
//        protected void publishResults(CharSequence constraint, FilterResults results) { //run on ui thread
//            ListSearchResults.clear();
//            ListSearchResults.addAll((Collection<? extends searchModal>) results.values); //casted to collection type
//            notifyDataSetChanged();
//        }
//    };

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
            no_results = itemView.findViewById(R.id.no_results);
        }
    }
}
