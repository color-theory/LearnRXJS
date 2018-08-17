import { hello } from '../main'
import { expect } from 'chai'

describe('main', ()=>{
    describe('hello', () =>{
        it('should be world', () => {
            expect(hello).to.equal('world')
        })
    })
})
