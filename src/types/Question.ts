export type QuestionType = {
  id: number;
  question: string;
  answers: AnswerType[];
  img?: string;
};

export type AnswerType = {
  content: string;
  correct?: boolean;
};
