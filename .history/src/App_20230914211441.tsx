import { Github, FileVideo } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'

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
               <div className='grid grid-rows-2 gap-4 flex-1'>
                  <Textarea
                     className='resize-none p-4 leading-relaxed'
                     placeholder='Enter Prompt for the  AI'
                  />
                  <Textarea
                     className='resize-none p-4 leading-relaxed'
                     placeholder='Summary generated by the AI'
                     readOnly
                  />
               </div>
               <p className='text-muted-foreground text-sm'>
                  Lembre-se: você pode usar a vairável{' '}
                  <code className='text-violet-600'>{'{transcription}'}</code>{' '}
                  no seu prompt pra adicionar o conteúdo da transcrição ao vídeo
                  selecionado
               </p>
            </div>
            <aside className='w-80 space-y-6'>
               <form className="space-y-6">
                  <label
                     className='border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center text-muted-foreground justify-center hover:bg-primary/5'                  
                     htmlFor="video">
                     <FileVideo className=''/>
                     Upload Video
                  </label>
                  <input type="file" id="video" accept='video/mp4' className='sr-only'/>
               </form>
            </aside>
         </main>
      </div>
   )
}
