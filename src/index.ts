import "reflect-metadata";
import {createConnection, IsNull} from "typeorm";
import {A} from "./entity/A";
import { should } from "chai";

should();

createConnection().then(async connection => {

    const thing = new A();
    thing.b = null;

    await connection.manager.save(thing);

    const things = await connection.manager.find(A, {
        where: {
            b: IsNull(),
        }
    });

    things.should.have.length.above(0);

}).catch(error => console.log(error));
