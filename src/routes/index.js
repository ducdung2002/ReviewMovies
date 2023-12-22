import user from './user.js';
import movie from './movie.js';
import comment from './comment.js';
import category from './category.js';


function router(app){
    app.use('/user',user);
    app.use('/movies',movie);
    app.use('/categories',category);
    app.use('/comment',comment);

}

export default router;