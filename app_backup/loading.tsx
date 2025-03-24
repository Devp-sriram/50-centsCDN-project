import { LoadingSpinner } from "./components/LoadingSpinner"

export default function Loading() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <LoadingSpinner className="h-20 w-20 animate-spin" />
    </div>
  )
}
