import Vue from "vue";
import {
  Button,
  Form,
  FormItem,
  Input,
  Message,
  Container,
  Aside,
  Main,
  Header,
  Menu,
  Submenu,
  MenuItem,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  Col,
  Row,
  Table,
  TableColumn,
  Switch,
  Tooltip,
  Pagination,
  Dialog,
  MessageBox,
  Tag
} from "element-ui";

Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Container);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Header);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Card);
Vue.use(Col);
Vue.use(Row);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Switch);
Vue.use(Tooltip);
Vue.use(Pagination);
Vue.use(Dialog);
Vue.use(Tag);
Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox;
