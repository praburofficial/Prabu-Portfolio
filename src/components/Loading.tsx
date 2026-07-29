export const Loading = () => {
    return (
        <div className="flex min-h-[45vh] w-full items-center justify-center" role="status" aria-live="polite">
            <div className="flex flex-col items-center gap-5">
                <div className="relative h-12 w-12">
                    {/* Track */}
                    <div className="absolute inset-0 rounded-full border-[3px] border-border" />
                    {/* Sweep */}
                    <div className="absolute inset-0 animate-spin rounded-full border-[3px] border-transparent border-t-primary border-r-violet" />
                    {/* Core */}
                    <div className="absolute inset-[30%] rounded-full bg-primary/40 blur-[6px] animate-breathe" />
                </div>
                <span className="text-[0.6875rem] uppercase tracking-[0.24em] text-faint">Loading</span>
            </div>
        </div>
    );
};
