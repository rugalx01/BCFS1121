const assert = require("assert")

beforeEach("prepare2 for job test" , ()=>{
    console.log( " prepare 2")
})

afterEach("clean2 for job test",()=>{
    console.log( " clean 2")
})

before("",()=>{ console.log(" only onces before!!")})
after("",()=>{ console.log(" only onces after!!")})

describe( "test2 start before" , function(){


    beforeEach("prepare2 for job test" , ()=>{
        console.log( " prepare 2 by test 2")
    })
    
    afterEach("clean2 for job test" , ()=>{
        console.log( " clean 2 by test 2")
    })
    
    it( "the test2 will start", ()=>{


    })

    it( "the test2 will start _ 2", ()=>{


    })
})

it( "the test3" )

it( "the test4" )