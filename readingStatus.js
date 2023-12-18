let library = [
    {
        title:'Bill Gates',
        author: 'The Road Ahead',
        readingStatus : true,
    },
    {
        title:'Steve Jobs',
        author:'Walter Isaacson',
        readingStatus:true,
    },
    {
        title:'Mockingjay: The Final Book of The Hunger Games',
        author:'Suzanne Collins',
        readingStatus:false,
    }
]
function reminder(){
    let getUnreaded = library.filter((x) => x.readingStatus == false );
    let getReaded = library.filter((x) => x.readingStatus == true );
    let unreadedString = "Anda masih perlu membaca \r\n";
    let readedString = "Sudah membaca \r\n";
    getUnreaded.forEach((x)=>{
         unreadedString +=`${x.title} oleh ${x.author}` + "\r\n"
    })
    getReaded.forEach((y) => {
        readedString += `${y.title} oleh ${y.author}` + "\r\n"
    })
    return unreadedString+readedString;
}
console.log(reminder());