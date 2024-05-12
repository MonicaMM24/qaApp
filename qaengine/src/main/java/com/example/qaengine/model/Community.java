package com.example.qaengine.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.parameters.P;

import java.util.Date;

@Document(collection = "Community")
public class Community {

    @Id

    private String id;

    private String userId;

    private String comment;

    private Date postedAt;

    private String parentId;

    public Community() {

    }

    public Community(String id,String userId, String comment, Date postedAt, String parentId) {
        this.id = id;
        this.userId = userId;
        this.comment = comment;
        this.postedAt = postedAt;
        this.parentId = parentId;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String personName) {
        this.userId = personName;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public Date getPostedAt() {
        return postedAt;
    }

    public void setPostedAt(Date postedAt) {
        this.postedAt = postedAt;
    }

    public String getParentId() {
        return parentId;
    }

    public void setParentId(String parentId) {
        this.parentId = parentId;
    }

}
