"use client"

import { useState, useEffect, useRef } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search } from "lucide-react"
import { type Product, products } from "@/data/productData"

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("")
  const [suggestions, setSuggestions] = useState<Product[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (searchTerm.length > 0) {
      const filteredProducts = products.filter(
        (product) =>(
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.price.toString().includes(searchTerm)
        )
          );
      setSuggestions(filteredProducts)
      setShowSuggestions(true)
    } else {
      setSuggestions([])
      setShowSuggestions(false)
    }
  }, [searchTerm])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Perform search action here
    console.log("Searching for:", searchTerm)
  }

  const handleSuggestionClick = (product: Product) => {
    setSearchTerm(product.name)
    setSelectedProduct(product)
    setShowSuggestions(false)
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  const handleInputFocus = () => {
    if (searchTerm.length > 0) {
      setShowSuggestions(true)
    }
  }

  const handleInputBlur = () => {
    // Delay hiding suggestions to allow for clicks on suggestions
    setTimeout(() => setShowSuggestions(false), 200)
  }

  return (
    <div className="w-full max-w-md mx-auto relative">
      <form onSubmit={handleSearch} className="flex gap-2 mb-4">
        <Input
          ref={inputRef}
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          className="flex-grow"
        />
        <Button type="submit">
          <Search className="w-4 h-4 mr-2" />
          Search
        </Button>
      </form>
      {showSuggestions && suggestions.length > 0 && (
        <Card className="absolute z-10 w-full mt-1">
          <CardContent className="p-0">
            <ul className="py-2">
              {suggestions.map((product) => (
                <li
                  key={product.id}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSuggestionClick(product)}
                >
                  {product.name}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
      {selectedProduct && (
        <Card className="mt-4">
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold">{selectedProduct.name}</h3>
            <p className="text-sm text-gray-600">{selectedProduct.description}</p>
            <p className="text-sm font-medium mt-2">${selectedProduct.price.toFixed(2)}</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}