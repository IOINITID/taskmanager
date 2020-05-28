import BoardComponent from "./components/board";
import BoardController from "./controllers/board";
import FilterComponent from "./components/filter";
import SiteMenuComponent from "./components/site-menu";
import TasksModel from "./models/tasks";
import {generateTasks} from "./mock/task";
import {generateFilters} from "./mock/filter";
import {render, RenderPosition} from "./utils/render";

const TASK_COUNT = 20;

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

const tasks = generateTasks(TASK_COUNT);
const tasksModel = new TasksModel();
tasksModel.setTasks(tasks);
const filters = generateFilters();

render(siteHeaderElement, new SiteMenuComponent(), RenderPosition.BEFOREEND);
render(siteMainElement, new FilterComponent(filters), RenderPosition.BEFOREEND);

const boardComponent = new BoardComponent();
const boardController = new BoardController(boardComponent, tasksModel);

render(siteMainElement, boardComponent, RenderPosition.BEFOREEND);
boardController.render(tasks);
