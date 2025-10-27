class   MinStack{
    private min : number[];
    private stack : number[];

    constructor() {
        this.min = [];
        this.stack = [];
    }

    push(val : number) : void
    {
        if (this.stack.length === 0) this.min.push(val);
        this.stack.push(val);
        if (this.min[this.min.length - 1] >= val) this.min.push(val);
    }

    pop() : void
    {
        if (this.stack.length === 0) return;
        if (this.min[this.min.length - 1] === this.stack[this.stack.length - 1])
            this.min.pop();
        this.stack.pop();
    }

    top() : number
    {
        if (this.stack.length === 0) return 0;
        return this.stack[this.stack.length - 1];
    }

    getMin() : number
    {
        return this.min[this.min.length - 1];
    }

}
