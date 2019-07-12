import './helpers/reset';
import {changeState} from './helpers/changeState';
import {changeParametrs} from './helpers/changeParanetrs';

export const blindPanel = document.querySelector('.blind');

blindPanel.addEventListener('click', changeState);
blindPanel.addEventListener('click', changeParametrs);

