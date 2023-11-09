import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { TextField } from '@/components/ui/input'
import { Typography } from '@/components/ui/typography'

import s from './components/ui/button/button.module.scss'

import { LogOut, MoreHorizontal, Paid, PaperPlane, Settings } from './common/icons'

export function App() {
  return (
    <div>
      <Button as={'button'} tabIndex={1} variant={'link'}>
        Link wefewfwk
      </Button>
      <Typography.H3 ml={20}>dwd</Typography.H3>
      <Card background={'grey'} className={s.border} height={100} px={10} py={10} width={100}>
        wef
      </Card>
      <LogOut color={'red'} size={50} />
      <TextField initialValue={'email@mail.ru'} label={'Enter email'} variant={'email'} />
      <TextField label={'Enter password'} tabIndex={2} variant={'password'} />
      <TextField label={'Enter password'} variant={'search'} />
    </div>
  )
}
