import { __awaiter } from "tslib";
export class Sample {
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Here we are!');
        });
    }
    runSomethingElse() {
        console.log('Here we are again!');
    }
}
const sample = new Sample();
sample.run();
