export class Post {
    id: number;
    name: string;
    description: string;
    abstract: string;
    category: string;
    dateAndHour: Date;

    constructor() {
        this.id = 0;
        this.name = "";
        this.description = "";
        this.abstract = "";
        this.category = "Nenhuma";
        this.dateAndHour = new Date();
    }
}