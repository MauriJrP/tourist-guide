import {  Card,  CardContent, Rating, Avatar } from '@mui/material';
import { IComment } from '../../../types'

interface IProps {
  comment: IComment;
}

export default function Comment({comment}: IProps) {
  return (
    <Card sx={{ minWidth: 275 }} className="drop-shadow-lg mb-2">
      <CardContent className="flex flex-col lg:flex-row">
        <div className="flex flex-col items-center justify-center lg:w-96">
          <Avatar src={comment.user.photo} />
          <p className="mt-3">{comment.user.name}</p>
        </div>
        <div className="flex flex-col p-2">
          <Rating value={comment.rating} readOnly />
          <p className="ml-2">{comment.comment}</p>
          <p className="ml-2 text-gray-500">{comment.date}</p>
        </div>
      </CardContent>
    </Card>
  )
}
