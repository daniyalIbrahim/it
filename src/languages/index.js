import fr from './fr.json';
import en from './en.json';
import de from './de.json';
import pl from './pl.json';
import {default as deI} from '../assets/de.svg';
import {default as enI} from '../assets/us.svg';
import {default as plI} from '../assets/pl.svg';
import {default as frI} from '../assets/fr.svg';


export const dictionaryList = { en, fr, de ,pl};

export const languageOptions = {
  en: 'EN',
  fr: 'FR',
  de: `DE`,
  pl: 'PL'
};

export const languageFlags = {
  en: enI,
  fr: frI,
  de: deI,
  pl: plI
};
