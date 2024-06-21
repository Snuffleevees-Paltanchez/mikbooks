import { Button } from '@nextui-org/react'
import PriceTable from '@/components/BookDetail/PriceTable'
import FavoriteChip from '@/components/FavoriteChip'
import BookImage from '@/components/BookImage'
import { type Book } from '@/hooks/queries/useBooks'
import { Plus } from 'lucide-react'

export default function BookDetail({ isbn, bookInfo }: { isbn: string; bookInfo: Book }) {
  return (
    <div className="flex flex-row h-full w-full m-10 gap-6">
      <div className="flex flex-col gap-4">
        <BookImage image={bookInfo.imgUrl} title={bookInfo.title} customClasses="h-[300px]" />
        <div className="flex flex-row gap-1 items-center">
          <FavoriteChip customClasses="text-base" markedAsFavoriteCount={0} />
          <Button radius="full" color="primary" variant="light">
            <Plus /> Add to favorites
          </Button>
        </div>
        <p className="text-sm">
          <span className="font-bold">ISBN</span> {isbn}
        </p>
      </div>
      <div className="flex flex-col items-start">
        <h1 className="text-3xl font-semibold">{bookInfo.title}</h1>
        <span className="my-1 font-medium italic text-sm">{bookInfo.publicationDate}</span>
        <span className="text-lg">{bookInfo.author?.name}</span>
        <p className="mb-6">{bookInfo.description}</p>
        <PriceTable prices={bookInfo.prices} />
      </div>
    </div>
  )
}
