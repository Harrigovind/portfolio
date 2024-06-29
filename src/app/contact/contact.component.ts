// src/app/contact/contact.component.ts
import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  imports:[
    FormsModule,
    HttpClientModule
  ]
  
})
export class ContactComponent {

  constructor(private http: HttpClient) { }
  onSubmit(contactForm: NgForm) {
    if (contactForm.valid) {
      const formData = contactForm.value;
      console.log('Form Data:', formData);

      const url = 'https://script.google.com/macros/s/AKfycbxKq1cwHXMzObouJhVtydWZBP9WIKpUA1ewbhGpdNrHdJUt9p-g8adsBND-oWgW9roH6w/exec'

      if (formData.name && formData.email && formData.message) {
        fetch(url, {
          
            method: 'POST',
            
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'text/plain;charset=utf-8'
            },
            
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Response:', data);

            if (data.result == 'success'){
                alert("Message sent successfully!");
            }
            else{
                alert("Couldn't send message due to "+data.status);
            }
            
            
        })
        .catch(error => {
            console.error('Error:', error);
            
        });
        }
      
      contactForm.reset();
    }
  }
}
