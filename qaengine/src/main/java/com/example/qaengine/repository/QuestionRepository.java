package com.example.qaengine.repository;


import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.qaengine.model.Question;

public interface QuestionRepository extends MongoRepository<Question, String> {
}
