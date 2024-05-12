package com.example.qaengine.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;

@Document(collection = "Question")

public class Question {
    @Id

    private String id;
    private String title;
    private List<String> tags;
    private List<Option> options;

    public static class Option {
        private String text;
        private boolean isCorrect;

        public Option() {

        }

        public Option(String text, boolean isCorrect) {
            this.text = text;
            this.isCorrect = isCorrect;
        }

        public String getText() {
            return text;
        }

        public void setText(String text) {
            this.text = text;
        }

        public boolean isCorrect() {
            return isCorrect;
        }

        public void setCorrect(boolean correct) {
            isCorrect = correct;
        }

    }


    public Question() {

    }

    public Question(String id, String title, List<String> tags, List<Option> options) {
        this.id = id;
        this.title = title;
        this.tags = tags;
        this.options = options;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public List<String> getTags() {
        return tags;
    }

    public void setTags(List<String> tags) {
        this.tags = tags;
    }

    public List<Option> getOptions() {
        return options;
    }

    public void setOptions(List<Option> options) {
        this.options = options;
    }

    public String toString() {
        return "Question{" +
                "id='" + id + '\'' +
                ", title='" + title + '\'' +
                ", tags=" + tags +
                ", options=" + options.toString() +
                '}';
    }

    private String optionsToString() {
        StringBuilder optionsStringBuilder = new StringBuilder("[");
        for (Option option : options) {
            optionsStringBuilder.append("{text='")
                    .append(option.getText())
                    .append("', isCorrect=")
                    .append(option.isCorrect())
                    .append("}, ");
        }

        if(optionsStringBuilder.length() > 1 ) {
            optionsStringBuilder.setLength(optionsStringBuilder.length() - 2);
        }
        optionsStringBuilder.append("]");
        return optionsStringBuilder.toString();
    }


}
