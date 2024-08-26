import moment from "moment";
import { useAppSelector } from "../../../../redux/hooks";
import { selectCurrentUser } from "../../../../redux/features/auth/authSlice";


const UserDashboard = () => {
    const currentUser=useAppSelector(selectCurrentUser);
    const date=new Date();
    const dateFormat= moment(date).format('MMMM DD YYYY')

 
    return (
        <div className="bg-purple-600 text-white rounded-xl p-10">
           
           <div>
            <p className="mb-8">{dateFormat} </p>
            <h1 className="text-4xl my-2">Welcome Back, {currentUser?.name} </h1>
            <p className="text-lg">Alawys stay updated in your student portal </p>
           </div>

           
        </div>
    );
};

export default UserDashboard;