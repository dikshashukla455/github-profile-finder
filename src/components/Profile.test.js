import {render, screen} from '@testing-library/react';
import Profile from './Profile';


test("on displaying my profile", () => {
	render(<Profile />);
	screen.debug();
});
