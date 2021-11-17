import { IframePage } from "./iframePage";

const buttonSelectors: Record<string, string> = {
  "Nieuwe workflow": "label_add_tasks",
};

export class DashboardPage extends IframePage {
  async open(url: string) {
    await super.open(`/dashboard/${url}`);
  }

  async buttonExists(buttonText: string) {
    const text = buttonSelectors[buttonText] ?? buttonText;
    await super.buttonExists(text);
  }
}
