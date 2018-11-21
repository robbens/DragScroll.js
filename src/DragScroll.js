export default class DragScroll {
    constructor({el}) {

        if (!el) return false;

        this._window = window;
        this._document = document;
        this.mouseDown = false;
        this.lastClientX = 0;
        this.lastClientY = 0;
        this.newScrollX = 0;
        this.newScrollY = 0;
        this.el = el;

        this.destroy();
        this.init();
    }

    init(el, lastClientX, lastClientY, mouseDown, cont, scroller) {
        this.el.addEventListener('mousedown', this.el.md = (e) => {
            if (e.target.closest('[nodrag]')) {
                return false;
            }

            if (!this.el.hasAttribute('nodrag') ||
                this._document.elementFromPoint(
                    e.pageX, e.pageY
                ) === this.el
            ) {
                this.mouseDown = true;
                this.lastClientX = e.clientX;
                this.lastClientY = e.clientY;
                e.preventDefault();
            }

        });

        this._window.addEventListener('mousemove', this.el.mm = (e) => {
            if (this.mouseDown) {
                (scroller = this.el.scroller || this.el).scrollLeft -=
                    this.newScrollX = (-this.lastClientX + (this.lastClientX = e.clientX));

                scroller.scrollTop -=
                    this.newScrollY = (-this.lastClientY + (this.lastClientY = e.clientY));
            }
        }, 0);

        this._window.addEventListener('mouseup', this.el.mu = () => {
            this.mouseDown = false
        }, 0);
    }

    destroy() {
        this.el.removeEventListener('mousedown', this.el.md, 0);
        this._window.removeEventListener('mousemove', this.el.mm, 0);
        this._window.removeEventListener('mouseup', this.el.mu, 0);
    }
}