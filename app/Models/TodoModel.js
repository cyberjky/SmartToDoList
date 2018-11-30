



export default class TodoModel {

    constructor(contents, completed) {
        this.contents = contents;
        this.completed = completed || false;
        this.createdAt = new Date();
    }
}