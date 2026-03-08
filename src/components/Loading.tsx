
export const Loading = () => {
    return (
        <div className="flex h-[200px] w-full items-center justify-center">
            <div className="relative h-12 w-12">
                <div className="absolute top-0 left-0 h-full w-full rounded-full border-4 border-primary/20"></div>
                <div className="absolute top-0 left-0 h-full w-full animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
            </div>
        </div>
    );
};
