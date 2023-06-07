/**
 * Колода карт. Класс отвечает за создание и тасование карт. Содержит список изображений карт.
 */

class Deck {
    cards = [];
    #cardsImages = ["apple.png", "cake.png", "car.png", "cat.png", "cherry.png", "factory.png",
        "house.png", "plane.png", "ship.png", "train.png"];

    constructor(count) {
      this.count = count;
      this.heightCard = Math.floor(Math.sqrt(Math.pow(window.innerHeight-40, 2)/this.count));

      for (let i = 0; i < this.count/2; i++) {
        const j = Math.floor(Math.random() * this.#cardsImages.length)
        this.cards.push(new Card(this.#cardsImages[j], this.heightCard));
        this.cards.push(new Card(this.#cardsImages[j], this.heightCard));
      }
    }

    shuffle() {
        this.cards.sort(() => Math.random() - 0.5);
    }

    removeCard(card) {
        let index = this.cards.findIndex(item => item.imagePath == card.imagePath);
        if (index != -1) {
            this.cards.splice(index, 1);
            card.disconectFromDOM();
        }
    }
}
