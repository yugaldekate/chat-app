const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return ( 
        <div className="h-full bg-slate-800 flex items-center justify-center">
            {children}
        </div>
    );
}
   
export default AuthLayout;