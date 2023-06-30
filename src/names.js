import { $ } from './svg_utils';

export default class Names {
    constructor(gantt, task) {
        this.task = task;
        this.gantt = gantt;
        this.make();
    }

    makeHeader() {
        if(this.gantt){

            const header = document.createElement('div');
            const headerText = document.createElement('span');
            header.classList.add('header');
            header.style.height = this.gantt.options.header_height + 10 + 'px';
            headerText.innerText = this.gantt.options.custom_names.header;

            header.appendChild(headerText);

            return header;
        }
    }

    make() {

        if(this.task){

      
        const row_height =
            this.gantt.options.bar_height + this.gantt.options.padding;

        const parentDiv = document.createElement('div');
        const taskDiv = document.createElement('div');

        const nameField = document.createElement('span');


        nameField.innerText = this.task.name;
        
        parentDiv.classList.add('tasks');

        taskDiv.classList.add('task');
        taskDiv.style.height = row_height + 'px';
        taskDiv.setAttribute('data-value', this.task.id);
        taskDiv.appendChild(nameField);

        this.gantt.options.custom_names.buttons.forEach(button => {
            const actionButton = document.createElement('button');
            actionButton.innerText = button.label;
            $.on(actionButton, 'click', (e) => {
                this.gantt.trigger_event(button.trigger, [this.task]);
            });

            parentDiv.appendChild(actionButton);
        })

        parentDiv.append(taskDiv);
 

        return parentDiv;
        }
    }

}
