package com.example.qaengine.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "Result")
public class Result {
    @Id

    private String id;
    private String userId;
    private String questionId;
    private boolean isCorrect;
    private Date answeredAt;

    public Result() {

    }

    public Result(String id, String userId, String questionId, boolean isCorrect, Date answeredAt) {
        this.id = id;
        this.userId = userId;
        this.questionId = questionId;
        this.isCorrect = isCorrect;
        this.answeredAt = answeredAt;
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

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getQuestionId() {
        return questionId;
    }

    public void setQuestionId(String questionId) {
        this.questionId = questionId;
    }

    public boolean isCorrect() {
        return isCorrect;
    }

    public void setCorrect(boolean correct) {
        isCorrect = correct;
    }

    public Date getAnsweredAt() {
        return answeredAt;
    }

    public void setAnsweredAt(Date answeredAt) {
        this.answeredAt = answeredAt;
    }
}
