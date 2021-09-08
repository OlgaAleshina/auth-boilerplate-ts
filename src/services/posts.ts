export async function getPosts(){
   const api = 'https://test.flcd.ru/api/post'
   const res =  await fetch(api);
   if(res.status === 200){
        const resToJson = await res.json();
        return resToJson
    } else {
        alert(`error occured with ${api}: ${res.statusText}`)
   }
}