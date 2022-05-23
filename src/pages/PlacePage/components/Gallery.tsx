import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';

interface IProps {
  name: string;
  photos: string[];
}

export default function ImageMasonry({ photos, name }: IProps) {
  const photosUrl = photos.map(photo => `http://localhost:4000/${photo}`)


  return (
    <Box sx={{ minHeight: 829 }} className="w-full p-10 pt-2 my-5 pb-0 min-h-0 drop-shadow-xl bg-slate-50 ">
      <div className="text-center  text-3xl ">
        <h2 className="">{name}</h2>
      </div>
      <Masonry columns={{xs: 1, md:2, lg:3}} spacing={2} className="m-0 ">
        {photosUrl.map((photo, index) => (
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