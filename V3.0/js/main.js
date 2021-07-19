import '../style/style.css';
import { drawGalleryItem } from './buildItems';
import items from './items';

const galleryRootElement = document.getElementById('gallery');

items.map(item => galleryRootElement.appendChild(drawGalleryItem(item)))