import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';

interface IProps {
  photos: string[];
}

export default function ImageMasonry({ photos }: IProps) {
  return (
    <Box sx={{ minHeight: 829 }} className="w-full p-10 pb-0 min-h-0">
      <Masonry columns={{xs: 1, md:2, lg:3}} spacing={2} className="m-0 ">
        {photos.map((photo, index) => (
          <div key={index}>
            <img
              src={`${photo}?w=162&auto=format`}
              srcSet={`${photo}?w=162&auto=format&dpr=2 2x`}
              // alt={photo.title}
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: 'block',
                width: '100%',
              }}
            />
          </div>
        ))}
      </Masonry>
    </Box>
  );
}
