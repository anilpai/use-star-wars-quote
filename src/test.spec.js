import { renderHook } from '@testing-library/react-hooks'
import {useStarWarsQuote} from './'
import { type } from 'os'

describe('useStarWarsQuote', ()=> {
    test('should return an object with keys: loading, quote', () => {
        const { result } = renderHook(()=> useStarWarsQuote())
        expect(result.current).toHaveProperty('loading')
        expect(result.current).toHaveProperty('quote')
    })

    test('should set loading to true after initial call', () => {
        const { result } = renderHook(()=> useStarWarsQuote())
        expect(result.current.loading).toBe(true)
    })

    test('should return a quote and set loading to false', async () => {
        const { result, waitForNextUpdate } = renderHook(()=> useStarWarsQuote())
        await waitForNextUpdate()
        expect(typeof result.current.quote).toBe('string')
        expect(result.current.quote).not.toBe(null)
        expect(result.current.quote).not.toBe('')
        expect(result.current.loading).toBe(false)
    })
})
