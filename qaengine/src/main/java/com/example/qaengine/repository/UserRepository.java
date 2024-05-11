package com.example.qaengine.repository;

import com.example.qaengine.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {
}
