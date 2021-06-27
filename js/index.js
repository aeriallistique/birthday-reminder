
import {people} from './People.js';


const container = document.getElementById('container');

const arrangePeople = ()=>{
	const arrayOfDays = [];

	people.forEach(peep =>{
		peep.timeUntilBirthday();
		arrayOfDays.push(peep);	
	})
	return arrayOfDays.filter(e => e.index >= 0)
	.sort((a, b)=> a.index-b.index)
	.concat(arrayOfDays.filter(e=> e.index<0)
	.sort((first,second)=> second.index < first.index? 1: (first.index===second.index ? 0 : -1))) ;
}


const renderPeople = ()=>{
	const array = arrangePeople();

	array.forEach(peep =>{
		const markup = peep.renderMarkup();
		peep.index === -1 ? container.insertAdjacentHTML('afterbegin', markup): 
							container.insertAdjacentHTML('beforeend', markup)

	})
	
};

renderPeople();


