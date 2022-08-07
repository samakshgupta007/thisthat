import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  ForeignKey
} from 'sequelize-typescript';

@Table
export class Option extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ primaryKey: true, allowNull: false, unique: true })
  // OptionID
  id: number;

  // @ForeignKey(() => Question)
  @Column({ allowNull: false, unique: true })
  questionID: number;

  // @ForeignKey(() => Question)
  @Column({ allowNull: false, unique: true })
  nextQuestionID: number;

  @Column({ allowNull: false })
  answer: string;
}
