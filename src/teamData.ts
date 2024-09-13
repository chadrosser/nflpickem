// src/teamData.ts

interface TeamData {
    team: string;
    record: string;
    playoffChance: string;
  }
  
  export const afcTeamsData: TeamData[] = [
    { team: "Bills", record: "10-4", playoffChance: "90%" },
    { team: "Dolphins", record: "9-5", playoffChance: "85%" },
    { team: "Patriots", record: "7-7", playoffChance: "30%" },
    // Add other teams...
  ];
  
  export const nfcTeamsData: TeamData[] = [
    { team: "Cowboys", record: "11-3", playoffChance: "95%" },
    { team: "Eagles", record: "10-4", playoffChance: "90%" },
    { team: "Giants", record: "8-6", playoffChance: "50%" },
    // Add other teams...
  ];
  