import {render, screen} from '@testing-library/react';
import Repos from './Repos';


test("on displaying the user's repositories", () => {
	render(<Repos />);
	screen.debug();
});