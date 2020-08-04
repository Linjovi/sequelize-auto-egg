import { CommanderStatic } from "commander";
import { NewAction } from "../actions";
import { NewCommand } from "./new.command";

export class CommandLoader {
  public static load(program: CommanderStatic): void {
    new NewCommand(new NewAction()).load(program);
  }
}
