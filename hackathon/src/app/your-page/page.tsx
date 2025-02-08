// src/app/your-page/page.tsx
import { PaginationComponent } from "@/components/PaginationComponent";

interface DataItem {
  id: number;
  title: string;
}

async function fetchData(page: number) {
  try {
    // Replace this URL with your actual API endpoint
    const res = await fetch(`https://api.example.com/data?page=${page}`, {
      // Add a timeout to prevent hanging requests
      signal: AbortSignal.timeout(5000),
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Failed to fetch data:", error);
    // Return an empty array as fallback
    return [];
  }
}

export default async function YourPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const currentPage = Number(searchParams.page) || 1;
  const totalPages = 6; // Replace with your actual total number of pages

  let data: DataItem[] = [];
  try {
    data = await fetchData(currentPage);
  } catch (error) {
    console.error("Error in page component:", error);
    // data remains an empty array
  }

  return (
    <div>
      <h1>Your Page Title</h1>
      {data.length > 0 ? (
        data.map((item: DataItem) => <div key={item.id}>{item.title}</div>)
      ) : (
        <p>No data available. Please try again later.</p>
      )}

      <PaginationComponent currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
}