package com.example.qaengine.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Tip {
    @Id

    private String id;

    private String title;

    private String tipContent;

    public Tip() {

    }

    public Tip(String title, String tipContent) {
        this.title = title;
        this.tipContent = tipContent;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getTipContent() {
        return tipContent;
    }

    public void setTipContent(String tipContent) {
        this.tipContent = tipContent;
    }
}
