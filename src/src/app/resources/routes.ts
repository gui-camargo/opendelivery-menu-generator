import * as _pizzaExample from './examples/pizzaExample.json'
import { IResource } from "../module/models/example";
import { ExamplesEnum } from './example-id'

export const resource: IResource = {
    examples: [{
        name: "Pizza Sample",
        id: ExamplesEnum.Pizza,
        text: JSON.stringify(_pizzaExample)
    }]
}
