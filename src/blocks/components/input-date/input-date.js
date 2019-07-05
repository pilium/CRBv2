import flatpickr from 'flatpickr';
import {Russian} from 'flatpickr/dist/l10n/ru';

flatpickr('#testimonial-date', {
	minDate: '2016-01',
	maxDate: 'today',
	dateFormat: 'Y-m-d',
	locale: Russian,
	disableMobile: 'true',
});
