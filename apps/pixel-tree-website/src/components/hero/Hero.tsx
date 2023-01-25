import { Button } from '../button/Button'
import {
  Title,
  Subtitle
} from '../text'
import { LogoPixelTreeNoBg40 } from '../utils'

export const Hero = () => {
  return (
    <section
    className="
        w-full
        grid
        grid-rows-2
        grid-cols-1
        md:grid-rows-1
        md:grid-cols-2
        px-7
        md:px-32
        gap-y-24
    "
    style={{
      height: 'calc(80vh - 80px)'
    }}
    >
        <div
        className='
            flex
            flex-col
            justify-center
            items-start
            gap-5'
        >
            <Title>
                Cosecha el futuro
            </Title>
            <Subtitle>
                Somos una empresa de desarrollo de software enfocada en la creación de soluciones tecnológicas para la industria.
            </Subtitle>
            <Button>
                Conoce más
            </Button>
        </div>
        <div
        className='
        flex
        justify-center
        items-center
        '
        >
        <LogoPixelTreeNoBg40 className='text-[160px]' />
        </div>
    </section>
  )
}
