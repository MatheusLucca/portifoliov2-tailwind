import { About } from '@/components/About'
import { Form } from '@/components/Form'
import { Header } from '@/components/Header'
import { Introduction } from '@/components/Introduction'
import { ProjectList } from '@/components/ProjectList'
import { Skills } from '@/components/Skills'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Header />
      <main className=''>
        <Introduction />
        <About />
        <Skills />
        <ProjectList />
        <Form />
      </main>
    </>
  )
}
