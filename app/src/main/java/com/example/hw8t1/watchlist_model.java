package com.example.hw8t1;

public class watchlist_model {
    String type;
    String img;
    String id;

    public watchlist_model(String id,String type,String img){
        this.type=type;
        this.img = img;
        this.id =id;
    }
    public String getType(){return type;}

    public String getImg() {
        return img;
    }

    public String getId() {
        return id;
    }
}
