import {Link} from 'react-router-dom';

export default function AdminMenu(){
    return (
        <div>
            <button className="bg-red-900 hover:bg-red-700 py-2 px-8 rounded text-white m-5 div " id='toAddPagina'>
                <Link to={'/evenementen-toevoegen'}> Evenementen Toevoegen</Link>
            </button>

            <div className='flex-col'>
            <button className="bg-red-900 hover:bg-red-700 py-2 px-8 rounded text-white m-5 div flex-col" id='toPrintPage'>
                <Link to={'/print-ticket'}> Print ticket</Link>
            </button>
            </div>
        </div>
    );
}