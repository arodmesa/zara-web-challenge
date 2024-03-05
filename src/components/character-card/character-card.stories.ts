import type { Meta, StoryObj } from "@storybook/react";
import CharacterCard from ".";

const meta = {
  title: "CharacterCard",
  component: CharacterCard,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof CharacterCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CharacterCardStory: Story = {
  args: {
    id: 100,
    imageUrl: "https://i.annihil.us/u/prod/marvel/i/mg/9/00/4c0030bee8c86.jpg",
    name: "Spectrum",
  },
};
