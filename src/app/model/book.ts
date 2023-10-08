export interface Book {
    id: number
    title: string
    authors: Author[]
    translators: any[]
    subjects: string[]
    bookshelves: string[]
    languages: string[]
    copyright: boolean
    media_type: string
    formats: Formats
    download_count: number
  }
  
  export interface Author {
    name: string
    birth_year: number
    death_year: number
  }
  
  export interface Formats {
    "application/x-mobipocket-ebook": string
    "application/epub+zip": string
    "text/html": string
    "image/jpeg": string
    "text/plain; charset=us-ascii": string
    "text/plain": string
    "application/rdf+xml": string
  }
  