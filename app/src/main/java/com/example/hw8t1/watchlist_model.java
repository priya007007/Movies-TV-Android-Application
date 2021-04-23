package com.example.hw8t1;

public class watchlist_model {
    String type;
    String img;
    String id;
    String name;

    public watchlist_model(String id,String type,String img,String name){
        this.type=type;
        this.img = img;
        this.id =id;
        this.name=name;
    }
    public String getType(){return type;}

    public String getImg() {
        return img;
    }

    public String getId() {
        return id;
    }
    public String getname() {
        return name;
    }
}
