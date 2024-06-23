import BookCard from '@/components/BookCard'
import { useBookRecommendationsByISBNQuery } from '@/hooks/queries/useBooks'
import { BookMinusIcon } from 'lucide-react'
import LoadingSpinner from '@/components/LoadingSpinner'

export default function SidebarRecommendations({ isbn }: { isbn: string }) {
  const recommendationsQuery = useBookRecommendationsByISBNQuery(isbn)
  if (recommendationsQuery.isLoading) return <LoadingSpinner />
  if (!recommendationsQuery.data?.length) {
    return (
      <div className="flex flex-col z-10 min-w-fit bg-gray-200 float-left py-5 px-5 max-h-screen overflow-y-scroll">
        <div className="flex flex-col h-full items-center mt-12 h-screen">
          <BookMinusIcon size={48} className="my-4" />
          <span className="text-2xl font-semibold mb-2">We're sorry</span>
          <span className="text-lg"> We couldn't find any recommendations for this book</span>
        </div>
      </div>
    )
  }
  return (
    <div className="flex flex-col z-10 min-w-fit bg-gray-200 float-left py-5 px-5 h-screen max-h-screen overflow-y-scroll">
      <h2 className="text-2xl font-regular mb-6">You might also like</h2>
      <div className="flex flex-col gap-4">
        {recommendationsQuery.data?.map((book) => <BookCard key={book.id} book={book} />)}
      </div>
    </div>
  )
}
