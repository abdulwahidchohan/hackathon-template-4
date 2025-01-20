"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import productData from "@/data/productData"

const categories = ["Chairs", "Armchairs", "Lounge Chairs", "Dining Chairs", "Sofas"]

const styles = ["Modern", "Classic", "Nordic", "Minimalist", "Luxury"]

export default function CategoryFilters() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [items, setItems] = useState(productData)
  const [filteredItems, setFilteredItems] = useState(productData)
  const [priceRange, setPriceRange] = useState([0, 3000])
  const [selectedStyles, setSelectedStyles] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setItems(productData)
      setFilteredItems(productData)
      setLoading(false)
    }
    fetchData()
  }, [])

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  const handlePriceRangeChange = (value: number[]) => {
    setPriceRange(value)
  }

  const handleStyleChange = (style: string) => {
    setSelectedStyles((prev) => (prev.includes(style) ? prev.filter((s) => s !== style) : [...prev, style]))
  }

  const applyFilters = () => {
    const filtered = items.filter(
      (item) =>
        (selectedCategories.length === 0 ||
          selectedCategories.some((cat) => item.name.toLowerCase().includes(cat.toLowerCase()))) &&
        Number.parseInt(item.price) >= priceRange[0] &&
        Number.parseInt(item.price) <= priceRange[1],
    )
    setFilteredItems(filtered)
  }

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      applyFilters()
    }, 300)
    return () => clearTimeout(debounceTimeout)
  }, [selectedCategories, priceRange, selectedStyles])

  const clearFilters = () => {
    setSelectedCategories([])
    setPriceRange([0, 3000])
    setSelectedStyles([])
  }

  return (
    <div className="container mx-auto p-6">
      <div className="grid gap-6 md:grid-cols-[300px_1fr]">
        <Card>
          <CardHeader>
            <CardTitle>Filters</CardTitle>
            <CardDescription>Refine Your Furniture Search</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="mb-2 text-sm font-medium">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant={selectedCategories.includes(category) ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => toggleCategory(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-medium">Price Range</h3>
              <Slider
                min={0}
                max={3000}
                step={50}
                value={priceRange}
                onValueChange={handlePriceRangeChange}
                className="mb-2"
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>${priceRange[0].toLocaleString()}</span>
                <span>${priceRange[1].toLocaleString()}</span>
              </div>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-medium">Styles</h3>
              {styles.map((style) => (
                <div key={style} className="flex items-center space-x-2">
                  <Checkbox
                    id={style}
                    checked={selectedStyles.includes(style)}
                    onCheckedChange={() => handleStyleChange(style)}
                  />
                  <label
                    htmlFor={style}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {style}
                  </label>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" onClick={clearFilters} className="w-full">
              Clear Filters
            </Button>
          </CardFooter>
        </Card>
        <div>
          <h2 className="mb-2 text-xl font-semibold">Available Furniture</h2>
          {loading ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, index) => (
                <Card key={index}>
                  <CardHeader>
                    <Skeleton className="h-48 w-full" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-4 w-2/3 mb-2" />
                    <Skeleton className="h-4 w-1/2 mb-2" />
                    <Skeleton className="h-4 w-1/3" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : filteredItems.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map((item) => (
                <Card key={item.id} className="flex flex-col">
                  <CardHeader>
                    <div className="relative aspect-square">
                      <Image
                        src={item.imagePath || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover rounded-t-lg"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <CardTitle className="line-clamp-1">{item.name}</CardTitle>
                    <CardDescription className="line-clamp-2 mt-2">{item.description}</CardDescription>
                    <div className="mt-4 flex items-center justify-between">
                      <p className="text-2xl font-bold">${Number.parseInt(item.price).toLocaleString()}</p>
                      {item.discountPercentage > 0 && (
                        <Badge variant="destructive">{item.discountPercentage}% OFF</Badge>
                      )}
                    </div>
                    {item.stockLevel <= 5 && (
                      <p className="text-sm text-red-500 mt-2">Only {item.stockLevel} left in stock!</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">No furniture available for the selected filters.</p>
          )}
        </div>
      </div>
    </div>
  )
}

