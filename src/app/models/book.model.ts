import { Entity } from './entity.model';
export class Book extends Entity {

	title	: string;
	author	: string;
	edition	: string;
        
	constructor(res? : any) {
    	
    	super();

    	this.title   = res? res[2] : 'Title';
    	this.author  = res? res[3] : 'Author';
    	this.edition = res? res[4] : 'Edition';
	} 
}
