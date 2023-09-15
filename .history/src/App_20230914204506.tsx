import { Github } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function App() {
   return (
      <div>
         <div className='pc-6 py-3 flex items-center justify-between border-b'>
            <h1 className='title text-xl font-bold'>upload.ai</h1>
            <div className='flex items-center gap-3'>
               <span className='text-sm text-muted-foreground'>
                  Desenvolvido com 💜 no NLW da Rocketseat
               </span>
               Separa
               <Button variant={'outline'}>
                  <Github className='w-5 h-5 mr-2'/>
                  Github{' '}
               </Button>
            </div>
         </div>
      </div>
   )
}
