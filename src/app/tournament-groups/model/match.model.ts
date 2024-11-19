import {Team} from "../../teams/model/teams.model";

export class Match{

  constructor(
    public id:number,
    public startTime:string,
    public stadium:string,
    public homeTeam:Team,
    public awayTeam:Team
  ) {}

}
