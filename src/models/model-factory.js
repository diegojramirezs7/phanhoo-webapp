// @ts-check
import { Community, Group, Person, Event, Location } from './main-models';

const mainModels = { Community, Group, Person, Event, Location };

export default class ModelFactory {
    static createFromJson(type, jsonObject) {
        const modelType = mainModels[type];
        return new modelType(jsonObject);
    }
}


