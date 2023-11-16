import PrimaryButton from '@/components/elements/buttons/PrimaryButton'
import MainLayout from '@/components/layouts/MainLayout'

export default function Home() {
  return (
    <>
      <main>
        <section>
          <PrimaryButton text="Login" ></PrimaryButton>
        </section>
      </main>
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return <MainLayout>
    {
      page
    }
  </MainLayout>
}