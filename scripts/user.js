"use strict";

(function (core){

    class User {
        constructor(firstName="", lastName = "", username="", emailAddress="", password="") {
            //this.setter = attribute
            this.FirstName = firstName;
            this.LastName = lastName;
            this.EmailAddress = emailAddress;
            this.Username = username;
            this.Password = password;
        }

        // setter and getter for firstName
        set FirstName(firstName){
            this.m_firstName = firstName;
        }
        get FirstName(){
            return this.m_firstName;
        }

        // setter and getter for lastName

        set LastName(lastName){
            this.m_lastName = lastName;
        }
        get LastName(){
            return this.m_lastName;
        }

        // setter and getter for emailAddress
        set EmailAddress(emailAddress){
            this.m_emailaddress = emailAddress;
        }
        get EmailAddress(){
            return this.m_emailaddress;
        }

        // setter and getter for username
        set Username(username){
            this.m_username = username;
        }
        get Username(){
            return this.m_username;
        }

        // setter and getter for password
        set Password(password){
            this.m_password = password;
        }
        get Password(){
            return this.m_password;
        }


        toString() {
            return `First Name: ${this.FirstName}
        \nLast Name: ${this.LastName}
        \nUsername: ${this.Username}
        \nEmail: ${this.EmailAddress}`
        }

        toJSON(){
            return {
                "FirstName" : this.FirstName,
                "LastName" : this.LastName,
                "EmailAddress" : this.EmailAddress,
                "Username" : this.Username,
                "Password" : this.Password
            }
        }

        fromJSON(data){
            this.FirstName = data.FirstName;
            this.LastName = data.LastName;
            this.EmailAddress = data.EmailAddress;
            this.Username = data.Username;
            this.Password = data.Password;
        }


        serialize() {
            if (this.FirstName !== "" && this.LastName !== "" && this.EmailAddress  !== "" &&  this.Username !== "" && this.Password !== "") {
                return `${this.FirstName}, ${this.LastName}, ${this.EmailAddress}, ${this.Username}, ${this.Password}`;
            }
            console.error("Invalid serialization. Properties for user are invalid")
            return null;
        }

        deserialize(data) {
            let propertyArray = data.split(",");
            this.FirstName = propertyArray[0];
            this.LastName = propertyArray[1];
            this.EmailAddress = propertyArray[2];
            this.Username = propertyArray[3];
            this.Password = propertyArray[4];
        }
    }

    core.User = User;
})(core || (core = {}));