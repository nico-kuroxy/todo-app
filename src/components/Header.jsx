export function Header(props) {
    const { todos } = props;
    const length = todos.length;
    const is_task_plural = length >= 1;
    const task_or_tasks = is_task_plural? "tasks":"task";
    return (
        <header>
            <h1 className="text-gradient">You have {length} open {task_or_tasks}.</h1>
        </header>
    )
}