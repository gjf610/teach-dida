import { beforeEach, describe, expect, it, vi } from 'vitest'
import { useRouter } from 'vue-router'
import { useGoto } from '../goto'

vi.mock('vue-router')

const pushFn = vi.fn()
vi.mocked(useRouter as () => { push: Function }).mockImplementation(() => {
  return {
    push: pushFn,
  }
})

describe('goto', () => {
  beforeEach(() => {
    pushFn.mockClear()
  })
  it('should be go to home page', () => {
    const { gotoHome } = useGoto()

    gotoHome()

    expect(pushFn).toBeCalled({ name: 'Home' })
  })

  it('should be go to settings page', () => {
    const { gotoSettings } = useGoto()

    gotoSettings()

    expect(pushFn).toBeCalled({ name: 'Settings' })
  })
})
