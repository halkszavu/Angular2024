import {Team} from "../../teams/model/teams.model";

export class TournamentGroup {

  constructor(
    public id:number,
    public name:string,
    public teams:Team[])
  { }

}
