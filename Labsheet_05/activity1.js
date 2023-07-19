function exercise01() {
    const code = `
    class Student {
        constructor(indexNumber, name, dateOfBirth, address, contactNumber, emailAddress) {
          this.indexNumber = indexNumber;
          this.name = name;
          this.dateOfBirth = dateOfBirth;
          this.address = address;
          this.contactNumber = contactNumber;
          this.emailAddress = emailAddress;
          this.groupNumber = null; // Group number will be set later
        }
      
        setDetails(indexNumber, name, dateOfBirth, address, contactNumber, emailAddress) {
          this.indexNumber = indexNumber;
          this.name = name;
          this.dateOfBirth = dateOfBirth;
          this.address = address;
          this.contactNumber = contactNumber;
          this.emailAddress = emailAddress;
        }
      
        showDetails() {
          console.log(\`Index Number: \${this.indexNumber}\`);
          console.log(\`Name: \${this.name}\`);
          console.log(\`Date of Birth: \${this.dateOfBirth}\`);
          console.log(\`Address: \${this.address}\`);
          console.log(\`Contact Number: \${this.contactNumber}\`);
          console.log(\`Email Address: \${this.emailAddress}\`);
        }
      
        setGroupNumber() {
          this.groupNumber = this.indexNumber % 4 + 1;
          console.log("Assigned to group")
        }
      
        showGroupNumber() {
          if (this.groupNumber !== null) {
            console.log(\`Group Number: \${this.groupNumber}\`);
          } else {
            console.log('Group number has not been set.');
          }
        }
      }
      
      // Create a new student object and set details
      const student1 = new Student();
      student1.setDetails(145, 'Sasanka', '2000-03-01', '123 Highlevel Rd', '0771231231', 'sasa@gmail.com');
      
      // Show student details
      console.log('Student Details:');
      student1.showDetails();
      
      // set group number and show group number
      student1.setGroupNumber();
      student1.showGroupNumber();
      

    `;

    const consoleOutput = eval(code);
    document.getElementById('code').value = code;
    document.getElementById('output').innerHTML = consoleOutput;
}

