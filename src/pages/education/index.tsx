import EducationList from "../../components/educationList/EducationList"
import { useRouter } from "next/router"

export default function Education() {
  const router = useRouter()
  function handleBackButton(): any {
    router.back()
  }

  return (
    <section className="p-4 px-8 md:px-12">
      <button onClick={handleBackButton} className="btn mb-20 mt-1 pt-0 p-2">
        {"< back"}
      </button>
      <EducationList />
    </section>
  )
}
