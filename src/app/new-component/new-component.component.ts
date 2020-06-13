import { Component } from '@angular/core';


@Component({
	selector: 'app-new-component',
	templateUrl: './new-component.component.html',
	styleUrls: ['./new-component.component.scss']
})
export class NewComponentComponent {

	constructor() { }

	public addNumbers (
		number1: number,
		number2: number = 2
	): number {
		return number1 + number2;
	}

	public methodThatCallsAnother (): number {
		return this.addNumbers( 1, 2 );
	}
}
