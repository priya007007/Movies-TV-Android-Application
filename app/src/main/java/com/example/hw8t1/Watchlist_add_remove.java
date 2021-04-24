package com.example.hw8t1;

import android.content.Context;
import android.content.SharedPreferences;
import android.os.Build;
import android.util.Log;
import android.widget.Toast;

import androidx.annotation.RequiresApi;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;



public class Watchlist_add_remove {

    String id_here;
    String type;
    String poster;
    Context context;
    String name;
  public  Watchlist_add_remove(Context context,String id_here, String type, String poster,String name){
      this.context = context;
      this.id_here = id_here;
      this.type = type;
      this.poster = poster;
      this.name = name;

  }

    @RequiresApi(api = Build.VERSION_CODES.O)
    public void item(){


        SharedPreferences pref = context.getSharedPreferences("MyPref", 0);
        SharedPreferences.Editor editor = pref.edit();
        String strJson = pref.getString("watchlistB","");

        if(strJson==""||strJson==null){

            Toast.makeText(context,  name+" has been added to watchlist. " , Toast.LENGTH_LONG).show();
            String new_cinema = id_here + "@" + type + "@" + poster+ "@"+name;
            editor.putString("watchlistB",new_cinema );
            editor.apply();
        }
        else{
            try {

                System.out.println("strJson");
                System.out.println(strJson);
                List<String> watchlistItems = new ArrayList<>(Arrays.asList(strJson.split("####")));
                boolean exists = false;
                for(int i = 0; i<watchlistItems.size();i++){
//                            System.out.println(watchlistItems.size());
//                            System.out.println("entred for loop => not empty");
                    String each_set = watchlistItems.get(i);
                    List<String> each_set_array = new ArrayList<>(Arrays.asList(each_set.split("@")));
                    String id_set = each_set_array.get(0);
                    String type_set = each_set_array.get(1);

                    if (String.valueOf(id_here).equals(id_set) && type.equals(type_set)){
                        String x = " was added to watchlist.";
                        System.out.println("to be removed");
                        Toast.makeText(context,  name+" has been removed from watchlist. " , Toast.LENGTH_LONG).show();
                        System.out.println(id_here);
                        System.out.println(type);
                        System.out.println("above this page, below equality");
                        System.out.println(id_set);
                        System.out.println(type_set);
                        exists = true;
                        watchlistItems.remove(i);
                        System.out.println("watchlistItems array after removal below:");
                        System.out.println(watchlistItems);
                        String put_back_watchlist_after_removal;
                        if(watchlistItems.size()==0){
                            editor.putString("watchlistB","");
                            System.out.println("if empty list");
                            editor.apply();
                        }
                        else{
                            System.out.println("else not  empty list");
                            put_back_watchlist_after_removal = String.join("####", watchlistItems);
                            editor.remove("watchlistB");
                            editor.putString("watchlistB", put_back_watchlist_after_removal);
                            editor.apply();
                        }
  
                        break;
                    }
                }
                if(!exists){
                    Toast.makeText(context,  name+" has been added to watchlist. " , Toast.LENGTH_LONG).show();
                    String new_cinema ="####"+ id_here + "@" + type + "@" + poster+ "@"+name;
                    System.out.println("new_cinema");
                    System.out.println(new_cinema);
                    System.out.println("BEFORE: strJson ");
                    System.out.println(strJson);
                    strJson = strJson + new_cinema;
                    System.out.println("added");
                    System.out.println("AFTER: strJson");
                    System.out.println(strJson);
                    editor.remove("watchlistB");
                    editor.putString("watchlistB", strJson);
                    editor.apply();
                }

            } catch (Exception e) {
                Log.e("BELOW there s exception","Details1Activity ");
                e.printStackTrace();
                Log.e("ABOVE there s exception","Details1Activity ");
            }
        }
    }
    public boolean check_if_exists(){


        SharedPreferences pref = context.getSharedPreferences("MyPref", 0);
        SharedPreferences.Editor editor = pref.edit();
        String strJson = pref.getString("watchlistB","");
        boolean r = true;
        if(strJson==""||strJson==null){
        r = false;
            return false;

        }
        else{
            try {

                List<String> watchlistItems = new ArrayList<>(Arrays.asList(strJson.split("####")));
                boolean exists = false;
                for(int i = 0; i<watchlistItems.size();i++){
                    String each_set = watchlistItems.get(i);
                    List<String> each_set_array = new ArrayList<>(Arrays.asList(each_set.split("@")));
                    String id_set = each_set_array.get(0);
                    String type_set = each_set_array.get(1);

                    if (String.valueOf(id_here).equals(id_set) && type.equals(type_set)){
                        exists = true;
                        r = true;
                        return true;
                    }
                }
                if(!exists){
                    r = false;
                    return false;
                }

            } catch (Exception e) {
                Log.e("BELOW exist: exception","watchlist_add_remove ");
                e.printStackTrace();
            }
        }
        return r;
    }

}
