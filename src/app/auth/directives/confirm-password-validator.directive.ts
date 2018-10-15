import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[appConfirmEqualValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: ConfirmPasswordValidatorDirective,
        multi: true
    }]
})
export class ConfirmPasswordValidatorDirective implements Validator {
    @Input() appConfirmEqualValidator: string;
    validate(control: AbstractControl): {[key: string]: any} | null {
        const controlToCompare = control.parent.get(this.appConfirmEqualValidator);
        // control is Confirm Password field
        // controlToCompare is Password field
        if (controlToCompare && controlToCompare.value !== control.value) {
            return {'notEqual': true};
        }
        return null;
    }
}
