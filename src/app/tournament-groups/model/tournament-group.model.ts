import {Team} from "../../teams/model/teams.model";
import {Match} from "./match.model";

export class TournamentGroup {

  constructor(
    public id:number,
    public name:string,
    public teams:Team[],
    public matches:Match[])
  { }

}
