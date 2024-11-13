import React, { useState } from 'react';
import {
  Button,
  Pane,
  Text,
  TextInputField,
  Select,
  Table,
  Badge,
  Dialog,
  toaster,
  Heading,
  IconButton,
  SearchInput,
  Menu,
  Popover,
  Position,
  Avatar,
  Switch,
  Spinner
} from 'evergreen-ui';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
}

const MyEvergreenComponent = () => {
  const [isDialogShown, setIsDialogShown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedView, setSelectedView] = useState('grid');
  const [isLoading, setIsLoading] = useState(false);

  // Mock data for the table
  const users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Inactive' },
    { id: 3, name: 'Bob Wilson', email: 'bob@example.com', role: 'Editor', status: 'Active' },
  ];

  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      toaster.success('Form submitted successfully!');
      setIsLoading(false);
      setIsDialogShown(false);
    }, 1000);
  };

  return (
    <Pane>
      {/* Header */}
      <Pane
        elevation={1}
        padding={16}
        background="tint2"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Heading size={600}>Dashboard</Heading>
        <Pane display="flex" alignItems="center" gap={16}>
          <SearchInput
            placeholder="Search..."
            value={searchQuery}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
          />
          <Popover
            position={Position.BOTTOM_RIGHT}
            content={
              <Menu>
                <Menu.Group>
                  <Menu.Item>Profile</Menu.Item>
                  <Menu.Item>Settings</Menu.Item>
                </Menu.Group>
                <Menu.Divider />
                <Menu.Group>
                  <Menu.Item intent="danger">Logout</Menu.Item>
                </Menu.Group>
              </Menu>
            }
          >
            <Avatar name="User Name" size={32} cursor="pointer" />
          </Popover>
        </Pane>
      </Pane>

      {/* Main Content */}
      <Pane padding={16}>
        {/* Controls */}
        <Pane marginBottom={16} display="flex" justifyContent="space-between" alignItems="center">
          <Pane display="flex" gap={16} alignItems="center">
            <Switch height={20} marginLeft={16} />
          </Pane>
          <Button appearance="primary" onClick={() => setIsDialogShown(true)} >
            Add New User
          </Button>
        </Pane>

        {/* Table */}
        <Table>
          <Table.Head>
            <Table.TextHeaderCell>Name</Table.TextHeaderCell>
            <Table.TextHeaderCell>Email</Table.TextHeaderCell>
            <Table.TextHeaderCell>Role</Table.TextHeaderCell>
            <Table.TextHeaderCell>Status</Table.TextHeaderCell>
            <Table.TextHeaderCell>Actions</Table.TextHeaderCell>
          </Table.Head>
          <Table.Body>
            {users.map(user => (
              <Table.Row key={user.id}>
                <Table.TextCell>{user.name}</Table.TextCell>
                <Table.TextCell>{user.email}</Table.TextCell>
                <Table.TextCell>
                  <Badge color={user.role === 'Admin' ? 'blue' : 'neutral'}>
                    {user.role}
                  </Badge>
                </Table.TextCell>
                <Table.TextCell>
                  <Badge color={user.status === 'Active' ? 'green' : 'red'}>
                    {user.status}
                  </Badge>
                </Table.TextCell>
                <Table.Cell>
                  <Pane display="flex" gap={8}>
                    <IconButton />
                    <IconButton intent="danger" />
                  </Pane>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>

        {/* Add User Dialog */}
        <Dialog
          isShown={isDialogShown}
          title="Add New User"
          onCloseComplete={() => setIsDialogShown(false)}
          confirmLabel="Add User"
          isConfirmLoading={isLoading}
          onConfirm={handleSubmit}
        >
          <Pane>
            <TextInputField
              label="Name"
              placeholder="Enter user name"
              required
            />
            <TextInputField
              label="Email"
              placeholder="Enter email address"
              type="email"
              required
            />
            <Select width="100%" marginBottom={24}>
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="editor">Editor</option>
            </Select>
            <Select width="100%">
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </Select>
          </Pane>
        </Dialog>

        {/* Toast notifications will appear here */}
      </Pane>

      {/* Footer */}
      <Pane
        borderTop
        background="tint2"
        padding={16}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Text size={300} color="muted">
          © 2024 Your Company. All rights reserved.
        </Text>
      </Pane>
    </Pane>
  );
};

export default MyEvergreenComponent;
