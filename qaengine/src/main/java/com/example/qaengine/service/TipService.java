package com.example.qaengine.service;

import com.example.qaengine.model.Tip;
import com.example.qaengine.repository.TipRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TipService {

    private final TipRepository tipRepository;

    @Autowired
    public TipService(TipRepository tipRepository) {
        this.tipRepository = tipRepository;
    }

    public List<Tip> getAllTips() {
        return tipRepository.findAll();
    }
}
