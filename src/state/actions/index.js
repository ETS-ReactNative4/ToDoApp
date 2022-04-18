import AsyncStorage from '@react-native-async-storage/async-storage';

export const getTodo = (defaultTodo) => ({ setState, getState }) => {
    setState({ toDoTask: defaultTodo });
};

export const addTodo = (todoObj, callBack) => ({ setState, getState }) => {
    const state = getState();
    let temp = [];
    temp.push(todoObj);
    temp.push(...state.toDoTask);
    setState({ toDoTask: temp });
    callBack();
};

export const changeTodoStatus = (selectItem) => async ({ setState, getState }) => {
    const state = getState();
    let toDoList = [...state.toDoTask];
    let tempCompleteData = [];
    let tempLastCompleteData = [];
    toDoList.forEach(item => {
        if (item.title == selectItem.title) {
            let selectObj = { ...selectItem, check: !selectItem.check }
            tempCompleteData.push(selectObj);
        } else {
            tempLastCompleteData.push(item);
        }
    });
    let finalToDoList = [...tempCompleteData, ...tempLastCompleteData];
    await AsyncStorage.setItem('@todoData', JSON.stringify(finalToDoList));
    setState({ toDoTask: finalToDoList });
};
