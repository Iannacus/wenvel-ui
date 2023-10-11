import GradientText from "./GradientText";

export default {
  title: "Atoms/Gradient-text",
  component: GradientText,
  argTypes: {
    children: {
      control: "text",
    },
  },
};

export const Example = {
  render: (args) => (
    <GradientText>
      <h1>{args.children}</h1>
    </GradientText>
  ),
};
