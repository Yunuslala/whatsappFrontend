
export const downloadImages=(e,url)=>{
    e.preventDefault()
    try {
        fetch(url)
        .then(res=>res.blob())
        .then(blob=>{
            const imageUrl=window.URL.createObjectURL(blob);
            const a=document.createElement("a");
            a.style.display="none";
            a.href=imageUrl;
            const namesplit=url.split("/");
            const dummyName=namesplit.pop();
            a.download=""+dummyName+"";
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(imageUrl)
        }).catch(error=>console.log("error","error in image downloading",error))
    } catch (error) {
        console.log("error","error in image downloading",error)
    }

}

