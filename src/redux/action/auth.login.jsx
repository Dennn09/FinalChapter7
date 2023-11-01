import { toast } from "react-hot-toast";
import { LoginRedux, pindah } from "../../services/auth/login-user";
import { API_ENDPOINT } from "../../utils/api-endpoint";
import { CookieKeys, CookieStorage } from "../../utils/cookies";
import http2 from "../../utils/http2";
import { setIsLoggedIn, setToken } from "../reducers/auth/authLogin";
import { ReduxGetuser } from "../../services/auth/get_user";

export const LoginUserRe = (input) => (dispatch) => {
  LoginRedux(input)
    .then((result) => {
      CookieStorage.set(CookieKeys.AuthToken, result.data.data.token);
      dispatch(setToken(result.data.data.token));
      dispatch(setIsLoggedIn(true));
      // window.location.href = "/dashboard"; 
      // pindah()
   

    //       setTimeout(() => {
    //         window.location.href = "/dashboard"; 
    // }, 2000); 
      
    })
    .catch((err) => {
      console.log(err, "ini eror")
      toast.error(err.response.data.message);
    });

  //    const dispatch =  useDispatch()

  //   http2.post(API_ENDPOINT.LOGIN, input).then((result) => {
  //       CookieStorage.set(CookieKeys.AuthToken, result.data.data.token);
  //       dispatch(setToken(result.data.data.token));
  //      console.log(result)
  //     })
  //     .catch((err) => {

  //     });
};

export const LogOut = (input) => (dispatch) => {
  dispatch(setToken(undefined));
  dispatch(setIsLoggedIn(false))
  CookieStorage.remove(CookieKeys.AuthToken);
  window.location.href = "/";

}

export const getuserRedux = (queryKey) => (dispatch) => {
   ReduxGetuser({ queryKey })
    .then((result) => {
      return result
    })
    .catch((err) => {
      alert("Anda harus login dulu");
      toast.error("Anda harus login dulu");
      window.location.href = "/Login";
    });
};
