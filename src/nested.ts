import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    return questions.filter((q: Question): boolean => q.published);
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty".
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    return questions.filter(
        (q: Question): boolean =>
            q.body !== "" || q.expected !== "" || q.options.length > 0
    );
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const found = questions.find((q: Question): boolean => q.id === id);
    return found !== undefined ? found : null;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    return questions.filter((q: Question): boolean => q.id !== id);
}

/***
 * Consumes an array of questions and returns a new array containing just the names.
 */
export function getNames(questions: Question[]): string[] {
    return questions.map((q: Question): string => q.name);
}

/**
 * Consumes an array of Questions and produces a corresponding array of Answers.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    return questions.map(
        (q: Question): Answer => ({
            questionId: q.id,
            text: "",
            submitted: false,
            correct: false
        })
    );
}

/***
 * Consumes an array of Questions and produces a new array where each question is published.
 */
export function publishAll(questions: Question[]): Question[] {
    return questions.map(
        (q: Question): Question => ({ ...q, published: true })
    );
}

/***
 * Consumes an array of Questions and produces a new array with a blank question added.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    return [...questions, makeBlankQuestion(id, name, type)];
}

/***
 * Consumes an array of Questions and produces a new array, where all
 * the Questions are the same EXCEPT for the one with the given `targetId` (newName).
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    return questions.map(
        (q: Question): Question =>
            q.id === targetId ? { ...q, name: newName } : q
    );
}

/**
 * Consumes an array of Questions and updates options for a target question.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    return questions.map((q: Question): Question => {
        if (q.id !== targetId) {
            return q;
        }
        let updatedOptions: string[];
        if (targetOptionIndex === -1) {
            updatedOptions = [...q.options, newOption];
        } else {
            updatedOptions = [...q.options];
            updatedOptions[targetOptionIndex] = newOption;
        }
        return { ...q, options: updatedOptions };
    });
}
