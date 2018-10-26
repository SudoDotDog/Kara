import { Box } from './box/box';

const box = Box.instance;

box.canvas.draw(123 + '');
box.canvas.replace('345');
box.canvas.exit();
