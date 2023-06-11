
import { ButtonDrawer } from "./ButtonDrawer";
import ThemeSwitcher from "./ThemeSwitcher";

export default function NavBar() {
    return (
        <nav>
            <div className="flex items-center justify-between mx-auto p-4">
                <div className="flex items-center">
                    <ButtonDrawer />
                </div>
                {/* <div className="items-center justify-center text-center w-full">
                    <h3 className="text-black dark:text-white text-2xl justify-center">HEART</h3>
                </div> */}
                <div className="flex items-center">
                    <ThemeSwitcher />
                </div>
            </div>
        </nav>
    );
}