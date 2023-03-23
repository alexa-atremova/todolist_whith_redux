export function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("todos", serializedState);
  } catch (e) {
    console.error("Ошибка сохранения состояния:", e);
  }
}

export function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("todos");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.error("Ошибка загрузки состояния:", e);
    return undefined;
  }
}
