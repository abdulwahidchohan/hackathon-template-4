import { PaginationComponent } from "@/components/PaginationComponent"
import { Navigation } from "@/components/Navigation"

export default function Page2({ searchParams }: { searchParams: { page?: string } }) {
  const currentPage = Number(searchParams.page) || 1
  const totalPages = 4 // Assuming 4 sub-pages within Page 2

  const items = Array.from({ length: 10 }, (_, i) => `Item ${i + 1} on Page 2-${currentPage}`)

  return (
    <div>
      <Navigation />
      <h1 className="text-2xl font-bold mb-4">Page 2</h1>
      <ul className="mb-4">
        {items.map((item, index) => (
          <li key={index} className="mb-2">
            {item}
          </li>
        ))}
      </ul>
      <PaginationComponent currentPage={currentPage} totalPages={totalPages} />
    </div>
  )
}

