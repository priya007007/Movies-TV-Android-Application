package com.example.hw8t1;

public class CardModel {
    String img;
    String id;
    String type;

    public CardModel(String img, String id,String type){
        this.img = img;
        this.id =id;
        this.type=type;
    }

    public String getImg() {
        return img;
    }

    public String getId() {
        return id;
    }
    public String getType(){return type;}
}
