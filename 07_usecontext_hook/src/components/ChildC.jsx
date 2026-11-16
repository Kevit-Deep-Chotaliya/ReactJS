import { useContext } from 'react';
import { ThemeContext, UserContext } from '../App';

const ChildC = () => {

    const user = useContext(UserContext);
    const {theme, setTheme} = useContext(ThemeContext);

    const ToggleTheme = () => {
        if(theme === 'light') {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }
    return (
        // <div>data: {user.name}</div>
        <div>
            <button onClick={ToggleTheme}>
                Change Theme
            </button>
            <h2>data: {user.name}</h2>
        </div>
    )
}

export default ChildC