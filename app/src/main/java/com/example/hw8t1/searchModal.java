package com.example.hw8t1;

public class searchModal {
    String id;
    String type;
    String poster_path;
    String backdrop_path;
    String title;
    String release_date;
    String rating;

    public searchModal( String id, String type,String poster_path,String backdrop_path,String title,String release_date,String rating){

        this.id =id;
        this.type=type;
        this.poster_path =poster_path;
        this.backdrop_path=backdrop_path;
        this.title =title;
        this.release_date=release_date;
        this.rating =rating;
    }


    public String getId() {
        return id;
    }
    public String getType(){return type;}
    public String get_poster_path() {
        return poster_path;
    }
    public String get_backdrop_path(){return backdrop_path;}
    public String get_title() {
        return title;
    }
    public String get_release_date(){return release_date;}
    public String get_rating() {
        return rating;
    }
}
