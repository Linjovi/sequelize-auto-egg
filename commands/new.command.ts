import { Command, CommanderStatic } from "commander";
import { AbstractCommand } from "./abstract.command";
import { NewCmd } from "./command.input";

export class NewCommand extends AbstractCommand {
  public load(program: CommanderStatic) {
    program
      .command("new <host> <port>")
      .alias("n")
      .description(
        "Generate File From tplrc, example: tpl new vue src/views/demo"
      )
      .option("-o, --others", "add other options")
      .action(async (host: string, port: string, command: Command) => {
        let others = !!command.others
        let inputs: NewCmd = { host, port, options: {others} };
        await this.action.handle(inputs);
      });
  }
}
