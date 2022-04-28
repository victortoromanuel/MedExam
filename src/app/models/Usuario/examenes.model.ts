export class Examenes{
    public name: string;
    public time: string;
    public min: number;
    public sec: number;
    public amountQuestions: number;
    public desc: string;
    public answers: Array<string>;
    public correctAnswer: string;
    public solution: string;

    constructor(name: string, desc: string, time: string, min: number, sec: number, amountQuestions: number,
        answers: Array<string>, correctAnswer: string, solution: string){
        this.name = name;
        this.desc = desc;
        this.time = time;
        this.min = min;
        this.sec = sec;
        this.amountQuestions = amountQuestions;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
        this.solution = solution;
    }
}