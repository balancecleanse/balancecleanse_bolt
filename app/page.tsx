import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1611048267451-e6ed903d4a38?auto=format&fit=crop&q=80"
          alt="Natural wellness products"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Natural Wellness for Modern Living
            </h1>
            <p className="text-xl mb-8">
              Discover our range of natural products designed to help you achieve balance in your daily life.
            </p>
            <Button size="lg" asChild>
              <Link href="/shop">Shop Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Daily Cleanse",
                price: "$39.99",
                image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80"
              },
              {
                name: "Wellness Tea",
                price: "$24.99",
                image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80"
              },
              {
                name: "Essential Oils Set",
                price: "$49.99",
                image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80"
              }
            ].map((product, index) => (
              <div key={index} className="group relative">
                <div className="aspect-square relative overflow-hidden rounded-lg">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-primary">{product.price}</p>
                  <Button variant="outline" className="w-full mt-2">
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Balance Cleanse?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "100% Natural",
                description: "All our products are made with natural ingredients, carefully sourced for quality."
              },
              {
                title: "Scientifically Proven",
                description: "Our formulations are backed by scientific research and testing."
              },
              {
                title: "Sustainable Packaging",
                description: "We use eco-friendly packaging to minimize our environmental impact."
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter for wellness tips, exclusive offers, and new product updates.
            </p>
            <form className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border rounded-md"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}