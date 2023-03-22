import { v4 as uuid } from "uuid";

const todoList = [
  { id: uuid(), text: "Сделать покупки", done: false },
  { id: uuid(), text: "Позвонить другу", done: true },
  { id: uuid(), text: "Написать отчет", done: false },
  { id: uuid(), text: "Погулять в парке", done: true },
  { id: uuid(), text: "Выучить новый язык программирования", done: false },
  { id: uuid(), text: "Сделать уборку в доме", done: false },
];
export default todoList;
