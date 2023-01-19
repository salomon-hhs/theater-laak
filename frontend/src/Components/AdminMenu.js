import {Link} from 'react-router-dom';

export default function AdminMenu(){
    return (
        <div>
            <button className="bg-red-900 hover:bg-red-700 py-2 px-8 rounded text-white m-5">
                <Link to={'/evenementen-toevoegen'}> EvenementenToevoegen</Link>
            </button>

            <button className="bg-red-900 hover:bg-red-700 py-2 px-8 rounded text-white m-5">
                <Link to={'/print-ticket'}> Print ticket</Link>
            </button>
        </div>
    );
}