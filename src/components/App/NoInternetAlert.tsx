import { Alert, AlertTitle, Button } from '@mui/material';
import ReplayIcon from '@mui/icons-material/Replay';
import no_internet_connection_img from '../../assets/image/no_internet_connection.jpg'

export const NoInternetAlert = ({ title, msg }: { title: string, msg: string }) => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="backdrop-blur-sm min-h-screen w-full bg-black/50 animate-fade-in">
        <div className="pt-16 animate-slide-in">
          <div className="absolute left-52 w-96">
            <Alert severity="error">
              <AlertTitle>{title}</AlertTitle>
              {msg}
            </Alert>
          </div>
        </div>

        <div className="bg-white text-center rounded-md shadow-md p-5 mt-24 mx-52 animate-slide-in">
          <div className="flex justify-center items-center my-5">
            <img className='w-52 rounded-md' src={no_internet_connection_img} alt="No internet connection" />
          </div>

          <Button variant="outlined" color="error" className='w-52' onClick={handleRefresh}>
            <ReplayIcon sx={{ mr: 1 }} />ลองอีกครั้ง
          </Button>
        </div>
      </div>
    </>
  );
};
