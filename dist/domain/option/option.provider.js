"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optionProviders = void 0;
const option_entity_1 = require("./option.entity");
exports.optionProviders = [
    {
        provide: 'OPTION_REPOSITORY',
        useValue: option_entity_1.Option,
    },
];
//# sourceMappingURL=option.provider.js.map