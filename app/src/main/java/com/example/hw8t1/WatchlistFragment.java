package com.example.hw8t1;

import android.content.SharedPreferences;
import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class WatchlistFragment extends Fragment  {
    private static final String TAG ="watchlist TAG" ;

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {


        View v =inflater.inflate(R.layout.fragment_watchlist,container,false);
        SharedPreferences pref = getActivity().getApplicationContext().getSharedPreferences("MyPref", 0);
        SharedPreferences.Editor editor = pref.edit();
        String watch_display = pref.getString("watchlistB","");


        if(watch_display==null || watch_display ==""){
            final TextView set_nothing_visible = v.findViewById(R.id.watchlistEmptyID);
            //set_nothing_visible.setVisibility(View.VISIBLE);
            set_nothing_visible.setText("Nothing added to watchlist");
            System.out.println("if");
        }

        else{
            final TextView set_nothing_visible = v.findViewById(R.id.watchlistEmptyID); //set nothing to gone
          //  set_nothing_visible.setVisibility(View.GONE);
            set_nothing_visible.setText("");

            List<String> watchlistItems = new ArrayList<>(Arrays.asList(watch_display.split("####")));
            System.out.println("watchlistItems");
            System.out.println(watchlistItems);
            ArrayList<watchlist_model> arrays_to_display = new ArrayList<watchlist_model>();
            for(int i = 0; i<watchlistItems.size();i++){
                String each_set = watchlistItems.get(i);
                List<String> each_set_array = new ArrayList<>(Arrays.asList(each_set.split("@")));
                String id_set = each_set_array.get(0);
                String type_set = each_set_array.get(1);
                String img_src =  each_set_array.get(2);
                arrays_to_display.add(new watchlist_model(id_set,type_set,img_src)
                );
            }
            initRecyclerView(v,arrays_to_display);
            System.out.println("else");
            System.out.println(watch_display);
        }
        return  v;
    }
    private void initRecyclerView(View v,ArrayList<watchlist_model> arrays_to_display ){
        Log.d(TAG,"initRecyclerView:init recyclerview");
        GridLayoutManager layoutManager2 = new GridLayoutManager(v.getContext(),3,GridLayoutManager.VERTICAL,false);
        RecyclerView recyclerView2 = v.findViewById(R.id.watchlist_recycler_view);//
        recyclerView2.setLayoutManager(layoutManager2);
        watchlist_adapter adapter2 = new watchlist_adapter(v.getContext(),arrays_to_display); //
        recyclerView2.setAdapter(adapter2);//
    }
}


