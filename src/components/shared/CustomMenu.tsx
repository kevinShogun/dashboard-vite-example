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

export const CustomMenu = () => {
    return (
        <div className="float-right right-0 flex-1">
            <Menu>
                <MenuTrigger>
                    <ToolbarButton aria-label="More" icon={<MoreHorizontal24Filled />} />
                </MenuTrigger>

                <MenuPopover>
                    <MenuList>
                        <MenuItem>Pantalla completa </MenuItem>
                        <MenuItem>Documentación</MenuItem>
                        {/* <MenuItem>Compartir</MenuItem> */}
                    </MenuList>
                </MenuPopover>
            </Menu>
        </div>
    )
}
