import UserForm from '../../components/UserForm/UserForm.js';
import './HomePage.css'

const HomePage = () =>  {
    return (
        <div className="HomePage">
            <img className='backgroundImg' src={require('../../assets/cover_ava.jpg')} alt='cover' />
            <div className='userFormOverlay'>
                <UserForm />
                
            </div>
        </div>
    )

}

export default HomePage;