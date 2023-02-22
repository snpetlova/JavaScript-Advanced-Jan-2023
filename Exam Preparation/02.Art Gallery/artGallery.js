class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = {
            'picture': 200,
            'photo': 50,
            'item': 250,
        };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {

        articleModel = articleModel.toLowerCase();
        let isInTheArray = false;

        if (!this.possibleArticles[articleModel]) {
            throw Error(`This article model is not included in this gallery!`);
        }

        for (const article of this.listOfArticles) {
            if (article.articleName === articleName && article.articleModel === articleModel) {
                article.quantity += Number(quantity);
                isInTheArray = true;
            }
        }

        if (!isInTheArray) {
            this.listOfArticles.push({ articleModel, articleName, quantity });
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }

    inviteGuest(guestName, personality) {

        for (let guest of this.guests) {
            if (guest.guestName === guestName) {
                throw Error(`${guestName} has already been invited`);
            }
        }

        let object = { guestName, points: 0, purchaseArticle: 0 }

        switch (personality) {
            case 'Vip':
                object.points = 500;
                break;
            case 'Middle':
                object.points = 250;
                break;
            default:
                object.points = 50;
                break;
        }
        this.guests.push(object);
        return `You have successfully invited ${guestName}!`
    }

    buyArticle(articleModel, articleName, guestName) {

        if (this.listOfArticles.length > 0) {
            let article = this.listOfArticles.find(x => x.articleModel.toLowerCase() == articleModel.toLowerCase()
                && x.articleName.toLowerCase() == articleName.toLowerCase());

            if (!article) {
                throw Error(`This article is not found.`);
            }

            if (article.quantity === 0) {
                return `The ${articleName} is not available.`
            }

            let guest = this.guests.find(x => x.guestName === guestName);
            if (!guest) {
                return `This guest is not invited.`;
            }

            let pointsNeeded = this.possibleArticles[article.articleModel];

            if (guest.points < pointsNeeded) {
                return `You need to more points to purchase the article.`;
            }

            guest.points -= pointsNeeded;
            guest.purchaseArticle++;
            article.quantity--;

            return `${guestName} successfully purchased the article worth ${pointsNeeded} points.`;
        }
    }


    showGalleryInfo(criteria) {
        let res = [];
        if (criteria == 'article') {
            res.push(`Articles information:`);
            for (const curr of this.listOfArticles) {
                res.push(`${curr.articleModel} - ${curr.articleName} - ${curr.quantity}`);
            }
        
        } else if (criteria == 'guest') {
            res.push(`Guests information:`);
            for (const curr of this.guests) {
                res.push(`${curr.guestName} - ${curr.purchaseArticle}`);
            }
        }
        return res.join('\n').trim();
    }
}

// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
// console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
// console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));

// Successfully added article Mona Liza with a new quantity- 3.
// Successfully added article Ancient vase with a new quantity- 2.
// Successfully added article Mona Liza with a new quantity- 1.

// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.inviteGuest('John', 'Vip'));
// console.log(artGallery.inviteGuest('Peter', 'Middle'));
// console.log(artGallery.inviteGuest('John', 'Middle'));

// You have successfully invited John!
// You have successfully invited Peter!
// John has already been invited.

// const artGallery = new ArtGallery('Curtis Mayfield');
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
// console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
// console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));

// John successfully purchased the article worth 200 points.
// Peter successfully purchased the article worth 250 points.
// This article is not found.

const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));

// Articles information:
// picture - Mona Liza - 3
// item - Ancient vase - 1
// Guests information:
// John - 1
// Peter - 1