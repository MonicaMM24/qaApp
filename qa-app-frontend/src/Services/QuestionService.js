const questions = [
    {
        text: '',
        options: ['','','',''],
        correctAnswer: '',
    },
    {
        text: '',
        options: ['','','',''],
        correctAnswer: '',
    },
];

const QuestionService = {
    getQuestions: async () => {
        //Return a promise that resolves with the questions
        return new Promise((resolve) => setTimeout(() =>resolve(questions),1000));
    },
};

export default QuestionService;
