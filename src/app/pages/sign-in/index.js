import './index.css'

const SignUp = ()=>{
    return (
        <form>
            <label for="user-name">Your name</label>
            <input type='text'id='user-name' name='user-name'/>
            <label for='nick-name'>Your space nickname</label>
            <input type='text' id='nick-name' name='nick-name'/>
            <label for="e-mail">Your e-mail</label>
            <input type='email' id="e-mail" name='e-mail'/>
            <label for="password">Create your password</label>
            <input type="password" id='password' name='user-password'/>
            <button type='submit'>To stars</button>
        </form>
    )
}

export default SignUp;