function PageContent({children}) {
    return (
        <div id="eccent-page-content" className="absolute top-0 left-0 w-full h-full z-2 py-2 pr-2 pl-[70px] md:pl-[300px]">
            <div id="eccent-page-content-inner" className="flex flex-col bg-stone-200 h-full w-full">
                {children}
            </div>
        </div>
    );
}

export default PageContent;