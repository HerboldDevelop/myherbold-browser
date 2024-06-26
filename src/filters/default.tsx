import React from 'react'
import type { FilterRendererProps } from '@module/types'

const DefaultFilter: React.FC<FilterRendererProps> = ({ value, updateFilter }) => {
  function handleFilterChange(event) {
    updateFilter(event.target.value)
  }

  return (
    <input
      type="search"
      placeholder="Suchen / Search ..."
      value={value}
      onChange={handleFilterChange}
    />
  )
}

export { DefaultFilter }
