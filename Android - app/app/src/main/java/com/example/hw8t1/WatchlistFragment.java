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
import androidx.fragment.app.FragmentTransaction;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.ItemTouchHelper;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class WatchlistFragment extends Fragment  {
    TextView tx;
    private static final String TAG ="watchlist TAG" ;
    ArrayList<watchlist_model> arrays_to_display = new ArrayList<watchlist_model>(); //declared here for drag and drop
    RecyclerView recyclerView2;
    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {


        View v =inflater.inflate(R.layout.fragment_watchlist,container,false);
         tx = v.findViewById(R.id.watchlistEmptyID);

        SharedPreferences pref = getActivity().getApplicationContext().getSharedPreferences("MyPref", 0);
        SharedPreferences.Editor editor = pref.edit();
        String watch_display = pref.getString("watchlistB","");


        if(watch_display==null || watch_display ==""){
            final TextView set_nothing_visible = v.findViewById(R.id.watchlistEmptyID);
            set_nothing_visible.setText("Nothing added to watchlist");
        }

        else{
            final TextView set_nothing_visible = v.findViewById(R.id.watchlistEmptyID); //set nothing to gone
            set_nothing_visible.setText("");

            List<String> watchlistItems = new ArrayList<>(Arrays.asList(watch_display.split("####")));
            for(int i = 0; i<watchlistItems.size();i++){
                String each_set = watchlistItems.get(i);
                List<String> each_set_array = new ArrayList<>(Arrays.asList(each_set.split("@")));
                System.out.println("each_set_array");
                System.out.println(each_set_array);
                try {
                    String id_set = each_set_array.get(0);
                    String type_set = each_set_array.get(1);
                    String img_src =  each_set_array.get(2);
                    String name = each_set_array.get(3);
                    arrays_to_display.add(new watchlist_model(id_set,type_set,img_src,name));
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
            initRecyclerView(v,arrays_to_display);
        }
        ItemTouchHelper itemTouchHelper = new ItemTouchHelper(simpleCallback);
        itemTouchHelper.attachToRecyclerView(recyclerView2); //declared above easier
        return  v;


    }
    public void setEmpty() {

        tx.setText("Nothing added to watchlist");
    }

    public void RemoveEmpty( ) {

       // tx.setVisibility(v.GONE);
    }
    private void initRecyclerView(View v,ArrayList<watchlist_model> arrays_to_display ) {
        Log.d(TAG, "initRecyclerView:init recyclerview");
        GridLayoutManager layoutManager2 = new GridLayoutManager(v.getContext(), 3, GridLayoutManager.VERTICAL, false);
         recyclerView2 = v.findViewById(R.id.watchlist_recycler_view);//
        recyclerView2.setLayoutManager(layoutManager2);
        watchlist_adapter adapter2 = new watchlist_adapter(v.getContext(), arrays_to_display,this ); //
        recyclerView2.setAdapter(adapter2);//

    }




    ItemTouchHelper.SimpleCallback simpleCallback =  new ItemTouchHelper.SimpleCallback(ItemTouchHelper.UP|ItemTouchHelper.DOWN|ItemTouchHelper.START|ItemTouchHelper.END|ItemTouchHelper.LEFT|ItemTouchHelper.RIGHT,0) {
        @Override //2 argument directions and for method swipe we not use
        public boolean onMove(@NonNull RecyclerView recyclerView, @NonNull RecyclerView.ViewHolder viewHolder, @NonNull RecyclerView.ViewHolder target) {
            int fromPostion = viewHolder.getAbsoluteAdapterPosition(); //getAdapterPosition depreciated
            int toPosition = target.getAbsoluteAdapterPosition();

            Collections.swap(arrays_to_display,fromPostion,toPosition);
            recyclerView.getAdapter().notifyItemMoved(fromPostion,toPosition);
            return false;
        }

        @Override //for swiping not used now
        public void onSwiped(@NonNull RecyclerView.ViewHolder viewHolder, int direction) {

        }
    };
}


