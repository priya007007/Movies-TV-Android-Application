package com.example.hw8t1;

import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.RelativeLayout;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.widget.SearchView;
import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonArrayRequest;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;

public class SearchFragment extends Fragment {

    ArrayList <searchModal> search_add = new ArrayList<>();
    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View v =  inflater.inflate(R.layout.fragments_search,container,false);
        final androidx.appcompat.widget.SearchView searchView = (androidx.appcompat.widget.SearchView) v.findViewById(R.id.search_view);
        searchView.setQueryHint("Search Movies and TV");
        searchView.setMaxWidth(Integer.MAX_VALUE);



        //On start keeps cursor on.
        searchView.setIconifiedByDefault(false);
        searchView.setFocusable(true);
        searchView.setIconified(false);
        searchView.requestFocusFromTouch();



        TextView no_results =v.findViewById( R.id.no_results); //display none only when none.
        no_results.setVisibility(View.GONE);

        searchView.setOnQueryTextListener(new SearchView.OnQueryTextListener() {
            @Override
            public boolean onQueryTextSubmit(String query) {
                RequestQueue queue = Volley.newRequestQueue(v.getContext());//
                String url_search= "https://hw8gcptrialco.wl.r.appspot.com/search/"+query;
                JsonArrayRequest search_string_request = new JsonArrayRequest(Request.Method.GET, url_search, null,
                        response ->
                        {search_add.clear();
                            if(response.length()==0){
                                no_results.setVisibility(View.VISIBLE);
                            }
                            else{
                                no_results.setVisibility(View.GONE);
                            }
                            System.out.println(response);
                            for(int i=0; i<10;i++){
                                try {
                                    JSONObject response_temp = ((JSONObject)response.get(i));
                                    String id = String.valueOf(response_temp.get("id"));
                                    String media_type = String.valueOf(response_temp.get("media_type"));
                                    String poster_path = (String) response_temp.get("poster_path");
                                    String backdrop_path = (String) response_temp.get("backdrop_path");
                                    String name = String.valueOf(response_temp.get("name"));
                                    String release_date = (String) response_temp.get("release_date");
                                    String vote_average = String.valueOf(response_temp.get("vote_average"));
                                    search_add.add(new searchModal(id,media_type,poster_path,backdrop_path,name,release_date,vote_average));
                                } catch (JSONException e) {
                                    e.printStackTrace();
                                }
                            }
                            initRecyclerView_search(v,search_add);
                        }, error -> System.out.println(error));

                queue.add(search_string_request);
                return false;
            }

            @Override
            public boolean onQueryTextChange(String newText) {
                RequestQueue queue = Volley.newRequestQueue(v.getContext());//
                String url_search= "https://hw8gcptrialco.wl.r.appspot.com/search/"+newText;
                JsonArrayRequest search_string_request = new JsonArrayRequest(Request.Method.GET, url_search, null,
                        response ->
                        { search_add.clear();
                            if(response.length()==0){
                                no_results.setVisibility(View.VISIBLE);
                            }
                            else{
                                no_results.setVisibility(View.GONE);
                            }

                            System.out.println("onQueryTextChange Search results");
                            for(int i=0; i<response.length();i++){
                                try {
                                    JSONObject response_temp = ((JSONObject)response.get(i));
                                    String id = String.valueOf(response_temp.get("id"));
                                    String media_type = String.valueOf(response_temp.get("media_type"));
                                    String poster_path = (String) response_temp.get("poster_path");
                                    String backdrop_path = (String) response_temp.get("backdrop_path");
                                    String name = String.valueOf(response_temp.get("name"));
                                    String release_date = (String) response_temp.get("release_date");
                                    String vote_average = String.valueOf(response_temp.get("vote_average"));
                                    search_add.add(new searchModal(id,media_type,poster_path,backdrop_path,name,release_date,vote_average));
                                } catch (JSONException e) {
                                    e.printStackTrace();
                                }
                            }
                            initRecyclerView_search(v,search_add);
                        }, error -> System.out.println(error));

                queue.add(search_string_request);
                return false;
            }



      });







        //////////////////////////////////////////////////////////////////////////////

//        RequestQueue queue = Volley.newRequestQueue(v.getContext());
//        String url_search= "http://10.0.2.2:8080/search/captain";
//        JsonArrayRequest search_string_request = new JsonArrayRequest(Request.Method.GET, url_search, null,
//                response ->
//                {
//                    System.out.println(response);
//                    for(int i=0; i<10;i++){
//                        try {
//                            JSONObject response_temp = ((JSONObject)response.get(i));
//                            String id = String.valueOf(response_temp.get("id"));
//                            String media_type = String.valueOf(response_temp.get("media_type"));
//                            String poster_path = (String) response_temp.get("poster_path");
//                            String backdrop_path = (String) response_temp.get("backdrop_path");
//                            String name = String.valueOf(response_temp.get("name"));
//                            String release_date = (String) response_temp.get("release_date");
//                            String vote_average = String.valueOf(response_temp.get("vote_average"));
//                            search_add.add(new searchModal(id,media_type,poster_path,backdrop_path,name,release_date,vote_average));
//                        } catch (JSONException e) {
//                            e.printStackTrace();
//                        }
//                    }
//                    initRecyclerView_search(v,search_add);
//                }, error -> System.out.println(error));
//
//        queue.add(search_string_request);
        return v;
    }
    private void initRecyclerView_search(View v,ArrayList<searchModal> search_add ){
        LinearLayoutManager layoutManager = new LinearLayoutManager(v.getContext(), LinearLayoutManager.VERTICAL,false);
        RecyclerView recyclerView_Search = v.findViewById(R.id.recycle_search_parent);//
        recyclerView_Search.setLayoutManager(layoutManager);
        SearchAdaptor adapter = new SearchAdaptor(v.getContext(),search_add); //
        recyclerView_Search.setAdapter(adapter);//
    }
}



