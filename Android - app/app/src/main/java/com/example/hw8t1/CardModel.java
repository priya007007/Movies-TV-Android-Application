package com.example.hw8t1;

public class CardModel {
    String img;
    String id;
    String type;
    String name;

    public CardModel(String img, String id,String type,String name){
        this.img = img;
        this.id =id;
        this.type=type;
        this.name=name;
    }

    public String getImg() {
        return img;
    }
    public String getId() {
        return id;
    }
    public String getType(){return type;}
    public String getName(){return name;}

}
