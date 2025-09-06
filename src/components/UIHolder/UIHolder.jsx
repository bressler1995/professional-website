import './UIHolder.css';

function UIHolder({children}) {
    return (
        <div className="flex flex-row flex-wrap fixed top-0 left-0 z-9999 w-full h-full">
            {children}
        </div>
    );
}

export default UIHolder;