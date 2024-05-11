package com.example.qaengine.repository;

import com.example.qaengine.model.Answer;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AnswerRepository extends MongoRepository<Answer, String> {
}
