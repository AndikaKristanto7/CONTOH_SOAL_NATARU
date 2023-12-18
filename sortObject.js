let library = [
    {
        title:'Bill Gates',
        author: 'The Road Ahead',
        libraryID : 1234
    },
    {
        title:'Steve Jobs',
        author:'Walter Isaacson',
        libraryID : 4264
    },
    {
        title:'Mockingjay: The Final Book of The Hunger Games',
        author:'Suzanne Collins',
        libraryID : 3245
    }
]
function sortLibrary(){
    let sortLibrary = library.sort((a,b)=>{
        var textA = a.title.toUpperCase();
        var textB = b.title.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    })
    return sortLibrary;
}
console.log(sortLibrary());