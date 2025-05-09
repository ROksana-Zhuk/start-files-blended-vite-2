import TodoList from '../components/TodoList/TodoList'
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import EditForm from '../components/EditForm/EditForm'

import Form from '../components/Form/Form';
export default function Todos() {

    const [todos, setTodos] = useState(() => {
        const savedTodos = window.localStorage.getItem("saved-todos");
        if (savedTodos !== null) {
            return JSON.parse(savedTodos);
        }
        return [];
      }
    );

    const [isEditing, setIsEditing] = useState(false);
    const [currentTodo, setCurrentTodo] = useState({});


    const handleEditTodo = (todo) => {
        setIsEditing(true);
        setCurrentTodo(todo);
    };

    const cancelUpdate = () => {
        setIsEditing(false);
        setCurrentTodo({});
    };




    const updateTodo = (todoText, todoId) => {
        setIsEditing(false);
        setCurrentTodo({});

        const filteredTodos = todos.filter(todo => todo.text === todoText);

        if (filteredTodos.length === 0) {

        const todoArray = todos.map((todo) =>
            {
                if (todoId !== todo.id) {
                    return todo;
                } else {
                    return {...todo, text: todoText}
                }
            }
        )
        setTodos(todoArray);
    } else {
        alert('TODO text already exists.');
    };
    };


    const [todoNumber, setTodoNumber] = useState(() => {
        const savedTodoNumber = window.localStorage.getItem("saved-todoNumber");
        if (savedTodoNumber !== null) {
            return savedTodoNumber;
        }
        return 1;
    });


    useEffect(() => {
        window.localStorage.setItem("saved-todos", JSON.stringify(todos));
    }, [todos]);

    useEffect(() => {
        window.localStorage.setItem("saved-todoNumber", todoNumber);
    }, [todoNumber]);


    const addNewTodo = (newTodoText)=> {
        //const newTodo = {
            //id: nanoid(),
            //text: textTodo
        //}

        const filteredTodos = todos.filter(todo => todo.text === newTodoText);

        if (filteredTodos.length === 0) {

          setTodos(( prevTodos) => {
            return [...prevTodos, {
                text: newTodoText,
                id: nanoid(),
                number: todoNumber
            }]
          });
          setTodoNumber(todoNumber + 1);
       } else {
        alert('TODO text already exists.');
       }
    }

    const deleteTodo = (todoId) => {
        setTodos(prevTodos => {
          return  prevTodos.filter(todo => todo.id !== todoId)
        });
    }


      return (
        <>
        {!isEditing && <Form onSubmit={addNewTodo} />}
        {isEditing && <EditForm updateTodo={updateTodo}
                                cancelUpdate={cancelUpdate}
                                todo={currentTodo}

        />}

          <TodoList todos={todos}
                    onDelete={deleteTodo}
                    onEdit={handleEditTodo}

          />

        </>
      );
    };

