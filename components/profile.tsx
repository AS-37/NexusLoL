import { useUser } from "@auth0/nextjs-auth0";

export default function Profile() {
    
    const {user ,error , isLoading} = useUser();

    if (isLoading) {
        return (
          <div className="text-sm font-semibold text-center text-white">
            ...loading{" "}
          </div>
        );
      }
    
      if(error){
        return (
          <div className="text-sm font-semibold text-center text-white">
            {error.message}
          </div>
        )
      }
    return (
<div className="">
       {user && (
        <div className="text-sm font-semibold text-center text-white">
        Welcome {user.name} ! <a href="/api/auth/logout">Logout</a>
      </div>

         )}
        {!user && (
          <a href="/api/auth/login">Login</a>
          )}
  </div>
    )
}