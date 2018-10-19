import { Entity } from './entity.model';
export class Book extends Entity {

	title	: string;
	author	: string;
	edition	: string;
        
	constructor(res? : any) {
    	
    	super(res);

    	this.title   = res? res[2] : 'Please select a book from the "browse" section';
    	this.author  = res? res[3] : 'Author';
    	this.edition = res? res[4] : 'Edition';
	} 
}
