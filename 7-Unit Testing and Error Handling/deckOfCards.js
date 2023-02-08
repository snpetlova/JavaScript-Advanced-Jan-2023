function deckOfCards(cards) {

    let result = [];

    for (const line of cards) {
        let lineArr = line.split('');
        let suit = lineArr.pop();
        let face = lineArr.join('');

        try {
            const currCard = solve(face, suit);
            result.push(currCard);
        } catch (error) {
            return console.log(`Invalid card: ${line}`);
        }
    }

    console.log(result.join(' '));

    function solve (face, suit) {

        const faces = [
            '2', 
            '3', 
            '4', 
            '5', 
            '6', 
            '7', 
            '8', 
            '9', 
            '10', 
            'J', 
            'Q', 
            'K', 
            'A'
        ]
    
        const suits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        }
    
        if (faces.includes(face) == false) {
            throw new TypeError ('Invalid face'); 
        } else if (suit in suits == false) {
            throw new TypeError ('Invalid suit');
        }
    
        const res = {
            face,
            suit,
            toString() {
                return this.face + suits[this.suit];
            }
        };
    
        return res;
    } 

} deckOfCards(['AS', '10D', 'KH', '2C'])