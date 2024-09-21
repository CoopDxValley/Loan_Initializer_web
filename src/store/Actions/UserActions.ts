import axios from "axios";
import { setLoading, setStatusSucess, setUsername } from "../Slices";
import { updateAuthorizationHeader } from "../../lib/axios_interceptors";

const BASE_URL = process.env.BASE_URL;

export const login = ({
  username,
  password,
  setResponse,
}: {
  username: string;
  password: string;
  setResponse: React.Dispatch<
    React.SetStateAction<{
      error: string;
    }>
  >;
  navigation: any;
}) => {
  const source = axios.CancelToken.source();
  setTimeout(() => {
    source.cancel("Timeout exceeded");
  }, 15000);

  let phoneNumber: string;
  phoneNumber = username;
  return async (dispatch: any) => {
    if (phoneNumber) {
      dispatch(setLoading(true));
      dispatch(setStatusSucess(true));
      dispatch(setUsername(phoneNumber));
      await axios
        .post(
          `${BASE_URL}/api/merchant/login`,
          {
            username: phoneNumber,
            password,
          },
          {
            cancelToken: source.token,
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(async (res: any) => {
          updateAuthorizationHeader(res.token).then(() => {});
        })
        .catch((err) => {
          console.log(err);
          dispatch(setLoading(false));
          if (!err.response) {
            if (axios.isCancel(err)) {
              setResponse({
                error: "Sorry, request timed out. Please try again",
              });
            } else {
              setResponse({
                error:
                  "Unable to connect to server. Please check your internet connection or try again later.",
              });
            }
          } else if (axios.isCancel(err)) {
            setResponse({
              error: "Sorry, request timed out. Please try again",
            });
          } else {
            if (err.response.status === 401) {
              setResponse({ error: "Incorrect phone number or password" });
            } else {
              setResponse({ error: err.response.data.message });
            }
          }
        });
    }
  };
};
