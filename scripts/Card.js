class Card {
    constructor(cardTitle, cardImage) {
        this._title = cardTitle;
        this._image = cardImage;
    }

    _getTemplate() {}



    cardLike() {
        this.isLiked = !this.isLiked;
    }
}