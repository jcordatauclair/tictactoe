import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  squares: any[];
  X_is_next: boolean;
  winner: string;

  constructor() { }

  ngOnInit() {
    this.newGame();
  }

  // start a new game
  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.X_is_next = true;
  }

  // who needs to play next
  get player() {
    return this.X_is_next ? 'X' : 'O'; // True if X, False if O
  }

  // make a move 
  makeMove(idx: number) {
    if (!this.squares[idx]) {
      this.squares.splice(idx, 1, this.player);
      this.X_is_next = !this.X_is_next;
    }

    this.winner = this.whoWins();
  }

  // checks if there is a winner
  whoWins() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }
}
