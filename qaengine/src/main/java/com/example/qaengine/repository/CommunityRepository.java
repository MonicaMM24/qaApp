package com.example.qaengine.repository;

import com.example.qaengine.model.Community;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CommunityRepository extends MongoRepository<Community, String> {
}
