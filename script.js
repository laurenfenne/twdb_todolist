let ans = prompt("What would you like to do?");
const todos = ['Placeholder task', 'Eat'];

//Don't get fooled into the ||or here
while (ans !== 'quit' && ans !== 'q') {
    if (ans === 'list' || ans === 'l') {
        console.log ("Listing TODOS...");
        /*
        for(let i of todos){
            console.log(`[${}]: ${i}`);
        }*/
        for (let i = 0; i < todos.length; i++) {
            console.log(`[${i}]: ${todos[i]}`);
        }
    }
    else if (ans === 'new' || ans === 'n') {
        let newTask = prompt("Enter your new task");
        todos.push(newTask);
        console.log(`Added task: ${newTask} to position [${todos.length - 1}]`);
    }
    ans = prompt("What would you like to do?");
}
console.log ("OK fine you are a quitter");