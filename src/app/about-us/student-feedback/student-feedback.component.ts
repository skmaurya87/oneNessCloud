import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-feedback',
  templateUrl: './student-feedback.component.html',
  styleUrls: ['./student-feedback.component.css']
})
export class StudentFeedbackComponent implements OnInit {
  
  studentFeedbacks: any[] = [
    {
      id: 1,
      name: 'Priya Sharma',
      course: 'Full Stack Development',
      rating: 5,
      feedback: 'The training was exceptional! The instructors were knowledgeable and provided hands-on experience that helped me transition into my new role as a software developer.',
      img: 'assets/images/student1.jpg',
      gender: 'female',
      position: 'Software Developer',
      company: 'Tech Solutions Inc.'
    },
    {
      id: 2,
      name: 'Rahul Kumar',
      course: 'Cybersecurity Fundamentals',
      rating: 5,
      feedback: 'Outstanding course content and practical labs. I gained valuable skills that directly contributed to my promotion as a Security Analyst.',
      img: 'assets/images/student2.jpg',
      gender: 'male',
      position: 'Security Analyst',
      company: 'CyberGuard Systems'
    },
    {
      id: 3,
      name: 'Sneha Patel',
      course: 'Data Science & AI',
      rating: 4,
      feedback: 'Comprehensive curriculum with real-world projects. The machine learning modules were particularly insightful and helped me understand complex algorithms.',
      img: 'assets/images/student3.jpg',
      gender: 'female',
      position: 'Data Scientist',
      company: 'Analytics Pro'
    },
    {
      id: 4,
      name: 'Amit Verma',
      course: 'Cloud Computing',
      rating: 5,
      feedback: 'Excellent training on AWS and Azure platforms. The hands-on labs and project-based learning approach made complex concepts easy to understand.',
      img: 'assets/images/student4.jpg',
      gender: 'male',
      position: 'Cloud Engineer',
      company: 'CloudTech Solutions'
    },
    {
      id: 5,
      name: 'Kavya Singh',
      course: 'UI/UX Design',
      rating: 5,
      feedback: 'Amazing course with practical design challenges. The mentorship and portfolio guidance helped me land my dream job as a UX Designer.',
      img: 'assets/images/student5.jpg',
      gender: 'female',
      position: 'UX Designer',
      company: 'Design Studio'
    },
    {
      id: 6,
      name: 'Vikash Singh',
      course: 'DevOps Engineering',
      rating: 4,
      feedback: 'Great learning experience with industry-relevant tools and practices. The CI/CD pipeline projects were particularly valuable for my career growth.',
      img: 'assets/images/student6.jpg',
      gender: 'male',
      position: 'DevOps Engineer',
      company: 'Automation Hub'
    },
    {
      id: 7,
      name: 'Ritu Gupta',
      course: 'Digital Marketing',
      rating: 5,
      feedback: 'Comprehensive training covering all aspects of digital marketing. The practical campaigns and analytics training boosted my marketing skills significantly.',
      img: 'assets/images/student7.jpg',
      gender: 'female',
      position: 'Digital Marketing Specialist',
      company: 'MarketPro Agency'
    },
    {
      id: 8,
      name: 'Arjun Mehta',
      course: 'Mobile App Development',
      rating: 4,
      feedback: 'Well-structured course with focus on both Android and iOS development. The project-based approach helped me build a strong portfolio.',
      img: 'assets/images/student8.jpg',
      gender: 'male',
      position: 'Mobile App Developer',
      company: 'AppCraft Studios'
    },
    {
      id: 9,
      name: 'Anjali Joshi',
      course: 'Business Analytics',
      rating: 5,
      feedback: 'Excellent training that bridged the gap between business and technology. The case studies and real-world scenarios were incredibly valuable.',
      img: 'assets/images/student9.jpg',
      gender: 'female',
      position: 'Business Analyst',
      company: 'Insights Corporation'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onImgError(event: Event, student: any) {
    const fallbackImage = student.gender === 'female' ? 'assets/images/dummy2.jpg' : 'assets/images/dummy1.jpg';
    (event.target as HTMLImageElement).src = fallbackImage;
  }

  getStarArray(rating: number): boolean[] {
    return Array(5).fill(false).map((_, i) => i < rating);
  }
}
