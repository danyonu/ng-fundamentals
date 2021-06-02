import { FormControl } from "@angular/forms";

function nameValidator (control: FormControl): {[s: string]: boolean} {
    if (!control.value.match(/^[A-Z]/)) {
        return {capitalLetter: true};
    }
}

export { nameValidator }