import {Component, Input} from '@angular/core';
import {ResultType} from "../../../../model/result-type";
import {Match} from "../../../../model/match.model";
import {Bet} from "../../../../model/bet.model";
import {NgForm} from "@angular/forms";
import {User} from "../../../../model/user.model";
import {Result} from "../../../../model/result.model";
import {BetService} from "../../../../../services/bet.service";

@Component({
  selector: 'app-bets',
  templateUrl: './bets.component.html',
  styleUrl: './bets.component.css'
})
export class BetsComponent {
  @Input("match") match: Match | undefined;
  bet:Bet|undefined;
  public resultTypes = Object.values(ResultType);
  bets:Bet[] | undefined;

  constructor(public betService:BetService) { }

  ngOnInit() : void { this.initbets(this.match?.id);}

  onSubmit() {
    if(this.bet){
      this.betService.submitBet(this.bet, this.match?.id).subscribe(bet => {this.initbets(this.match?.id)});
      this.bet = undefined;
    }
  }

  addNewBet() {
    this.bet = {
    id : undefined,
    match : this.match,
    userOfBet : new User ("",""),
    resultOfBet : new Result (0,0, ResultType.HOME_WIN),
    }
  }

  editBet(bet: Bet) {
    this.bet = bet;
  }

  deleteBet(bet: Bet) {
    this.betService.deleteBet(bet, this.match?.id).subscribe(resp=>
      {
        this.initbets(this.match?.id);
      });
  }

  initbets(matchId:number|undefined){
    this.betService.getBetsByMatch(matchId).subscribe(bets => {this.bets = bets;});
  }
  
}
