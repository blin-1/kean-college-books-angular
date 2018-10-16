export class Entity {

        rowId	: number;
        id		: string;  
    
        constructor(array? : any) {

        this.rowId  = array? array[0] : 'ROWID';
        this.id     = array? array[1] : 'ID';


    } 
    
}
