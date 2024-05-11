package com.example.qaengine.repository;

import com.example.qaengine.model.Tip;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TipRepository extends MongoRepository<Tip, String> {
}
