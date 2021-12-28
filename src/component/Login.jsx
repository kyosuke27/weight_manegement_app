import {
    TextField,
    Button
  } from "@material-ui/core/";

export const Login=()=>{
    return (
    <form action="https://urbyn1fcra.execute-api.ap-northeast-1.amazonaws.com/Prod/" method="post">
        <TextField id="login" label="ログインID" variant="outlined" name="login_id" />
        <TextField id="password" label="パスワード" variant="outlined" name="login_password" />
        <Button variant="outlined" type="submit">ログイン</Button>
    </form>
    );
}