import { Divider } from '@nextui-org/react'
import { useQueryParams } from '@/hooks/useQueryParams'
import SearchFiltersPriceRange from './SearchFiltersPriceRange'
import SearchFiltersItemsByPage from './SearchFiltersItemsPerPage'
import SearchFiltersByCategory from './SearchFiltersByCategory'
import SearchFiltersActive from './SearchFiltersActive'
import SearchFiltersByAuthor from './SearchFiltersByAuthor'

export default function SearchFilters() {
  const { queryObject } = useQueryParams()
  return (
    <div className="flex flex-col my-4 w-full">
      <span className="text-xl font-semibold mb-4">Search results for "{queryObject.title}"</span>
      <div className="flex flex-row justify-between w-full">
        <div className="flex flex-row gap-4">
          <SearchFiltersByCategory />
          <SearchFiltersByAuthor />
          <SearchFiltersPriceRange />
        </div>
        <SearchFiltersItemsByPage />
      </div>
      <Divider className="my-4" />
      <SearchFiltersActive />
    </div>
  )
}
