"use client"

import Image from "next/image"
import { Star, ArrowRight, Heart, Facebook, Instagram, Twitter, Circle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProductDetail() {
  return (
    <div className="w-full">
      <header className="bg-slate-50 py-8">
        <div className="container">
          <h1 className="text-2xl font-semibold text-primary">Product Details</h1>
          <p className="text-muted-foreground">
            Home . Pages . <span className="text-primary">Product Details</span>
          </p>
        </div>
      </header>

      <div className="container py-20">
        <Card className="grid grid-cols-1 md:grid-cols-7 gap-6 p-6">
          {/* Thumbnail Images */}
          <div className="flex md:flex-col gap-4">
            {[1, 2, 3].map((num) => (
              <div key={num} className="relative aspect-square w-20 rounded-lg overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=120&width=120`}
                  alt={`Product view ${num}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Main Image */}
          <div className="col-span-2 flex justify-center items-center">
            <div className="relative aspect-[4/5] w-full max-w-md">
              <Image
                src="/placeholder.svg?height=520&width=420"
                alt="Product main view"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="col-span-4 space-y-6">
            <h2 className="text-4xl font-semibold text-primary">Playwood arm chair</h2>

            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
                <Star className="w-4 h-4 text-muted-foreground" />
              </div>
              <span className="text-sm text-muted-foreground">(22)</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xl font-semibold text-primary">$32.00</span>
              <span className="text-sm text-red-500 line-through">$64.00</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-semibold text-primary">Color:</span>
              <div className="flex gap-2">
                {["pink", "red", "green"].map((color) => (
                  <Circle key={color} className={`w-4 h-4 fill-${color}-500 text-${color}-500`} />
                ))}
              </div>
            </div>

            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.
            </p>

            <div className="flex gap-3">
              <Button>Add to Cart</Button>
              <Button variant="outline" size="icon">
                <Heart className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-4">
              <div className="flex gap-3">
                <span className="font-semibold text-primary">Categories:</span>
                <span className="text-muted-foreground">Bags</span>
              </div>

              <div className="flex gap-3">
                <span className="font-semibold text-primary">Share:</span>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="rounded-full h-6 w-6">
                    <Facebook className="h-3 w-3" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full h-6 w-6">
                    <Instagram className="h-3 w-3" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full h-6 w-6">
                    <Twitter className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="bg-slate-50 py-10">
        <div className="container">
          <Tabs defaultValue="description">
            <TabsList>
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="additional">Additional Info</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="video">Video</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-4">Lorem, ipsum.</h3>
                <p className="text-muted-foreground">
                  Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend
                  habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur
                  neque, elit, aliquet.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-primary mb-4">More Details</h3>
                <ul className="space-y-3">
                  {[...Array(6)].map((_, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">
                        Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo
                        netus dis.
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div className="container py-20">
        <h2 className="text-4xl font-semibold text-primary mb-16">Related Products</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-10">
          {[...Array(4)].map((_, i) => (
            <Card key={i} className="p-4">
              <div className="relative aspect-square mb-4">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt={`Related product ${i + 1}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="font-semibold">Related Product {i + 1}</h3>
              <p className="text-muted-foreground">$99.00</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

