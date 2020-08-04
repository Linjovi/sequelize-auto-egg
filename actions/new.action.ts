import { NewCmd } from "../commands";
import { AbstractAction } from "./abstract.action";
import {genEggSequelize} from '../lib'
export class NewAction extends AbstractAction {
  public async handle(inputs: NewCmd) {
    console.log('egg-sequeize-auto')
    
  }
}




