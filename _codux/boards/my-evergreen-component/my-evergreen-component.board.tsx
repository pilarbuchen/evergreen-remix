import { createBoard } from '@wixc3/react-board';
import MyEvergreenComponent from '../../../src/components/my-evergreen-component/my-evergreen-component';

export default createBoard({
    name: 'MyEvergreenComponent',
    Board: () => <MyEvergreenComponent />,
});
