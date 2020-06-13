import { NewComponentComponent } from './new-component.component';


describe('NewComponentComponent', () => {
	let fixture: NewComponentComponent;

	beforeEach( () => {
		fixture = new NewComponentComponent();
	});

	describe( 'addNumbers', () => {
		it( 'should add together the 2 numbers passed', () => {

			const result = fixture.addNumbers( 1, 3 );

			expect( result ).toEqual( 4 );
		});

		it( 'use 2 as the default value if second number is not passed', () => {

			const result = fixture.addNumbers( 1 );

			expect( result ).toEqual( 3 );
		});
	});

	describe( 'methodThatCallsAnother', () => {
		it ( 'should call call addNumbers', () => {
			const addNumbersSpy = jest.spyOn( fixture, 'addNumbers' );

			fixture.methodThatCallsAnother();

			expect( addNumbersSpy ).toBeCalledWith( 1, 2 );
		});
	});
});
