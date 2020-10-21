// TODO: Create action creators as defined in tests

// Quotes Actions
// Build out several actions as specified in the tests that build Action Creators for add, removing, upvoting and downvoting quotes.


 export const addQuote = quote => {
     return{
         type:'ADD_QUOTE',
          quote: Object.assign({}, quote, { votes: 0 })
     }

 }
export const  removeQuote = quoteId => {
    return{
        type:'REMOVE_QUOTE',
        quoteId
    }

}
export const upvoteQuote = quoteId => {
    return{
        type:'UPVOTE_QUOTE',
        quoteId
    }
}
export const downvoteQuote = quoteId => {
    return{
        type:'DOWNVOTE_QUOTE',
        quoteId
    }
}