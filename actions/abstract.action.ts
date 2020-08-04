import {  NewCmd } from "../commands";

export abstract class AbstractAction {
  public abstract async handle(
    inputs?: NewCmd
  ): Promise<void>;
}
