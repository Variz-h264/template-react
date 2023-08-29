import { Button } from '@mui/material';

export const Reset_Password = () => {
  return (
    <>
        <div className="p-16 px-52">
            <div className="flex justify-center">
                <div className="bg-white/30 w-[450px] h-62 rounded-md">
                    <div className="backdrop-blur-md w-full bg-black/50 rounded-md">
                        <div className="p-3 pt-5 mx-5">
                            <h3 className="text-3xl text-white font-bold">Reset Password</h3>
                            <hr className="mt-3 mb-5" />
                            
                            <input type="password" className="px-3 w-full h-12 bg-gray-300/30 text-white rounded-md outline-none focus:text-red-400 focus:font-semibold mb-2" placeholder="New Password" autoComplete="off" />
                            <input type="password" className="px-3 w-full h-12 bg-gray-300/30 text-white rounded-md outline-none focus:text-red-400 focus:font-semibold mb-2" placeholder="Confirm Password" autoComplete="off" />

                            <div className="flex justify-center items-center relative top-9">
                                <Button variant="contained" color="error" className="w-full h-12">Reset!!!</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}