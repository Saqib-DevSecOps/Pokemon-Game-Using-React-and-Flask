import Header from "./include/Header";
import SideMenu from "./include/SideMenu";
import MenuWrapper from "./include/MenuWrapper";

const Base = ({children}) => {
    return (
        <>
            <SideMenu/>
            <MenuWrapper/>
            <Header/>
            {children}
        </>
    )

}

export default Base