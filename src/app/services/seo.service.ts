import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(
    private meta: Meta,
    private title: Title,
    private router: Router
  ) {}

  updateTitle(title: string) {
    this.title.setTitle(title);
  }

  updateMetaTags(tags: {
    title?: string;
    description?: string;
    keywords?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    canonical?: string;
  }) {
    if (tags.title) {
      this.title.setTitle(tags.title);
      this.meta.updateTag({ property: 'og:title', content: tags.title });
      this.meta.updateTag({ name: 'twitter:title', content: tags.title });
    }

    if (tags.description) {
      this.meta.updateTag({ name: 'description', content: tags.description });
      this.meta.updateTag({ property: 'og:description', content: tags.description });
      this.meta.updateTag({ name: 'twitter:description', content: tags.description });
    }

    if (tags.keywords) {
      this.meta.updateTag({ name: 'keywords', content: tags.keywords });
    }

    if (tags.ogImage) {
      this.meta.updateTag({ property: 'og:image', content: tags.ogImage });
      this.meta.updateTag({ name: 'twitter:image', content: tags.ogImage });
    }

    if (tags.canonical) {
      const link: HTMLLinkElement = document.querySelector('link[rel="canonical"]') || document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', tags.canonical);
      document.head.appendChild(link);
    }

    this.meta.updateTag({ property: 'og:url', content: `https://shrijanscaffolding.com${this.router.url}` });
  }

  createProductSchema(product: any) {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": product.name,
      "image": `https://shrijanscaffolding.com/${product.image}`,
      "description": product.description,
      "brand": {
        "@type": "Brand",
        "name": "ShrijanScaffolding Towers"
      },
      "offers": {
        "@type": "Offer",
        "url": `https://shrijanscaffolding.com/product-description`,
        "priceCurrency": "INR",
        "price": product.price,
        "availability": "https://schema.org/InStock"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": product.rating || "4.5",
        "reviewCount": product.reviews || "100"
      }
    });
    document.head.appendChild(script);
  }
}
