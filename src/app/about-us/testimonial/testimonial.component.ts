import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  featuredTestimonials: any[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CTO',
      company: 'TechVision Corp',
      companyLogo: 'assets/images/company1.png',
      testimonial: 'OnenenessCloud transformed our entire development workflow. Their comprehensive training programs elevated our team\'s capabilities beyond expectations, resulting in 40% faster delivery times.',
      img: 'assets/images/client1.jpg',
      gender: 'female',
      rating: 5,
      featured: true
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Head of Engineering',
      company: 'Innovation Labs',
      companyLogo: 'assets/images/company2.png',
      testimonial: 'The expertise and practical approach of OnenenessCloud is unmatched. Our development team gained cutting-edge skills that directly contributed to our product success.',
      img: 'assets/images/client2.jpg',
      gender: 'male',
      rating: 5,
      featured: true
    }
  ];

  clientTestimonials: any[] = [
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'VP of Technology',
      company: 'DataFlow Systems',
      testimonial: 'Outstanding training quality and exceptional support. Our team\'s productivity increased significantly after their cybersecurity bootcamp.',
      img: 'assets/images/client3.jpg',
      gender: 'female',
      rating: 5
    },
    {
      id: 4,
      name: 'David Kumar',
      position: 'Senior Manager',
      company: 'CloudTech Solutions',
      testimonial: 'Professional, knowledgeable, and results-driven. The cloud architecture training was exactly what our team needed.',
      img: 'assets/images/client4.jpg',
      gender: 'male',
      rating: 5
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      position: 'IT Director',
      company: 'SecureNet Inc',
      testimonial: 'Highly recommended! The hands-on approach and real-world scenarios made complex concepts accessible to our entire team.',
      img: 'assets/images/client5.jpg',
      gender: 'female',
      rating: 4
    },
    {
      id: 6,
      name: 'James Wilson',
      position: 'Lead Developer',
      company: 'AgileCode Ltd',
      testimonial: 'Excellent curriculum and expert instructors. The DevOps training helped us modernize our deployment processes completely.',
      img: 'assets/images/client6.jpg',
      gender: 'male',
      rating: 5
    }
  ];

  studentSuccessStories: any[] = [
    {
      id: 7,
      name: 'Priya Malik',
      course: 'Full Stack Development',
      achievement: 'Landed Senior Developer Role',
      company: 'Microsoft',
      testimonial: 'From complete beginner to senior developer in 8 months. The practical projects and mentorship made all the difference.',
      img: 'assets/images/success1.jpg',
      gender: 'female',
      salaryIncrease: '150%'
    },
    {
      id: 8,
      name: 'Raj Patel',
      course: 'Cloud Architecture',
      achievement: 'AWS Solutions Architect',
      company: 'Amazon',
      testimonial: 'The comprehensive cloud training opened doors I never imagined. Now working at my dream company!',
      img: 'assets/images/success2.jpg',
      gender: 'male',
      salaryIncrease: '200%'
    },
    {
      id: 9,
      name: 'Anita Singh',
      course: 'Data Science & AI',
      achievement: 'Lead Data Scientist',
      company: 'Google',
      testimonial: 'The AI/ML curriculum was incredibly thorough. I went from analyst to lead data scientist at Google.',
      img: 'assets/images/success3.jpg',
      gender: 'female',
      salaryIncrease: '180%'
    }
  ];

  stats: any[] = [
    { value: '5000+', label: 'Students Trained' },
    { value: '98%', label: 'Job Placement Rate' },
    { value: '4.9/5', label: 'Average Rating' },
    { value: '150+', label: 'Corporate Partners' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onImgError(event: Event, person: any) {
    const fallbackImage = person.gender === 'female' ? 'assets/images/dummy2.jpg' : 'assets/images/dummy1.jpg';
    (event.target as HTMLImageElement).src = fallbackImage;
  }

  getStarArray(rating: number): boolean[] {
    return Array(5).fill(false).map((_, i) => i < rating);
  }
}
