import DragScroll from 'DragScroll';
var span = document.querySelector('.drag-scroll');

export default function dragscroll() {
	span.textContent = new DragScroll(span);
}