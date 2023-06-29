import { $ } from './svg_utils';

export default class Names {
    // constructor(parent, custom_html, options, tasks, gantt) {
    //     this.parent = parent;
    //     this.custom_html = custom_html;
    //     this.gantt = gantt;
    //     this.make(options, tasks);
    //     console.log(tasks);
    // }
    constructor(gantt, task) {
        this.task = task;
        this.gantt = gantt;
        this.make();
    }

    makeHeader() {
        const header = document.createElement('div');
        const headerText = document.createElement('span');
        header.classList.add('header');
        // const row_height = this.gantt.options.bar_height + this.gantt.options.padding;
        header.style.height = this.gantt.options.header_height + 10 + 'px';
        headerText.innerText = 'Aloha';

        header.appendChild(headerText);

        return header;
    }

    make() {
        // this.parent.innerHTML = `
        //     <div class="header"><span>Items</span></div>
        //     <div class="tasks"></div>
        // `;

        // this.hide();
        // this.header = this.parent.querySelector('.header');
        // this.tasksElement = this.parent.querySelector('.tasks');
        // this.tasksElement.style.display = 'flex';
        // this.tasksElement.style.flexDirection = 'column';
        // this.title = this.parent.querySelector('.title');
        // this.subtitle = this.parent.querySelector('.subtitle');
        // this.pointer = this.parent.querySelector('.pointer');

        // console.log(this.tasksElement);

        // const taskElements = [];
        const row_height =
            this.gantt.options.bar_height + this.gantt.options.padding;

        // for (let i = 0; i < tasks?.length; i++) {
        // console.log(tasks[i]);

        const parentDiv = document.createElement('div');
        const taskDiv = document.createElement('div');
        const editButton = document.createElement('button');
        const nameField = document.createElement('span');

        nameField.textContent = this.task?.name;

        parentDiv.classList.add('tasks');

        taskDiv.classList.add('task');
        taskDiv.style.height = `${row_height}px`;
        taskDiv.setAttribute('data-value', this.task?.id);
        taskDiv.appendChild(nameField);

        editButton.textContent = 'Muuda';

        $.on(editButton, 'click', (e) => {
            // console.log(this.gantt);
            this.gantt.trigger_event('edit', [this.task]);
        });

        parentDiv.append(taskDiv);
        // parentDiv.append(editButton, taskDiv);

        return parentDiv;

        return `<div><button id="task_button">trigger</button><div class='task' data-value='${this.task.id}' style='height: ${row_height}px;'><span>${this.task.name}</span></div></div>`;

        // console.log(emptyElement);
        // const taskElement = document.createElement('span');
        // taskElement.classList.add('single-task');
        // taskElement.innerText = tasks[i].name;
        // this.tasksElement.append(taskElement);
        // this.tasksElement.innerHTML = emptyElement;
        // }

        // console.log(this.$svg);
        // this.tasksElement.innerHTML = taskElements.join(' ');
        // this.header.style.height = options.header_height + 10 + 'px';
        // this.title.innerText = 'asdjasdasdasd';

        // const taskButton = this.parent.querySelector('#task_button');
        // $.on(taskButton, 'click', (e) => {
        //     console.log(this.gantt);
        //     this.gantt.trigger_event('edit', [this.gantt.get_task]);
        // });
    }

    // make(options, tasks) {
    //     this.parent.innerHTML = `
    //         <div class="header"><span>Items</span></div>
    //         <div class="tasks"></div>
    //     `;

    //     // this.hide();
    //     this.header = this.parent.querySelector('.header');
    //     this.tasksElement = this.parent.querySelector('.tasks');
    //     // this.tasksElement.style.display = 'flex';
    //     // this.tasksElement.style.flexDirection = 'column';
    //     // this.title = this.parent.querySelector('.title');
    //     // this.subtitle = this.parent.querySelector('.subtitle');
    //     // this.pointer = this.parent.querySelector('.pointer');

    //     // console.log(this.tasksElement);

    //     const taskElements = [];
    //     const row_height = options.bar_height + options.padding;

    //     for (let i = 0; i < tasks?.length; i++) {
    //         // console.log(tasks[i]);
    //         taskElements.push(
    //             `<div><button id="task_button">trigger</button><div class='task' data-value='${tasks[i].id}' style='height: ${row_height}px;'><span>${tasks[i].name}</span></div></div>`
    //         );
    //         // console.log(emptyElement);
    //         // const taskElement = document.createElement('span');
    //         // taskElement.classList.add('single-task');
    //         // taskElement.innerText = tasks[i].name;
    //         // this.tasksElement.append(taskElement);
    //         // this.tasksElement.innerHTML = emptyElement;
    //     }

    //     console.log(this.$svg);
    //     this.tasksElement.innerHTML = taskElements.join(' ');
    //     this.header.style.height = options.header_height + 10 + 'px';
    //     // this.title.innerText = 'asdjasdasdasd';

    //     const taskButton = this.parent.querySelector('#task_button');
    //     $.on(taskButton, 'click', (e) => {
    //         console.log(this.gantt);
    //         this.gantt.trigger_event('edit', [this.gantt.get_task]);
    //     });
    // }

    // show(options) {
    //     if (!options.target_element) {
    //         throw new Error('target_element is required to show popup');
    //     }
    //     if (!options.position) {
    //         options.position = 'left';
    //     }
    //     const target_element = options.target_element;

    //     if (this.custom_html) {
    //         let html = this.custom_html(options.task);
    //         html += '<div class="pointer"></div>';
    //         this.parent.innerHTML = html;
    //         this.pointer = this.parent.querySelector('.pointer');
    //     } else {
    //         // set data
    //         this.title.innerHTML = options.title;
    //         this.subtitle.innerHTML = options.subtitle;
    //         this.parent.style.width = this.parent.clientWidth + 'px';
    //     }

    //     // set position
    //     let position_meta;
    //     if (target_element instanceof HTMLElement) {
    //         position_meta = target_element.getBoundingClientRect();
    //     } else if (target_element instanceof SVGElement) {
    //         position_meta = options.target_element.getBBox();
    //     }

    //     if (options.position === 'left') {
    //         this.parent.style.left =
    //             position_meta.x + (position_meta.width + 10) + 'px';
    //         this.parent.style.top = position_meta.y + 'px';

    //         this.pointer.style.transform = 'rotateZ(90deg)';
    //         this.pointer.style.left = '-7px';
    //         this.pointer.style.top = '2px';
    //     }

    //     // show
    //     this.parent.style.opacity = 1;
    // }

    // hide() {
    //     this.parent.style.opacity = 0;
    //     this.parent.style.left = 0;
    // }
}
