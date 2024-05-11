package com.example.qaengine.repository;

import com.example.qaengine.model.SavedItem;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface SavedItemRepository extends MongoRepository<SavedItem, String> {
}
