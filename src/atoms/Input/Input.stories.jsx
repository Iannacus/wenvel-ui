import Input from "./Input";

export default {
  title: "Atoms/TextInput",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["primary", "secondary", "basic", "standard", "premium"],
      control: "select",
    },
    label: {
      control: "text",
    },
    fullWidth: {
      control: "boolean",
    },
  },
};

export const Default = {
  render: (args) => <Input {...args} />,
};

export const Primary = {
  render: () => <Input variant="primary" label="primary" />,
};

export const Secondary = {
  render: () => <Input variant="secondary" label="secondary" />,
};

export const Basic = {
  render: () => <Input variant="basic" label="basic" />,
};

export const Standard = {
  render: () => <Input variant="standard" label="standard" />,
};

export const Premium = {
  render: () => <Input variant="premium" label="premium" />,
};
