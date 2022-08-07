import { Option } from './option.entity';

export const optionProviders = [
  {
    provide: 'OPTION_REPOSITORY',
    useValue: Option,
  },
];
