import './UIHolder.css';

function UIHolder({children}) {
    return (
        <div className="flex flex-row flex-wrap">
            {children}
        </div>
    );
}

export default UIHolder;