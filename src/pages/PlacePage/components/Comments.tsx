import { usePlace } from '../../../hooks/usePlace'
import Comment from './Comment'
// import {comments} from '../../../data'

export default function Comments() {
  const {comments} = usePlace();
  // console.log(comments);

  return (
    <div className="bg-white container mx-auto p-2 md:px-2 flex flex-col">
      {comments.map(comment => (
        <Comment key={comment.idComment} comment={comment} />
      ))}
    </div>
  )
}
