import { v4 as uuidv4 } from "uuid";

const todoList = [
  { id: uuidv4(), text: "Сделать покупки", done: false },
  { id: uuidv4(), text: "Позвонить другу", done: true },
  { id: uuidv4(), text: "Написать отчет", done: false },
  { id: uuidv4(), text: "Погулять в парке", done: true },
  { id: uuidv4(), text: "Выучить новый язык программирования", done: false },
  { id: uuidv4(), text: "Сделать уборку в доме", done: false },
];
export default todoList;
