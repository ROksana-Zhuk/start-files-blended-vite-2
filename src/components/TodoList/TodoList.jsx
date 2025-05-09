import Grid from '../Grid/Grid'
import GridItem from '../GridItem/GridItem'
import TodoListItem from '../TodoListItem/TodoListItem'



export default function TodoList({ todos, onDelete, onEdit }) {

  return (
    <Grid>
      {todos.map((todo) => {
        return <GridItem key={todo.id}>
          <TodoListItem todoProp={todo}
                        count={todo.number}
                        onDelete={onDelete}
                        onEdit={onEdit}
          />
        </GridItem>
      }
      )}
    </Grid>
)
};
