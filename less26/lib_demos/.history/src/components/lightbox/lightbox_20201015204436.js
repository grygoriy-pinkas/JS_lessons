import * as basicLightbox from 'basiclightbox'
import lightboxTemplate from './lightbox.hbs';
import "../../../node_modules/basiclightbox/dist/basicLightbox.min.css"
import "./lightbox.scss"
import pnotify from "../pnotify/pnotify.js"
import Toastify from 'toastify-js'

const instance = basicLightbox.create(`
		<video controls class="video-box">
			<source src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4" type="video/mp4">
		</video>
	`)

const source = lightboxTemplate();


export default {
	source,
	load: () => {
		setTimeout(() => {
			document.querySelector('button.lightbox-open').onclick = () => {
				instance.show()
				Toastify({
					text: "This is a toast",
					backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
					className: "info",
				  }).showToast()
			}
			document.querySelector('button.lightbox-close').onclick = instance.close
		}, 50)

		return source;
	}
};