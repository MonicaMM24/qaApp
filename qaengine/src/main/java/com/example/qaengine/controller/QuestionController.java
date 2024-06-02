package com.example.qaengine.controller;

import com.example.qaengine.model.Question;
import com.example.qaengine.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/questions")

public class QuestionController {

    @Autowired
    public QuestionRepository questionRepository;


    @GetMapping(produces = "application/json")
    private List<Question> getAllQuestions() {
        return questionRepository.findAll();
    }

    @PostMapping
    public Question createQuestion(@RequestBody Question question) {
        return questionRepository.save(question);
    }
}
