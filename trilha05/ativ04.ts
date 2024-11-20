abstract class VoteSystem {
    
    abstract voteFor(candidate: string): void;
    
  
    abstract getResults(): object;
}

class Election extends VoteSystem {
   
    private votes: { [candidate: string]: number } = {};

   
    voteFor(candidate: string): void {
        if (this.votes[candidate]) {
            this.votes[candidate]++;
        } else {
            this.votes[candidate] = 1;
        }
    }

  
    getResults(): object {
        return this.votes;
    }
}

class Poll extends VoteSystem {

    private votes: { [candidate: string]: number } = {};

  
    voteFor(candidate: string): void {
        if (this.votes[candidate]) {
            this.votes[candidate]++;
        } else {
            this.votes[candidate] = 1;
        }
    }

   
    getResults(): object {
        const sortedCandidates = Object.entries(this.votes)
       
            .sort(([, votesA], [, votesB]) => votesB - votesA)
        
            .map(([candidate, votes]) => ({ candidate, votes }));

        return sortedCandidates;
    }
}

const election = new Election();
election.voteFor("Alice");
election.voteFor("Bob");
election.voteFor("Alice");

console.log("Resultados da eleição:", election.getResults());
