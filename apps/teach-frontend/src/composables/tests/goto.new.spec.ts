import { beforeEach, describe, expect, it, vi } from 'vitest'
import { VueRouterMock, createRouterMock, injectRouterMock } from 'vue-router-mock'
import { config, mount } from '@vue/test-utils'
import { useGoto } from '../goto'

const router = createRouterMock({
  spy: {
    create: fn => vi.fn(fn),
    reset: spy => spy.mockClear(),
  },
})

config.plugins.VueWrapper.install(VueRouterMock)

describe('the Header ', () => {
  beforeEach(() => {
    router.reset()
    injectRouterMock(router)
  })
  it('should be go to home page', () => {
    const ComP = {
      setup() {
        const { gotoHome } = useGoto()

        gotoHome()
      },
      render() {},
    }

    const wrapper = mount(ComP)

    expect(wrapper.router.push).toBeCalledWith({ name: 'Home' })
  })
  it('should be go to settings page', () => {
    const ComP = {
      setup() {
        const { gotoSettings } = useGoto()

        gotoSettings()
      },
      render() {},
    }

    const wrapper = mount(ComP)

    expect(wrapper.router.push).toBeCalledWith({ name: 'Settings' })
  })
})
