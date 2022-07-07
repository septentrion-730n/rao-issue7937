import * as React from "react";
import {
  Admin,
  CustomRoutes,
  DashboardMenuItem,
  Layout,
  LayoutProps,
  ListGuesser,
  Menu,
  MenuItemLink,
  MenuProps,
  Resource,
  Title,
} from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { Route } from "react-router-dom";
import { Card, CardContent } from "@mui/material";
import BookIcon from "@mui/icons-material/Book";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const Comp1 = () => (
  <Card>
    <Title title="Comp1" />
    <CardContent>Comp1 content</CardContent>
  </Card>
);
const Comp2 = () => (
  <Card>
    <Title title="Comp2" />
    <CardContent>Comp2 content</CardContent>
  </Card>
);

const MyMenu = (props: MenuProps) => (
  <Menu {...props}>
    <DashboardMenuItem />
    <MenuItemLink to="/users" primaryText="users" leftIcon={<BookIcon />} />
    <MenuItemLink to="/posts" primaryText="posts" leftIcon={<BookIcon />} />
    <MenuItemLink to="/comp1" primaryText="comp1" leftIcon={<BookIcon />} />
    <MenuItemLink to="/comp2" primaryText="comp2" leftIcon={<BookIcon />} />
  </Menu>
);

const MyLayout = (props: LayoutProps) => <Layout {...props} menu={MyMenu} />;

const App = () => {
  return (
    <Admin layout={MyLayout} dataProvider={dataProvider}>
      <Resource name="users" list={ListGuesser} />
      <Resource name="posts" list={ListGuesser} />
      <CustomRoutes>
        <Route path="/comp1" element={<Comp1 />} />
        <Route path="/comp2" element={<Comp2 />} />
      </CustomRoutes>
    </Admin>
  );
};

export default App;
