package com.example.qaengine.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Answer")
public class Answer {
    @Id
    private String id;
    private String questionId;
    private String text;

    public Answer() {
    }

    public Answer(String questionId, String text) {
        this.questionId = questionId;
        this.text = text;
    }

    public String getId() {
        return id;
    }

    public String getQuestionId() {
        return questionId;
    }

    public String getText() {
        return text;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setQuestionId(String questionId) {
        this.questionId = questionId;
    }

    public void setText(String text) {
        this.text = text;
    }
}
