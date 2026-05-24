import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

async function Home() {
  const { userId } = await auth()
  if (userId) return redirect('/projects')
  else return redirect('/sign-in')
}
export default Home