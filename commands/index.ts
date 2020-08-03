import { CommanderStatic,Command } from "commander";
import NewAction from "../actions";
import AbstractCommand from "./abstract.command";

export class NewCommand extends AbstractCommand {
  action: any;
  public load(program: CommanderStatic) {
    program
      .command("new")
      .alias("n")
      .description(
        "Generate File From tplrc, example: tpl new vue src/views/demo"
      )
      // .option("-o, --others", "add other options")
      .action(async () => {
        // let others = !!command.others
        // let inputs: any = { path, tpl, options: {others} };
        await this.action.handle();
      });
  }
}

export default class CommandLoader {
  public static load(program: CommanderStatic): void {
    new NewCommand(new NewAction()).load(program);
  }
}
