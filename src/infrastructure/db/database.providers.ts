import { Sequelize } from 'sequelize-typescript';
import { Option } from 'src/domain/option/option.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: 'src/infrastructure/db/database.sqlite',
      });
      sequelize.addModels([Option]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
