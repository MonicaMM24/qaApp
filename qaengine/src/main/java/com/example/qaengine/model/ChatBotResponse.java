package com.example.qaengine.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Chatbot_response")
public class ChatBotResponse {
    @Id
    private String id;
    private String questionId;
    private String explanation;
    private String recommendation;

    public ChatBotResponse() {

    }

    public ChatBotResponse(String id, String questionId, String explanation, String recommendation) {
        this.id = id;
        this.questionId = questionId;
        this.explanation = explanation;
        this.recommendation = recommendation;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getQuestionId() {
        return questionId;
    }

    public void setQuestionId(String questionId) {
        this.questionId = questionId;
    }

    public String getExplanation() {
        return explanation;
    }

    public void setExplanation(String explanation) {
        this.explanation = explanation;
    }

    public String getRecommendation() {
        return recommendation;
    }

    public void setRecommendation(String recommendation) {
        this.recommendation = recommendation;
    }
}
