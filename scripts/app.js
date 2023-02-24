// Name: Soljin Kim
// Student ID: 100822773
// Date: Feb 24, 2023
// ********************************

"use strict";

//IIFE - Immediately Invoked Function Expression
(function(){

    // create fixed bottom nav bar
    let BottomNavBar = `<nav class="navbar fixed-bottom navbar-light  bg-secondary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Fixed bottom</a>
        </div>
    </nav>`;
    // place the fixed bottom nav bar at bottom position of page
    document.body.insertAdjacentHTML("beforeEnd", BottomNavBar);


    function AddUser(firstName, lastName, username, emailAddress, password){
        let user = new core.User(firstName, lastName, username, emailAddress, password);
        if(user.serialize()){
            let key = user.Username.substring(0,1) + Date.now();
            localStorage.setItem(key, user.serialize());
        }
    }

    function AjaxRequest(method, url, callback){
        // STEP 1
        let xhr = new XMLHttpRequest();

        // STEP 2
        xhr.addEventListener("readystatechange", () => {

            if(xhr.readyState === 4 && xhr.status === 200){
                if(typeof callback === "function"){     // check the callback's type is function
                    callback(xhr.responseText);
                }else{
                    console.error("Error: Please provide a valid function for callback.");
                }
            }
        });

        // STEP 3
        xhr.open(method, url);
        // STEP 4
        xhr.send();
    }

    function LoadHeader(data){
        //console.log(xhr.responseType);
        $("header").html(data);
        $(`li>a:contains(${document.title})`).addClass("active");
        CheckLogin();
    }


    // register the function in IIFE
    /**
     * Start the web-app.
     * Based on the title of the current page, calls a function.
     */
    function Start()
    {
        console.log("App Started!"); // print the statement to check the process
        //AjaxRequest("GET", "header.html", LoadHeader);
        //CheckLogin();

        switch(document.title)  // based on the title of the current page, calls a function
        {
            case "Home":
                DisplayHomePage();
                break;
            case "Products":
                DisplayProductPage();
                break;
            case "Service":
                DisplayServicePage();
                break;
            case "Contact Us":
                DisplayContactPage();
                break;
            case "Contact List":
                DisplayContactListPage();
                break;
            case "About Us":
                DisplayAboutPage();
                break;
            case "Human Resource":
                DisplayHumanResourcePage();
                break;
            case "Projects":
                DisplayProjectPage();
                break;
            case "Register":
                DisplayRegisterPage();
                break;
            case "Login":
                DisplayLoginPage();
                break;
        }
    }

    // when the page is loaded, calling the function called Start
    window.addEventListener("load", Start)

    /**
     * It is called when the current page's title is Home.
     * It controls four buttons and displays welcome messages and the background image.
     */
    function DisplayHomePage() {

        // change the product's link to project page
        let product = document.getElementsByTagName("li")[1];
        product.innerHTML = `<a class="nav-link" href="project.html"><i class="fa-solid fa-diagram-project"></i> Project</a>`;

        // add a nav bar element human resource
        let Contact_Us = document.getElementsByTagName("li")[4];
        let Human_Resources = document.createElement("a");
        Human_Resources.innerHTML = '<a class="nav-link" aria-current="page" href="humanResource.html"><i class="fa-solid fa-people-group"></i> Human Resources</a>';
        Contact_Us.insertAdjacentElement("beforebegin", Human_Resources);


        // create a main tag as MainContent
        let MainContent = document.getElementsByTagName("main")[0];

        // create a paragraph tag as MainParagraph
        let MainParagraph = document.createElement("p");
        // set MainParagraph's attributes
        MainParagraph.setAttribute("id", "MainParagraph");
        MainParagraph.setAttribute("class", "mt-4");
        MainParagraph.style.fontSize = "25px";
        MainParagraph.style.color = "white";

        // create variables for messages and set it as main paragraph content
        let Welcome_Message = 'Hello, this webpage is operated by a computer programming duo, Kingsly and Jin!';
        let description = 'We are based on Oshawa, Ontario and 2nd-year students of Computer Programming at Durham College.' +
                            '<br/>Using our various project experiences, we provide services that suit our customers\' tastes.';
        MainParagraph.innerHTML = Welcome_Message + '<br/>' + description;

        // MainContent includes the MainParagraph
        MainContent.appendChild(MainParagraph);

        // add background image
        document.body.style.backgroundImage = "url('Images/home_background.jpg')";

    }


    /**
     * It is called when the current page's title is Products.
     */
    function DisplayProductPage() {

        // add a nav bar element human resource
        let Contact_Us = document.getElementsByTagName("li")[4];
        let Human_Resources = document.createElement("a");
        Human_Resources.innerHTML = '<a class="nav-link" aria-current="page" href="humanResource.html"><i class="fa-solid fa-people-group"></i> Human Resources</a>';
        Contact_Us.insertAdjacentElement("beforebegin", Human_Resources);

    }


    /**
     * It is called when the current page's title is Projects.
     * It displays 3 projects that we completed.
     */
    function DisplayProjectPage(){

        // change the product's link to project page
        let product = document.getElementsByTagName("li")[1];
        product.innerHTML = `<a class="nav-link active" href="project.html"><i class="fa-solid fa-diagram-project"></i> Project</a>`;

        // add a nav bar element human resource
        let Contact_Us = document.getElementsByTagName("li")[4];
        let Human_Resources = document.createElement("a");
        Human_Resources.innerHTML = '<a class="nav-link" aria-current="page" href="humanResource.html"><i class="fa-solid fa-people-group"></i> Human Resources</a>';
        Contact_Us.insertAdjacentElement("beforebegin", Human_Resources);

        //ensure to get and create the elements needed for the sections, paragraphs and images.
        let MainContent = document.getElementsByTagName("main")[0];

        let Section = document.createElement("div");
        Section.style.height = "2000px";

        let FirstHeading = document.createElement("h3");
        FirstHeading.innerHTML = `These are some of the Projects we have worked on.`;

        let UnorderedList = document.createElement("ul");
        let firstList = document.createElement("li");
        let secondList = document.createElement("li");
        let thirdList = document.createElement("li");

        let firstParagraph = document.createElement("p");
        firstParagraph.innerHTML = `We have worked together as a team to develop a use case diagram for a Movie Rental Store.`;

        let FirstImage = document.createElement("img");
        FirstImage.src = "Images/personal1.png";
        FirstImage.style.width = "600px";
        FirstImage.style.height = "600px";

        let SecondParagraph = document.createElement("p");
        SecondParagraph.innerHTML = `We have created Object-Oriented Programs using languages like JAVA.`;

        let SecondImage = document.createElement("img");
        SecondImage.src = "Images/personal3.png";
        SecondImage.style.height = "400px";
        SecondImage.style.width = "1200px";

        let ThirdParagraph = document.createElement("p");
        ThirdParagraph.innerHTML = `We have also worked together and developed projects using the C# language in Identity Framework <br/> and deployed it on azure.`;

        let ThirdImage = document.createElement("img");
        ThirdImage.src = "Images/azure.png";
        ThirdImage.style.width = "900px";
        ThirdImage.style.height = "600px";

        //after assigning the values ensure to appendChild to the elements in the right order.
        UnorderedList.appendChild(firstList);
        UnorderedList.appendChild(secondList);
        UnorderedList.appendChild(thirdList);

        firstList.appendChild(firstParagraph);
        firstList.appendChild(FirstImage);
        secondList.appendChild(SecondParagraph);
        secondList.appendChild(SecondImage);
        thirdList.appendChild(ThirdParagraph);
        thirdList.appendChild(ThirdImage);

        Section.appendChild(FirstHeading);
        Section.appendChild(firstList);
        Section.appendChild(secondList);
        Section.appendChild(thirdList);

        MainContent.appendChild(Section);

    }

    /**
     * It is called when the current page's title is Service.
     * It displays three services that we can offer.
     */
    function DisplayServicePage() {

        // change the product's link to project page
        let product = document.getElementsByTagName("li")[1];
        product.innerHTML = `<a class="nav-link" href="project.html"><i class="fa-solid fa-diagram-project"></i> Project</a>`;

        // add a nav bar element human resource
        let Contact_Us = document.getElementsByTagName("li")[4];
        let Human_Resources = document.createElement("a");
        Human_Resources.innerHTML = '<a class="nav-link" aria-current="page" href="humanResource.html"><i class="fa-solid fa-people-group"></i> Human Resources</a>';
        Contact_Us.insertAdjacentElement("beforebegin", Human_Resources);


        // create main section
        let MainContent = document.getElementsByTagName("main")[0];

        // create first div section and set attributes
        let First_Section = document.createElement('div');
        First_Section.setAttribute("id", "Service_First");
        First_Section.setAttribute("class", "mt-5");
        First_Section.style.height = "300px";
        // create a paragraph tag named First_Paragraph
        let First_Paragraph = document.createElement("p");
        // set First_Paragraph's attributes
        First_Paragraph.setAttribute("id", "First_Paragraph");
        First_Paragraph.setAttribute("class", "mt-4");
        First_Paragraph.style.fontSize = "25px";
        // create variables for text and store contents
        let First_Service = '1. Creating Customized Web Page';
        let First_Description = 'We make a web page according to the customer\'s request.' +
                                '<br/>It mainly uses HTML, CSS, and JavaScript.' +
                                '<br/>This web page is also produced by us.';
        // First_Paragraph contains 2 variables with HTML tags
        First_Paragraph.innerHTML = First_Service + '<br/>' + First_Description;
        // create image tag named First_image and set its attributes
        let First_image = document.createElement("img");
        First_image.src = "Images/webpage.png";
        First_image.style.height = "150px";
        // first div section includes image and paragraph
        First_Section.appendChild(First_image);
        First_Section.appendChild(First_Paragraph);


        // create second div section and set its attributes
        let Second_Section = document.createElement('div');
        Second_Section.setAttribute("id", "Second_Section");
        Second_Section.setAttribute("class", "mt-5");
        Second_Section.style.height = "300px";
        // create a paragraph tag named Second_Paragraph
        let Second_Paragraph = document.createElement("p");
        // set Second_Paragraph's attributes
        Second_Paragraph.setAttribute("id", "Second_Paragraph");
        Second_Paragraph.setAttribute("class", "mt-4");
        Second_Paragraph.style.fontSize = "25px";
        // create variables for text and store contents
        let Second_Service = '2. Analyzing Algorithm';
        let Second_Description = 'Algorithmic analysis is essential in the processing of projects or programming.' +
                                    '<br/>We have analyzed numerous algorithms while working on several projects.' +
                                    '<br/>We provide customers with the analytical power gained from these experiences.';
        // Second_Paragraph contains 2 variables with HTML tags
        Second_Paragraph.innerHTML = Second_Service + '<br/>' + Second_Description;
        // create image tag named Second_image and set its attributes
        let Second_image = document.createElement("img");
        Second_image.src = "Images/algorithm.png";
        Second_image.style.height = "150px";
        // second div section includes image and paragraph
        Second_Section.appendChild(Second_image);
        Second_Section.appendChild(Second_Paragraph);


        // create third div section and set its attributes
        let Third_Section = document.createElement('div');
        Third_Section.setAttribute("id", "Third_Section");
        Third_Section.setAttribute("class", "mt-5");
        Third_Section.style.height = "400px";
        // create a paragraph tag as Third_Paragraph
        let Third_Paragraph = document.createElement("p");
        // set Third_Paragraph's attributes
        Third_Paragraph.setAttribute("id", "Third_Paragraph");
        Third_Paragraph.setAttribute("class", "mt-4");
        Third_Paragraph.style.fontSize = "25px";
        // create variables for text and store contents
        let Third_Service = '3. Creating Customized Program';
        let Third_Description = 'We make a program according to the customer\'s request.' +
                                '<br/>It could be created by Java, C++ and C#.' +
                                '<br/>We fully utilize our experience in various projects at the college.';
        // Third_Paragraph contains 2 variables with HTML tags
        Third_Paragraph.innerHTML = Third_Service + '<br/>' + Third_Description;
        // create image tag named Third_image and set its attributes
        let Third_image = document.createElement("img");
        Third_image.src = "Images/program.png";
        Third_image.style.height = "150px";
        // third div section includes image and paragraph
        Third_Section.appendChild(Third_image);
        Third_Section.appendChild(Third_Paragraph);

        // MainContent includes three div sections
        MainContent.appendChild(First_Section);
        MainContent.appendChild(Second_Section);
        MainContent.appendChild(Third_Section);
    }

    function ContactFormValidation(){

        ValidateField("#fullName",
            /^([A-Z][a-z]{1,3}\.?\s)?([A-Z][a-z]+)+([\s,-]([A-Z][a-z]+))*$/,
            "Please enter a valid firstname and lastname (ex. Mr. Harry Potter)");

        ValidateField("#contactNumber",
            /^(\+\d{1,3}[\s-.])?\(?\d{3}\)?[\s-.]?\d{3}[\s-.]\d{4}$/,
            "Please enter a valid contact phone number (ex. 416-836-9876)");

        ValidateField("#emailAddress",
            /^[a-zA-Z0-9._-]{8,}\@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,10}$/,
            "Please enter a valid email address (ex. username@isp.com)");

        ValidateField("#firstName",
            /^([A-Z])?([A-Z][a-z]+)*$/,
            "Please enter a valid firstname (ex. Harry)");

        ValidateField("#lastName",
            /^([A-Z])?([A-Z][a-z]+)*$/,
            "Please enter a valid lastname (ex. Potter)");

        ValidateField("#password",
            /[\w\!\@\#\$\%\^\&\*\(\)]{6,}/,
            "Please enter a password as least 6 characters long");

        ValidateField("#confirmPassword",
            null,
            "Your passwords do not match");
    }

    function ValidateField(input_field_id, regular_expression, error_message) {

        let messageArea = $("#messageArea");

        $(input_field_id).on("blur", function () {

            //regular expression for confirmPassword has to be updated after the password has presumably been changed
            if(input_field_id === "#confirmPassword"){
                regular_expression = new RegExp(document.querySelector("#password").value)
            }
            //this means the element fullName
            let inputFieldText = $(this).val();
            if (!regular_expression.test(inputFieldText)) {
                // fail validation
                $(this).trigger("focus").trigger("select");
                messageArea.addClass("alert alert-danger").text(error_message).show();
            } else {
                // pass validation
                messageArea.removeAttr("class").hide();
            }
        });
    }



    /**
     * It is called when the current page's title is Contact Us.
     * Users can submit their information using the pre-made form.
     */
    function DisplayContactPage() {
        console.log("Display Contact Us Page");

        // change the product's link to project page
        let product = document.getElementsByTagName("li")[1];
        product.innerHTML = `<a class="nav-link" href="project.html"><i class="fa-solid fa-diagram-project"></i> Project</a>`;

        // add a nav bar element human resource
        let Contact_Us = document.getElementsByTagName("li")[4];
        let Human_Resources = document.createElement("a");
        Human_Resources.innerHTML = '<a class="nav-link" aria-current="page" href="humanResource.html"><i class="fa-solid fa-people-group"></i> Human Resources</a>';
        Contact_Us.insertAdjacentElement("beforebegin", Human_Resources);

        ContactFormValidation();

        // get the send button element
        let sendButton = document.getElementById("sendButton");

        // when the submit button is clicked, called the function
        sendButton.addEventListener("click", function(event)
        {
            console.log("Send Button clicked!")

            // create new contact object with entered values
            let contact = new Contact(fullName.value, contactNumber.value, emailAddress.value, message.value);
            // store the values in local storage and display the entered values in table
            if(contact.serialize()){
                let key = contact.FullName.substring(0,1) + Date.now();
                localStorage.setItem(key, contact.serialize());
                location.href = "contact-list.html";
            }
            // after 3 seconds, redirect to the home page
            setTimeout("location.href='../index.html'", 3000);
        });
    }

    /**
     * It is called when the current page's title is Contact List.
     * It creates a table using submitted values.
     */
    function DisplayContactListPage() {
        console.log("Display Contact List Page");

        if(localStorage.length > 0){
            let contactList = document.getElementById("contactList");
            let data = "";  // add deserialize data from localStorage

            let keys = Object.keys(localStorage);  // return a string array of keys

            let index = 1;
            for(const key of keys){
                let contactData = localStorage.getItem(key);
                let contact = new Contact();
                contact.deserialize(contactData);
                data += `<tr><th scope="row" class="text-center">${index}</th>
                         <td>${contact.FullName}</td>
                         <td>${contact.ContactNumber}</td>
                         <td>${contact.EmailAddress}</td>
                         <td>${contact.Message}</td>
                         <td></td>
                         </tr>`;
                index++;
            }
            contactList.innerHTML = data;
        }
    }

    /**
     * It is called when the current page's title is About Us.
     */
    function DisplayAboutPage() {

        console.log("Display About Page called");

        // change the product's link to project page
        let product = document.getElementsByTagName("li")[1];
        product.innerHTML = `<a class="nav-link" href="project.html">
                            <i class="fa-solid fa-diagram-project"></i> Project</a>`;

        // add a nav bar element human resource
        let Contact_Us = document.getElementsByTagName("li")[4];
        let Human_Resources = document.createElement("a");
        Human_Resources.innerHTML = '<a class="nav-link" aria-current="page" href="humanResource.html">' +
                                    '<i class="fa-solid fa-people-group"></i> Human Resources</a>';
        Contact_Us.insertAdjacentElement("beforebegin", Human_Resources);

        // create main section
        let Main = document.getElementsByTagName("main")[0];
        // create div section and set its attribute and height
        let Section = document.createElement("div");
        Section.setAttribute("id", "Section1");
        Section.style.height = "1300px";

        // create a paragraph and store text in it
        let FirstParagraph = document.createElement("p");
        FirstParagraph.setAttribute("class", "mb-5");
        FirstParagraph.innerHTML = `Few things about us <br/> We are currently enrolled in Durham College `;
        // create an image tag and assign the image with its size
        let FirstImage = document.createElement("img");
        FirstImage.src = "Images/personal2.png";
        FirstImage.style.width = "500px";
        FirstImage.style.height = "400px";
        // div section includes first image and first paragraph
        Section.appendChild(FirstImage);
        Section.appendChild(FirstParagraph);

        // create a paragraph and store text in it
        let SecondParagraph = document.createElement("p");
        SecondParagraph.setAttribute("class", "mb-5");
        SecondParagraph.innerHTML = `We are Programmers who are always looking for ways to solve your problems`;
        // create an image tag and assign the image with its size
        let SecondImage = document.createElement("img");
        SecondImage.src= "Images/aboutus.jpg";
        SecondImage.style.width = "800px";
        SecondImage.style.height = "500px";
        // div section includes second image and second paragraph
        Section.appendChild(SecondImage);
        Section.appendChild(SecondParagraph);

        // main section includes the div section
        Main.appendChild(Section);

    }


    /**
     * It is called when the current page's title is Human Resource.
     */
    function DisplayHumanResourcePage() {

        // change the product's link to project page
        let product = document.getElementsByTagName("li")[1];
        product.innerHTML = `<a class="nav-link" href="project.html">
                                <i class="fa-solid fa-diagram-project"></i> Project</a>`;

        // add a nav bar element human resource
        let Contact_Us = document.getElementsByTagName("li")[4];
        let Human_Resources = document.createElement("a");
        Human_Resources.innerHTML = '<a class="nav-link active" aria-current="page" href="humanResource.html">' +
                                    '<i class="fa-solid fa-people-group"></i> Human Resources</a>';
        Contact_Us.insertAdjacentElement("beforebegin", Human_Resources);

    }

    function DisplayRegisterPage(){
        console.log("Display Register Page Called!");
        let product = document.getElementsByTagName("li")[1];
        product.innerHTML = `<a class="nav-link" href="project.html">
                                <i class="fa-solid fa-diagram-project"></i> Project</a>`;

        // add a nav bar element human resource
        let Contact_Us = document.getElementsByTagName("li")[4];
        let Human_Resources = document.createElement("a");
        Human_Resources.innerHTML = '<a class="nav-link" aria-current="page" href="humanResource.html">' +
            '<i class="fa-solid fa-people-group"></i> Human Resources</a>';
        Contact_Us.insertAdjacentElement("beforebegin", Human_Resources);

        let messageArea = $("#messageArea");
        messageArea.hide();

        ContactFormValidation();
        $("#submitButton").on("click", (event) => {
            // prevent the default behavior
            event.preventDefault();

            if(firstName.value !== "" &&
                lastName.value !== "" &&
                emailAddress.value !== "" &&
                password.value !== "" &&
                confirmPassword.value !== ""){

                // add user to local storage
                AddUser(firstName.value, lastName.value, firstName.value + lastName.value,
                            emailAddress.value, password.value);
                // print the registered user data in console window
                console.log(core.User(firstName.value));

                // clear the form
                document.forms[0].reset();

            } else{
                console.log("failed");
            }
        });
    }


    function DisplayLoginPage(){
        console.log("Display Login Page Called!");

        let product = document.getElementsByTagName("li")[1];
        product.innerHTML = `<a class="nav-link" href="project.html">
                                <i class="fa-solid fa-diagram-project"></i> Project</a>`;

        // add a nav bar element human resource
        let Contact_Us = document.getElementsByTagName("li")[4];
        let Human_Resources = document.createElement("a");
        Human_Resources.innerHTML = '<a class="nav-link" aria-current="page" href="humanResource.html">' +
            '<i class="fa-solid fa-people-group"></i> Human Resources</a>';
        Contact_Us.insertAdjacentElement("beforebegin", Human_Resources);

        let messageArea = $("#messageArea");
        messageArea.hide();

        ContactFormValidation();

        $("#loginButton").on("click", function() {

            //Check if the username "link" is already present in the navbar
            if (document.querySelector("#nav-username-link") === null){

                //If it's not, find the correct spot in the navbar and insert HTML consisting of a list item and anchor tag
                // let navbarContact = document.querySelector(`li:has(a[href="contact.html"])`);
                // let usernameNavHTML = `<li class="nav-item">
                //                <a class="nav-link" id="nav-username-link" href="#">
                //                </li>`;
                // navbarContact.insertAdjacentHTML("afterend", usernameNavHTML);

                /*// change the login text to logout
                let navbarLogin = document.querySelector(`li a[href="login.html"]`);
                navbarLogin.innerHTML = "<i class=\"fa-solid fa-arrow-left\"></i> Logout</a>";*/
            }

            //find the username link in the navbar and update its text
            // document.querySelector("#nav-username-link").innerHTML =
            //     `<i class=\"fa-solid fa-user-tag\"></i> ${username.value}</a>`;
            let success = false;
            let newUser = new core.User();

            $.get("./data/user.json", function (data) {

                for(const user of data.users){
                    //check if the username and password
                    if(username.value === user.Username && password.value === user.Password)
                    {
                        newUser.fromJSON(user);
                        success = true;
                        break;
                    }
                }

                if(success)
                {
                    // add user to session storage
                    sessionStorage.setItem("user", newUser.serialize());
                    messageArea.removeAttr("class").hide();

                    // add username in navbar
                    let navbarContact = document.querySelector(`li:has(a[href="contact.html"])`);
                    let usernameNavHTML = `<li class="nav-item">
                               <a class="nav-link" id="nav-username-link" href="#"></li>`;
                    navbarContact.insertAdjacentHTML("afterend", usernameNavHTML);
                    document.querySelector("#nav-username-link").innerHTML =
                        `<i class=\"fa-solid fa-user-tag\"></i> ${username.value}</a>`;

                    // change the login text to logout
                    let navbarLogin = document.querySelector(`li a[href="login.html"]`);
                    navbarLogin.innerHTML = "<i class=\"fa-solid fa-arrow-left\"></i> Logout</a>";

                    // redirect user to secure area of the site.
                    // location.href = "contact-list.html";
                }else{
                    // when they do not match, print error message
                    $("#username").trigger("focus").trigger("select");
                    messageArea.addClass("alert alert-danger").text("Error: Invalid Login Credentials").show();
                }
                // clear the form
                document.forms[0].reset();
            });
        });

        $("#cancelButton").on("click", function(){
            document.forms[0].reset();
            location.href = "index.html";
        });
    }

    function CheckLogin(){
        if(sessionStorage.getItem("user"))
        {
            $("#login").html(`<a id="logout" class="nav-link" href="#">
                            <i class="fa-solid fa-sign-out-alt"></i> Logout</a>`);
        }
        $("#logout").on("click", function() {
            sessionStorage.clear();
            location.href = "index.html";
        });
    }

})();

