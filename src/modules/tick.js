import Pagination from './pagination';

/**
 * Tick
 *
 * @export
 * @class Tick
 */
export default class Tick {
    constructor ( lists ) {
        this.current = false;
        this.count = 0;
        this.startCountIndex = 0;

        this.lists = lists;
        this.showElement;

        this.pagination = new Pagination
    }

    updateCurrentSlide () {
        this.current = this.showElement;
    }

    slideTick ( index ) {

        this.showElement = document.querySelector( "#index-" + index );

        this.showElement.classList.add( "out" );

        if ( this.current && this.current !== this.showElement ) {
            this.current.classList.remove( "out" );
        }

        return this;
    };

    updateSlideShow ( prev ) {
        prev
            ? this.count--
            : this.count++;

        this.setCounter();

        this.slideTick( this.count ).updateCurrentSlide();

        // we need update the pagination blocks
        this.pagination.paginationAction(this.count);
    };

    setCounter () {
        if ( this.count === this.startCountIndex ) {
            return this.count = this.lists.length;
        }

        if ( this.count === this.lists.length ) {
            return this.count = this.startCountIndex;
        }
    }
}