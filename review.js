class Reviews {
    constructor(target) {
        this.container = document.querySelector(target);
        this.wrapper = this.container.querySelector('.review_wrapper');
        this.reviewItems = this.container.querySelectorAll('.review_item');
        this.prevBtn = this.container.querySelector('[data-action="prev"]');
        this.nextBtn = this.container.querySelector('[data-action="next"]');
        this.currentIdx = 0;
        this.init();
    }

    init() {
        this.reviewItems.forEach((item, idx) => {
            const itemWidth = item.offsetWidth;
            item.style.transform = `translateX(${itemWidth * idx}px)`;
        });

        this.prevBtn.addEventListener('click', this.goToPrev.bind(this));
        this.nextBtn.addEventListener('click', this.goToNext.bind(this));

        this.render();
    }

    goToNext() {
        if (this.currentIdx < this.reviewItems.length - 1) {
            this.currentIdx++;
        } else {
            return;
        }
        this.render();
    }

    goToPrev() {
        if (this.currentIdx > 0) {
            this.currentIdx--;
        } else {
            return;
        }
        this.render();
    }

    render() {
        const translateX = -this.currentIdx * 100;
        this.wrapper.style.transform = `translateX(${translateX}%)`;

        this.prevBtn.disabled = this.currentIdx === 0;
        this.nextBtn.disabled = this.currentIdx === this.reviewItems.length - 1;
    }
}
