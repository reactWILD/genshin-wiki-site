const apiUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3333"
    : process.env.NEXT_PUBLIC_API_URL

export default function handleImagesURL(path: string) {
  return `${apiUrl}${path.slice(1)}`
}
