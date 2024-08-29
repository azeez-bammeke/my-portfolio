import project2 from "../assets/img.png";
import supermarket_image from "../assets/supermarket-image.png";
import todo_project from "../assets/todo-project.png";

const PROJECTS = [
    {
        id: 1,
        displayLink: "Supermarket App",
        title: "Supermarket App (C# .Net)",
        description: "",
        link: "https://supermarket-app-uz9w.onrender.com/",
        image: supermarket_image
    },
    {
        id: 2,
        title: "Springboot/Microservice",
        displayLink: "Github Link",
        description: "",
        link: "https://github.com/azeez-bammeke/Micros-Service-latest.git",
        image: project2
    },

    {
        id: 3,
        title: "Todo App (Python - Fast API)",
        displayLink: "Todo App",
        description: "",
        link: "https://todo-app-dnta.onrender.com",
        image: todo_project
    }
];

export default PROJECTS;