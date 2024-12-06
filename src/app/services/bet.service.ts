import { Injectable } from '@angular/core';
import {Bet} from "../tournament-groups/model/bet.model";
import { HttpClient } from '@angular/common/http';
import { ResultType } from '../tournament-groups/model/result-type';

@Injectable({
  providedIn: 'root'
})
export class BetService {

  bets:Bet[] = [];
  idCounter = 0;

  private betsUrl = 'api/bets';

  constructor(private http: HttpClient) { }

  submitBet(bet: Bet, matchId: number | undefined) {
    return this.http.post<Bet>(this.betsUrl + "/" + matchId + "/" + bet.userOfBet.username , BetService.mapBet(bet).resultOfBet)
  }


  public static mapBet(bet: Bet){
    switch(bet.resultOfBet.resultType){
      case ResultType.HOME_WIN:
        bet.resultOfBet.resultType = "HOME_WIN";
        break;
      case ResultType.DRAW:
        bet.resultOfBet.resultType = "DRAW";
        break;
      case ResultType.AWAY_WIN:
        bet.resultOfBet.resultType = "AWAY_WIN";
        break;
    }
    return bet;
  }

  getBetsByMatch(matchId: number | undefined){
    return this.http.get<Bet[]>(this.betsUrl + "/" + matchId);
  }

  deleteBet(bet: Bet, matchId :number|undefined){
    return this.http.delete(this.betsUrl + "/" + matchId + "/" + bet.userOfBet.username);
  }

}
