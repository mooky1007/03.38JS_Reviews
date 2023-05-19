class Reviews {
    constructor(target) {
        this.container = document.querySelector(target);
        this.wrapper = this.container.querySelector('.review_wrapper');
        this.reviewItems = this.container.querySelectorAll('.review_item');
        this.currentIdx = 0;
        this.prevBtn = this.container.querySelector('[data-action="prev"]');
        this.nextBtn = this.container.querySelector('[data-action="next"]');
        this.init();
    }

    init() {
        this.reviewItems.forEach((item, idx) => {
            const itemWidth = item.offsetWidth;
            item.style.left = `${itemWidth * idx}px`;
        });

        this.prevBtn.addEventListener('click', this.prev.bind(this));
        this.nextBtn.addEventListener('click', this.next.bind(this));

        this.render();
    }

    next() {
        if(this.currentIdx < this.reviewItems.length - 1) {
            this.currentIdx++;
        } else {
            this.currentIdx = 0;
        }
        this.render();
    }

    prev() {
        if(this.currentIdx > 0) {
            this.currentIdx--;
        } else {
            this.currentIdx = this.reviewItems.length - 1;
        }
        this.render();
    }

    render() {
        this.wrapper.style.left = `${-this.currentIdx * 100}%`;
        if(this.currentIdx === 0) {
            this.prevBtn.setAttribute('disabled', true);
        } else {
            this.prevBtn.removeAttribute('disabled');
        }

        if(this.currentIdx === this.reviewItems.length - 1) {
            this.nextBtn.setAttribute('disabled', true);
        } else {
            this.nextBtn.removeAttribute('disabled');
        }
    }
}