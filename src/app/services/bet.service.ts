import { Injectable } from '@angular/core';
import {Bet} from "../tournament-groups/model/bet.model";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BetService {

  bets:Bet[] = [];
  idCounter = 0;

  private betsUrl = 'api/bets';

  constructor(private http: HttpClient) { }

  submitBet(bet: Bet) {
    let index = this.bets.map((b) => b.id).indexOf(bet.id);
    if(index > -1){
      this.bets[index] = bet;
    } else {
      this.bets.push(bet);
    }
  }

  getBetsByMatch(matchId: number | undefined){
    return this.http.get<Bet[]>(this.betsUrl + "/" + matchId);
  }

}
