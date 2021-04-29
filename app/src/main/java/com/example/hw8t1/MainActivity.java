package com.example.hw8t1;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.Fragment;

import android.os.Bundle;
import android.view.MenuItem;

import com.google.android.material.bottomnavigation.BottomNavigationView;

public class MainActivity extends AppCompatActivity {
 Fragment Home,Search,Watchlist;
    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        BottomNavigationView bottomNav = findViewById(R.id.bottom_nav_hw9);
        bottomNav.setOnNavigationItemSelectedListener(navListener);

        getSupportFragmentManager().beginTransaction().replace(R.id.fragment_container, new HomeFragment()).commit();
    }

    @Override //overide onreusme
    protected void onResume() {
        super.onResume();
        System.out.println("onResume works");
    }

    private BottomNavigationView.OnNavigationItemSelectedListener navListener = new BottomNavigationView.OnNavigationItemSelectedListener() {
        @Override
        public boolean onNavigationItemSelected(@NonNull MenuItem item) {
            Fragment selectedFragment = null;

            switch(item.getItemId()){
                case R.id.id_nav_home:
                    selectedFragment = new HomeFragment();
                    break;
                case R.id.id_search:
                    selectedFragment = new SearchFragment();
                    break;
                case R.id.id_watchlist:
                    selectedFragment = new WatchlistFragment();
                    break;
            }
            String backstate = selectedFragment.getClass().getName();


getSupportFragmentManager().beginTransaction().replace(R.id.fragment_container,selectedFragment).addToBackStack(backstate).commit();
return true;
        }

        public void onBackPressed(){

        }
    };




}