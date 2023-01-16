import { action as makeAction } from "./io";
import array from "./array"



function main() {
    while (true) {
        const action = makeAction();
        array(action);
    }
}

main()