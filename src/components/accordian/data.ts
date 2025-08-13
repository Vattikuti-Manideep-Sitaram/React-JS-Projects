interface Item {
  id: number,
  question: string,
  answer: string
}

const data: Item[] = [
  {
    id: 1,
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces."
  },
  {
    id: 2,
    question: "What is a component?",
    answer: "A component is a reusable piece of UI in a React application."
  },
  {
    id: 3,
    question: "What is state in React?",
    answer: "State is an object that determines how a component renders and behaves."
  },
  {
    id: 4,
    question: "What are props?",
    answer: "Props are inputs to components that allow data to be passed from parent to child."
  }
];

export default data;