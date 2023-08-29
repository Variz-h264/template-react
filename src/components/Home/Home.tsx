import { Button } from '@mui/material';

export const Home = () => {
  return (
    <>
        <div className="pt-10">
            <div className="bg-white rounded-md shadow-md p-5 mx-52">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-5xl font-bold">Home</h1>
                            <span className="text-xl">ยินดีต้อนรับกลับ</span>
                        </div>
                        
                        <Button variant="contained" color="error" className="w-44 h-12">ออกจากระบบ</Button>
                    </div>
            </div>
        </div>
    </>
  )
}