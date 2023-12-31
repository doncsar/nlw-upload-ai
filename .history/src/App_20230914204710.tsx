import { Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

export function App() {
   return (
      <div className='min-h-screen bg-pu'>
         <div className='pc-6 py-3 flex items-center justify-between border-b'>
            <h1 className='title text-xl font-bold'>upload.ai</h1>
            <div className='flex items-center gap-3'>
               <span className='text-sm text-muted-foreground'>
                  Desenvolvido com 💜 no NLW da Rocketseat
               </span>

               <Separator orientation='vertical' className='h-6'/>

               <Button variant={'outline'}>
                  <Github className='w-5 h-5 mr-2'/>
                  Github{' '}
               </Button>
            </div>
         </div>
      </div>
   )
}
