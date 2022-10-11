class Blog
{
    constructor(title, detail)
    {
        this.title=title;
        this.detail=detail;
    }

    addTitle()
    {
        let data = document.querySelector("#blog-title");
        data.innerHTML=this.title;
    }
    addDescription()
    {
        let data = document.querySelector("#blog-description");
        data.innerHTML=this.detail;
    }
}

function postCreation()
{
    document.getElementById("popupContact").style.display="flex";
    //console.log("PostCreation called");
}

function posting()
{
    let t = document.getElementById("title").value;
    let d = document.getElementById("detail").value;
    let a = new Blog(t,d);
    a.addTitle();
    a.addDescription();
    //console.log("Posting",t,d);
    document.getElementById("popupContact").style.display="none";

}

function editPost()
{
    document.getElementById("popupContact").style.display="flex";
    let t = document.getElementById("title").value;
    let d = document.getElementById("detail").value;
    let a = new Blog(t,d);
    a.addTitle();
    a.addDescription();
}

function deletePost()
{
    let a = new Blog("post Deleted","");
    a.addTitle();
    a.addDescription();
    document.getElementById("title").value="";
    document.getElementById("detail").value="";
}