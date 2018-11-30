import { observable } from 'mobx';
import TodoModel from "./Models/TodoModel";

class ItemManager {

    // @observable
    todoLists: [];

    init() {

    }

    addNewitem = (item) => {
        this.todoLists.push(item);
        // let hasItem = item.contents.trim().length > 0;
        // if (hasItem) {
        //
        // }
    };

    removeListItem(item){
        this.todoLists = this.todoLists.filter( l => {
            return l.createdAt !== item.createdAt;
        });
    }

    onCompleated = (index) => {
        let chooseItem = this.todoLists[index];
        chooseItem.completed = !chooseItem.completed;
    };

}

export default new ItemManager();
