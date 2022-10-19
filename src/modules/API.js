class Score {
    constructor(user, score) {
        this.user = user;
        this.score = score;
    }
    scoreData = [];
    url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/:id/scores/:id';

    getScore = () => {
        const recentScore = document.querySelector('.recent-score-group');
        recentScore.innerHTML = this.scoreData.map((element, index) => `<li class=${index % 2 !== 0 ? 'list-white' : 'list-gray'}>${element.user} : ${element.score}</li>`).join('');
    }

    fetchScore = async () => {
        try {
            const data = await fetch(this.baseUrl);
            const res = await data.json();
            const displayData = res.result.map((item) => item);
            return this.getScore();
        }
        catch (err) {
            return err;
        }
    };

    addScore = async ({ user, scoreNum}) => {
        try {
            const newgame = { user, score: scoreNum };
            const config = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(newgame),
            };
            const data = await fetch(this.url, config);
            this.scoreData.push(newgame);
            this.getScore();
            return data;
        }
        catch (err) {
            return err;
        }
    }
}

export default Score;