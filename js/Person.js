export default class Person{
    constructor (first, last, bday, year, url, contact, index) {
        this.firstName = first;
        this.lastName = last;
        this.birthday = bday;
        this.yearOfBirth = year;
        this.profileImg = url;
        this.contact = contact;
        this.index = index;
    }

    getAge(){
        return new Date().getUTCFullYear() - this.yearOfBirth;
    }
   
    addPrefixToBirthday(){
        let newBirthdayArray = String(this.birthday[0]).split("").map((birthdayArray)=>{
            return Number(birthdayArray);});
        let lastDigit;

        if(newBirthdayArray.length === 1){
            lastDigit = newBirthdayArray[0];
            if(lastDigit === 1)return 'st';
            if(lastDigit === 2)return 'nd';
            if(lastDigit === 3)return 'rd';
            else{return 'th'}
        }

        if(newBirthdayArray.length > 1){
            if(this.birthday[0] > 9 && this.birthday[0] < 21)return 'th';
            if(this.birthday[0] === 21 || this.birthday[0] === 31)return 'st';
            if(this.birthday[0] === 22)return 'nd';
            if(this.birthday[0] === 23)return 'rd';
            else{return 'th'}   
        }
    }

    refactorBirthday(){
        let months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');

	    return  `${months[this.birthday[1] -1 ]} ${this.birthday[0]}${this.addPrefixToBirthday()}`
    }

    isTodayBirthday(){
        return new Date().getDate() === this.birthday[0] && (new Date().getMonth() + 1 )=== this.birthday[1] ? true : false;
    }

    renderMarkup(){
        let happyBirthday = `<h1 class="text-danger">Happy Birthday !!!</h1>`;
        let border = `border border-danger`;
        
        return `
        <div class="row">
		<div class="col-10 m-auto ">
			<div class="card mb-3 p-5 bg-light ${this.isTodayBirthday()? border : '' }  ">
				<div class="row g-0">
					<div class="col-12 col-sm-8 col-md-4 mx-auto my-auto">
						<img id="profile-img" src="${this.profileImg}" class="img-fluid rounded-circle photo" alt="profile photo">
					</div>
					<div class="col-md-8 d-grid align-items-center justify-content-center">
						<div class="card-body">
						<h5 class="card-title fw-bolder h2" id="first-name">${this.firstName}</h5>
						<h5 class="card-title fw-bolder h1 " id="last-name">${this.lastName}</h5>

						<p class="card-text lead" id="birth-date"><b>Birthday:</b> ${this.refactorBirthday()}</p>
						<p class="card-text lead" id="birth-date"><b>Age:</b> ${this.getAge()} years old</p>
						<p class="card-text"> <b>Contact:</b> <small class="text-muted" id="contact">
						<a href="${this.contact}" target="_blank"> Send a Happy Birthday</a></small></p>
						${ this.isTodayBirthday() ? happyBirthday: '' }
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
        `;
    }

    timeUntilBirthday(){
        const dayofBirth = `${new Date().getFullYear()}/${this.birthday[1]}/${this.birthday[0]}`;

            const total = Date.parse(dayofBirth) - Date.parse(new Date());
            const seconds = Math.floor( (total/1000) % 60 );
            const minutes = Math.floor( (total/1000/60) % 60 );
            const hours = Math.floor( (total/(1000*60*60)) % 24 );
            const days = Math.floor( total/(1000*60*60*24) );
          
            //console.log(dayofBirth ,Date.parse(dayofBirth), `BLAAAAAAA`)
        this.index = days;
            return {
              total,
              days,
              hours,
              minutes,
              seconds
            };
          
          
    }

};