import { Model } from 'sequelize-typescript';
export declare class Option extends Model {
    id: number;
    questionID: number;
    nextQuestionID: number;
    answer: string;
}
