export class Student{
    constructor(
        public id: number,
        public first_name: string,
        public last_name: string,
        public adrress: string,
        public phone: string,
        public is_active: boolean,
        public marks_avg: number) { }
}