import {  Card,  CardContent, Rating, Avatar, Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import { usePlace } from '../../../hooks/usePlace';
import { IComment } from '../../../types'

interface IProps {
  comment: IComment;
}

export default function Comment({comment}: IProps) {
  const { id } = useParams();
  const {deleteComment} = usePlace();

  const handleDelete = () => {
    deleteComment(comment.idComment, parseInt(id as string));
  }

  return (
    <Card sx={{ minWidth: 275 }} className="drop-shadow-lg mb-2">
      <CardContent className="flex flex-col lg:flex-row">
        <div className="flex flex-col items-center justify-center lg:w-96">
          <Avatar src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F5%2FUser-Profile-PNG-File.png&f=1&nofb=1" />
          <p className="mt-3">{comment.user.name}</p>
        </div>
        <div className="flex flex-col p-2">
          <Rating value={comment.rating} readOnly />
          <p className="ml-2">{comment.comment}</p>
          <p className="ml-2 text-gray-500">{comment.date.slice(0, 10)}</p>
        </div>
        <div className="flex justify-self-end">
          <Button onClick={handleDelete} variant="contained" color="error">Eliminar</Button>
        </div>
      </CardContent>
    </Card>
  )
}
