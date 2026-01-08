import { createFileRoute } from '@tanstack/react-router'
import {  Createx } from '@/components/Createx'


export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div>
      <Createx />
    </div>
  )
}
