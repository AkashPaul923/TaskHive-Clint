import useAuth from "../Hooks/useAuth";

const SocialLogin = () => {
    const { googleSignin } = useAuth()

    const handleGoogleSignin = () => {
        googleSignin()
        .then((res)=>{
            console.log(res);
        })
    }


    return (
        <div className="my-3">
            <button onClick={handleGoogleSignin} className="btn">
                <img
                    className="w-6"
                    src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
                    alt=""
                />
                <p>Login with Google</p>
            </button>
        </div>
    );
};

export default SocialLogin;
