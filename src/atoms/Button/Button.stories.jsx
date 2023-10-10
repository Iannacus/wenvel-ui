import Button from "./Button";

export default {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["primary", "secondary", "basic", "standard", "premium"],
      control: "select",
    },
    label: {
      control: "text",
    },
    size: {
      options: ["small", "medium", "large"],
      control: "select",
    },
  },
};

export const Example = {
  render: (args) => <Button {...args} />,
};

export const Primary = {
  render: () => <Button variant="primary" label="primary" />,
};

export const Secondary = {
  render: () => <Button variant="secondary" label="secondary" />,
};

export const Basic = {
  render: () => <Button variant="basic" label="basic" />,
};

export const Standard = {
  render: () => <Button variant="standard" label="standard" />,
};

export const Premium = {
  render: () => <Button variant="premium" label="premium" />,
};
