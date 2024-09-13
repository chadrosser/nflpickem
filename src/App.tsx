import React, { useState } from 'react';
import './App.css';

// Full list of NFL teams for both AFC and NFC
const teamsAFC = [
  "Bills", "Dolphins", "Patriots", "Jets", 
  "Ravens", "Bengals", "Browns", "Steelers", 
  "Texans", "Colts", "Jaguars", "Titans", 
  "Broncos", "Chiefs", "Raiders", "Chargers"
];

const teamsNFC = [
  "Cowboys", "Eagles", "Giants", "Commanders", 
  "Bears", "Lions", "Packers", "Vikings", 
  "Falcons", "Panthers", "Saints", "Buccaneers", 
  "Cardinals", "Rams", "49ers", "Seahawks"
];

// List of eliminated teams (dummy data)
const eliminatedTeams = [
  "Raiders", "Giants" // Example teams
];

interface UserPick {
  name: string;
  afcTeam: string;
  nfcTeam: string;
  winner: string;
  points: number;
}

function App() {
  const [name, setName] = useState('');
  const [afcTeam, setAfcTeam] = useState(teamsAFC[0]);
  const [nfcTeam, setNfcTeam] = useState(teamsNFC[0]);
  const [winner, setWinner] = useState<string | null>(null);
  const [userPicks, setUserPicks] = useState<UserPick[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!winner) {
      alert('Please choose a winner.');
      return;
    }

    // Check if any of the selected teams are eliminated
    const pointsAdjustment = (team: string) => eliminatedTeams.includes(team) ? -5 : 0;

    const newUserPick: UserPick = {
      name,
      afcTeam,
      nfcTeam,
      winner: winner === 'afc' ? afcTeam : nfcTeam,
      points: 30 + pointsAdjustment(afcTeam) + pointsAdjustment(nfcTeam), // Adjust points
    };

    setUserPicks([...userPicks, newUserPick]);
    setName('');
    setAfcTeam(teamsAFC[0]);
    setNfcTeam(teamsNFC[0]);
    setWinner(null);
  };

  return (
    <div className="App">
      <h2>Super Bowl Pick'em</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Enter your name"
        />

        <label>AFC Team:</label>
        <select value={afcTeam} onChange={(e) => setAfcTeam(e.target.value)}>
          {teamsAFC.map((team) => (
            <option key={team} value={team}>{team}</option>
          ))}
        </select>

        <label>NFC Team:</label>
        <select value={nfcTeam} onChange={(e) => setNfcTeam(e.target.value)}>
          {teamsNFC.map((team) => (
            <option key={team} value={team}>{team}</option>
          ))}
        </select>

        <label>Winner:</label>
        <div>
          <input
            type="radio"
            name="winner"
            value="afc"
            onChange={() => setWinner("afc")}
          />
          <label>AFC</label>
          <input
            type="radio"
            name="winner"
            value="nfc"
            onChange={() => setWinner("nfc")}
          />
          <label>NFC</label>
        </div>

        <button type="submit">Submit Picks</button>
      </form>

      <h3>Current Picks</h3>
      <div className="pick-table">
        <div className="table-header">
          <div>Name</div>
          <div>AFC Team</div>
          <div>NFC Team</div>
          <div>Winner</div>
          <div>Points</div>
        </div>
        {userPicks.map((pick, index) => (
          <div key={index} className="table-row">
            <div>{pick.name}</div>
            <div>{pick.afcTeam}</div>
            <div>{pick.nfcTeam}</div>
            <div>{pick.winner}</div>
            <div>{pick.points}</div>
          </div>
        ))}
      </div>

      <h3>Eliminated Teams</h3>
      <ul className="eliminated-teams">
        {eliminatedTeams.map((team, index) => (
          <li key={index}>{team}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
