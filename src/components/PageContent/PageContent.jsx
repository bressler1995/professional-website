import { ScrollArea } from "@/components/ui/scroll-area";

function PageContent({children}) {
    return (
        <div id="eccent-page-content" className="absolute top-0 left-0 w-full h-full z-2 py-2 pr-2 pl-[70px] md:pl-[300px] overflow-hidden">
            <div id="eccent-page-content-inner" className="flex flex-col bg-content-background h-full w-full rounded-md overflow-hidden">
                <ScrollArea id="eccent-page-content-scroll" className="flex flex-col w-full h-full overflow-y-auto overflow-x-hidden">
                    {children}
                </ScrollArea>
            </div>
        </div>
    );
}

export default PageContent;