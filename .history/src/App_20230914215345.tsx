import { Github, FileVideo, Upload, Wand2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem } from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'

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
            <aside className='w-80 space-y-5'>
               <form className='space-y-5'>
                  <label
                     className='border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center text-muted-foreground justify-center hover:bg-primary/5'
                     htmlFor='video'
                  >
                     <FileVideo className='w-5 h-5' />
                     Upload Video
                  </label>
                  <input
                     type='file'
                     id='video'
                     accept='video/mp4'
                     className='sr-only'
                  />

                  <Separator />

                  <div className='space-y-1'>
                     <Label htmlFor='transcription_prompt'>
                        Transcription Prompt
                     </Label>
                     <Textarea
                        id='transcription_prompt'
                        className='h-20 leading-relaxed resize-none'
                        placeholder='Add the keywords from the video separated by comma(,)
                        haha that look like a boob'
                     />
                  </div>
                  <Button type='submit' className='w-full'>
                     Upload Video
                     <Upload className='h-5 w-5 ml-2' />
                  </Button>
               </form>

               <Separator />

               <form className='space-y-5'>
                  <div className='space-y-2'>
                     <Label>Model</Label>
                     <Select disabled defaultValue='gpt3.5'>
                        <SelectTrigger>
                           <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                           <SelectItem value='gpt3.5'>
                              GPT 3.5-Turbo 16k
                           </SelectItem>
                        </SelectContent>
                     </Select>
                     <span className='block text-xs text-muted-foreground italic'>
                        This option will be available soon
                     </span>
                  </div>

                  <div className='space-y-2'>
                     <Label>Model</Label>
                     <Select disabled defaultValue='gpt3.5'>
                        <SelectTrigger>
                           <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                           <SelectItem value='gpt3.5'>
                              GPT 3.5-Turbo 16k
                           </SelectItem>
                        </SelectContent>
                     </Select>
                     <span className='block text-xs text-muted-foreground italic'>
                        This option will be available soon
                     </span>
                  </div>

                  <Separator />

                  <div className='space-y-4'>
                     <Label>Degree</Label>
                     <Slider min={0} max={1} step={0.01} />
                     <span className='block text-xs text-muted-foreground italic leading-relaxed'>
                        The higher the value the most creative the text will get
                        and more prone to errors as well.
                     </span>
                  </div>

                  <Separator />

                  <Button type='submit' className='w-full'>
                     Run
                     <Wand2 className='h-5 w-5 ml-2' />
                  </Button>
               </form>
            </aside>
         </main>
      </div>
   )
}
