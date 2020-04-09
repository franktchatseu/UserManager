export class user{

    //les differentes proprietes d'un utilisateur
    public id:number=0;
    public firstname:string;
    public lastname:string;
    public email:string;
    public login:string;
    public password:string;
    public isadmin:boolean;
    public isauth:boolean;
    public avatar:string;

    //constructeur avec parametres
    constructor(firstname, lastname,email,login,password,isadmin){
        this.id++;
        this.firstname=firstname;
        this.lastname=lastname;
        this.email=email;
        this.login=login;
        this.password=password;
        //par defaud, l'utilisateur cree n'est pas un administrateur
        this.isadmin=isadmin;
        
    }
    //constructeur sans parametre


}