import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  Create,
  Edit,
  SimpleForm,
  TextInput,
  EditButton,
} from 'react-admin';

export const UserList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="email" />
      <TextField source="username" />
      <EditButton basePath="/AppUsers" />
    </Datagrid>
  </List>
)

export const UserCreate = (props) => (
  <Create title="Create a User" {...props}>
    <SimpleForm>
      <TextInput source="username" />
      <TextInput source="email" type="email" />
      <TextInput source="password" type="password" />
    </SimpleForm>
  </Create>
);

const UserTitle = ({ record }) => {
  return <span>User {record ? `"${record.username}"` : ''}</span>;
};


export const UserEdit = (props) => (
  <Edit title={<UserTitle />} {...props}>
    <SimpleForm>
      <TextInput source="username" />
      <TextInput source="email" type="email" />
      <TextInput source="password" type="password" />
    </SimpleForm>
  </Edit>
);
