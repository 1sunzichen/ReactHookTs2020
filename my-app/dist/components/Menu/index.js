import Menu from './menu';
import SubMenu from './subMenu';
import MenuItem from './menuItem';
// Menu.Item=MenuItem;
var TransMenu = Menu;
TransMenu.Item = MenuItem;
TransMenu.SubMenu = SubMenu;
export default TransMenu;
