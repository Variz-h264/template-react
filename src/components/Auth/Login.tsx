import { Button } from '@mui/material';

export const Login = () => {
  return (
    <>
        <div className="p-16 px-52">
            <div className="flex justify-center">
                <div className="bg-white/30 w-[450px] h-62 rounded-md">
                    <div className="backdrop-blur-md w-full bg-black/50 rounded-md">
                        <div className="p-3 pt-5 mx-5">
                            <h3 className="text-3xl text-white font-bold">Login</h3>
                            <hr className="mt-3 mb-5" />
                            
                            <input type="text" className="px-3 w-full h-12 bg-gray-300/30 text-white rounded-md outline-none focus:text-blue-400 focus:font-semibold mb-2" placeholder="Email Ro Username" autoComplete="off" />
                            <input type="password" className="px-3 w-full h-12 bg-gray-300/30 text-white rounded-md outline-none focus:text-blue-400 focus:font-semibold mb-2" placeholder="Password" />
                            <div className="flex justify-between items-center">
                                <span className="text-blue-400">ยังไม่มีบัญชีใช่รึป่าว?</span>
                                <span className="text-red-400">ลืมรหัสผ่าน?</span>
                            </div>

                            <div className="flex justify-center items-center relative top-9">
                                <Button variant="contained" className="w-full h-12">Login!!!</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}