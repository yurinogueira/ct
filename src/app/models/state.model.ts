
export class StateModel {

    public state: string;
    public name: string;
    public enabled: boolean;

    constructor(state: string, name: string, enabled: boolean) {
        this.state = state;
        this.name = name;
        this.enabled = enabled;
    }

}
