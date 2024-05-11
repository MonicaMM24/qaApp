package com.example.qaengine.service;

import com.example.qaengine.model.SavedItem;
import com.example.qaengine.repository.SavedItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SavedItemService {

    private final SavedItemRepository savedItemRepository;

    @Autowired
    public SavedItemService(SavedItemRepository savedItemRepository) {
        this.savedItemRepository = savedItemRepository;
    }

    public List<SavedItem> getAllSavedItems() {
        return savedItemRepository.findAll();
    }
}
