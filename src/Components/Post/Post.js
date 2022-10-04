import React from "react";
import { useState } from "react";
import '../Post/Post.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkIcon from '@mui/icons-material/Bookmark';
const Post = () => {
    const [like, setlike] = useState(false);
    const [save, setsave] = useState(false);

    return (
        <>
            <div class="container mt-5 mb-5">
    <div class="row d-flex align-items-center justify-content-center">
        <div class="col-md-6">
            <div class="card">
                <div class="d-flex justify-content-between p-2 px-3">
                    <div class="d-flex flex-row align-items-center"> <img src="https://i.imgur.com/UXdKE3o.jpg" width="50" class="rounded-circle"/>
                        <div class="d-flex flex-column ml-2"> <span class="font-weight-bold">Jeanette Sun</span> <small class="text-primary">Collegues</small> </div>
                    </div>
                    <div class="d-flex flex-row mt-1 ellipsis"> <small class="mr-2">20 mins</small> <i class="fa fa-ellipsis-h"></i> </div>
                </div> <img src="https://i.imgur.com/xhzhaGA.jpg" class="img-fluid"/>
                <div class="p-2">
                    <p class="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <hr/>
                    <div class="d-flex justify-content-between align-items-center">
                                    <div class="d-flex flex-row muted-color" onClick={()=>setlike(!like)}> <span>{ (like===false)?<FavoriteBorderIcon/>:<FavoriteIcon style={{ color: 'red' }} />}</span> </div>
                        <div class="d-flex flex-row muted-color"> <span><InsertCommentIcon/></span></div>
                        <div class="d-flex flex-row muted-color" onClick={()=>setsave(!save)}> <span>{ (save===false)?<BookmarkBorderIcon/>:<BookmarkIcon/>}</span></div>
                       
                    </div>
                    <hr/>
                  
                </div>
            </div>
        </div>
    </div>
</div>
        </>
    )
}

export default Post;