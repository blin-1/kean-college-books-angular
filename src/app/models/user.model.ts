import { Entity } from './entity.model';
import { constants } from '../constants/app-constants';

export class User extends Entity { // extends for future persistence 

        userName: string;
        password: string;
        phone: string;
        email: string;
        firstName: string;
        lastName: string;
        
        constructor(firstName? : string, email? : string){
        	
        	super();
			this.email 		= email?         email : constants.UNKNOWN_USER_EMAIL;
			this.firstName	= firstName? firstName : constants.UNKNOWN_USER_NAME;
        
        }
        
	    isLoggedIn () {
	    	return this.email !== constants.UNKNOWN_USER_EMAIL; 
	    }

}
