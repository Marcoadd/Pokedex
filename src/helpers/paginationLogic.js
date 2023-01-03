export const paginationLogic = (currentPage, pokemonsFilter) => {
    const pokemonsPerPage = 9

    let pokemonsInPage = []
    const sliceStart = (currentPage -1)*pokemonsPerPage
    const sliceEnd = currentPage * pokemonsPerPage
    pokemonsInPage = pokemonsFilter.slice(sliceStart, sliceEnd)

    const arrayPages = []
    const quantityPages = Math.ceil(pokemonsFilter.length / pokemonsPerPage)
    for(let i = 1; i <= quantityPages; i++){
        arrayPages.push(i)
    }

    const lastPage = arrayPages[arrayPages.length - 1]

    let pagesInBlock = []
    const pagesPerBlock = 5
    let actualBlock = 1
    for(let currentBlock = 1; currentBlock * pagesPerBlock < currentPage; currentBlock++){
        actualBlock = currentBlock + 1
    }

    const minPage = actualBlock * pagesPerBlock - pagesPerBlock
    for(let currrentPageInBlock = actualBlock * pagesPerBlock; currrentPageInBlock > minPage; currrentPageInBlock--){
        if(currrentPageInBlock <= lastPage){
            pagesInBlock.unshift(currrentPageInBlock)
        }
    }
    return {pagesInBlock, lastPage, pokemonsInPage}
}