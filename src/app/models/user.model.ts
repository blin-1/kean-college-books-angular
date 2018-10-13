import { Entity } from './entity.model';
import { constants } from '../constants/app-constants';

export class User extends Entity {

        userName: string;
        password: string;
        phone: string;
        email: string;
        firstName: string;
        lastName: string;
        
        constructor(){
        	
        	super();
			this.email 		= constants.UNKNOWN_USER_EMAIL;
			this.firstName	= constants.UNKNOWN_USER_NAME;
        
        }
        
        
	    isLoggedIn () {
	    	return this.email !== constants.UNKNOWN_USER_EMAIL; 
	    }

}
