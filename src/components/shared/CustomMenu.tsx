import {
    // Toolbar,
    ToolbarButton,
    // ToolbarDivider,
    Menu,
    MenuTrigger,
    MenuPopover,
    MenuList,
    MenuItem,
} from "@fluentui/react-components";
import { MoreHorizontal24Filled } from "@fluentui/react-icons";
import { useNavigate } from "react-router-dom";

interface CustomMenuProps {
    fullScreenRoute: string;
    docsRoute: string;
}

export const CustomMenu = ({ docsRoute, fullScreenRoute }: CustomMenuProps) => {
    const navigate = useNavigate();

    return (
        <div className="float-right right-0 flex-1">
            <Menu>
                <MenuTrigger>
                    <ToolbarButton aria-label="More" icon={<MoreHorizontal24Filled />} />
                </MenuTrigger>

                <MenuPopover>
                    <MenuList>
                        <MenuItem
                            onClick={() => navigate(fullScreenRoute)}
                        >
                            Pantalla completa
                        </MenuItem>
                        <MenuItem
                            onClick={() => navigate(docsRoute)}
                        >
                            Documentación
                        </MenuItem>
                        {/* <MenuItem>Compartir</MenuItem> */}
                    </MenuList>
                </MenuPopover>
            </Menu>
        </div>
    )
}
