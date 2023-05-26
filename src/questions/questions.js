import capitalQuestions from "./capitalsQuestions"
import generalKnowledgeQuestions from "./generalKnowledge";
import marvelQuestions from "./marvelQuestions";
import famousQuotes from "./famousQuotes";
const questions = {
    capitals: {
        quizName: 'Capitals Quiz',
        image: "./images/capitals/capitals.jpg",
        questions: capitalQuestions
    },
    general_knowledge: {
        quizName: 'General Knowledge Quiz',
        image: "./images/generalKnowledge/generalKnowledge.jpg",
        questions: generalKnowledgeQuestions
    },
    marvel: {
        quizName: 'marvel quiz',
        image: "./images/marvel/marvel.jpg",
        questions: marvelQuestions
    },
    famous_quotes: {
        quizName: "Famous Quotes Quiz",
        image: "./images/quotes/vincentvangogh.jpg",
        questions: famousQuotes
    }
}

export default questions;

