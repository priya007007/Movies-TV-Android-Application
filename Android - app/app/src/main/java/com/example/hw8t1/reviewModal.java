package com.example.hw8t1;

public class reviewModal {
    String username;
    String created_at;
    String content;
    int rating;

    public reviewModal(String username,String created_at, String content,int rating){
        this.username=username;
        this.created_at=created_at;
        this.content=content;
        this.rating=rating;
    }

    public String getUsername() {
        return username;
    }

    public String getCreated_at() {
        return created_at;
    }
    public String getContent(){return content;}
    public int getRating() {
        return rating;
    }


}
