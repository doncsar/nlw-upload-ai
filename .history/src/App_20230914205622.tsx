import { Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

export function App() {
   return (
      <div className='min-h-screen flex flex-col'>
         <div className='pc-6 py-3 flex items-center justify-between border-b'>
            <h1 className='title text-xl font-bold'>upload.ai</h1>
            <div className='flex items-center gap-3'>
               <span className='text-sm text-muted-foreground'>
                  Desenvolvido com 💜 no NLW da Rocketseat
               </span>

               <Separator orientation='vertical' className='h-6' />

               <Button variant={'outline'}>
                  <Github className='w-5 h-5 mr-2' />
                  Github{' '}
               </Button>
            </div>
         </div>
         <main className='flex-1 p-6 flex gap-6 '>
            <div className='flex flex-col flex-1 gap-4'>
               <div className='grid grid-rows-2 gap-4 flex-1'></div>
               <p className='text-muted-foreground text-sm'>
                  Lembre-se: você pode usar a vairável{' '}
                  <code className='text-violet-600'>transcription</code> no seu prompt pra adicionar o
                  conteúdo da transcrição ao vídeo selecionado
               </p>
            </div>
            <aside className='w-80'>aicaramba</aside>
         </main>
      </div>
   )
}
