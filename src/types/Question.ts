export type QuestionType = {
  id: number;
  question: string;
  answers: AnswerType[];
  pattern: string;
  img?: string;
};

export type AnswerType = {
  content: string;
  correct?: boolean;
};
