import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SeoService } from '../../services/seo.service';
import emailjs from '@emailjs/browser';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  course: any;
  selectedImage: string = '';

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private seoService: SeoService
  ) {}

  ngOnInit() {
    // Get course data from navigation state
    this.course = window.history.state.course;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    if (!this.course) {
      // Redirect back if no course data
      this.router.navigate(['/course-list']);
      return;
    }
    
    // Set selected image
    this.selectedImage = this.course.img;

    // Initialize form with course name
    this.form.course_name = this.course.title;

    // Update SEO meta tags based on course data
    this.seoService.updateTitle(`${this.course.title} - Onenesscloud`);
    this.seoService.updateMetaTags({
      title: `${this.course.title} - Online Training Course | Onenesscloud`,
      description: `${this.course.description} Duration: ${this.course.duration_weeks} weeks. Rating: ${this.course.rating}/5 (${this.course.reviews} reviews). Enroll now for ₹${this.course.fees}.`,
      keywords: `${this.course.title}, ${this.course.level} course, online training, certification course, ${this.course.title} certification`,
      canonical: `https://onenesscloud.com/course-description/${this.course.id}`,
      ogTitle: `${this.course.title} - Onenesscloud`,
      ogDescription: `${this.course.description} Join ${this.course.students_enrolled}+ students. ${this.course.duration_weeks} weeks training.`,
      ogImage: `https://onenesscloud.com/${this.course.img}`
    });
  }

  goBack() {
    this.router.navigate(['/courses']);
  }

  form = {
    from_name: '',
    from_phone: '',
    from_email: '',
    from_message: '',
    course_name: ''
  };

    sendEmail() {
    // Update form with course name before sending
    this.form.course_name = this.course ? this.course.title : '';
    
    // Create email data with proper field names that match your template
    const emailData = {
      from_name: this.form.from_name,
      from_email: this.form.from_email,
      from_phone: this.form.from_phone,
      from_message: this.form.from_message,
      course_name: this.form.course_name,
      // Alternative field names that might be used in your template
      full_name: this.form.from_name,
      phone_number: this.form.from_phone,
      email_id: this.form.from_email,
      selected_program: this.form.course_name,
      message: this.form.from_message
    };

    console.log('Sending email with data:', emailData); // Debug log
    
    emailjs
      .send(
        environment.emailJs.serviceId,
        environment.emailJs.templateId,
        emailData,
        environment.emailJs.publicKey
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          // Reset form after successful submission
          this.form = {
            from_name: '',
            from_phone: '',
            from_email: '',
            from_message: '',
            course_name: this.course ? this.course.title : ''
          };
          Swal.fire({
            icon: 'success',
            title: 'Email Sent!',
            text: 'Your enquiry has been submitted successfully.',
            confirmButtonColor: '#2563eb'
          });
        },
        (error) => {
          console.error('FAILED...', error);
          Swal.fire({
            icon: 'error',
            title: 'Failed!',
            text: 'Failed to send email. Please try again.',
            confirmButtonColor: '#dc2626'
          });
        }
      );
  }

}
