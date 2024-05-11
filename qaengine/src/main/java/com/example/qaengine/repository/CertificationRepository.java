package com.example.qaengine.repository;

import com.example.qaengine.model.Certification;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CertificationRepository extends MongoRepository<Certification, String> {
}
