export function Tabs(props) {
    const {todos, currentTab, setCurrentTab} = props;
    const tabs = ["All", "Open", "Completed"];
    return (
        <nav className="tab-container">
            {tabs.map((tab, tabIndex) => {
                const number_of_task = tab === "All" ?
                    todos.length:
                        tab === "Open" ?
                            todos.filter(val => !val.complete).length:
                                todos.filter(val => val.complete).length;

                return (
                    <button onClick={() => {
                        setCurrentTab(tab);
                        }}
                        className={"tab-button" + (tab === currentTab ? " tab-selected" : "")} 
                        key={tabIndex}>
                        <h4>
                            {tab}
                            <span>({number_of_task})</span>
                        </h4>
                    </button>
                )
            })}
            <hr/>
        </nav>
    )
}