import './UIHolder.css';

function UIHolder({children}) {
    return (
        <div id="eccent-ui-holder" className="flex flex-row flex-wrap fixed top-0 left-0 z-9999 w-full h-full bg-gradient-to-br from-[var(--color-gradient-start)] via-[var(--color-gradient-mid)] via-[var(--color-gradient-accent)] to-[var(--color-gradient-end)]">
            {children}
        </div>
    );
}

export default UIHolder;