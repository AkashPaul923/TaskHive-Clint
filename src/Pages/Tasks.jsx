

const Tasks = () => {
    return (
        <div className="max-w-[1920px] mx-auto px-5">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                <div className="border-3 rounded-3xl border-neutral">
                    <p className="text-center bg-neutral text-base-100 rounded-t-3xl text-2xl font-bold py-3">To Do</p>
                </div>
                <div className="border-3 rounded-3xl border-neutral">
                    <p className="text-center bg-neutral text-base-100 rounded-t-3xl text-2xl font-bold py-3">In Progress</p>
                </div>
                <div className="border-3 rounded-3xl border-neutral">
                    <p className="text-center bg-neutral text-base-100 rounded-t-3xl text-2xl font-bold py-3">Done</p>
                </div>
            </div>
        </div>
    );
};

export default Tasks;