const HowItIsWorked = () => {
    return (
        <section className="py-16 px-6 text-center bg-base-200">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">How TaskHive Works</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-6 bg-base-100 shadow-lg rounded-lg">
                        <h3 className="text-xl font-semibold mb-2">
                            1. Create a Task
                        </h3>
                        <p>
                            Define your tasks, set deadlines, and prioritize
                            effortlessly.
                        </p>
                    </div>
                    <div className="p-6 bg-base-100 shadow-lg rounded-lg">
                        <h3 className="text-xl font-semibold mb-2">
                            2. Assign & Track
                        </h3>
                        <p>
                            Assign tasks to team members and monitor progress in
                            real time.
                        </p>
                    </div>
                    <div className="p-6 bg-base-100 shadow-lg rounded-lg">
                        <h3 className="text-xl font-semibold mb-2">
                            3. Complete & Achieve
                        </h3>
                        <p>
                            Mark tasks as completed, celebrate achievements, and
                            stay productive.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItIsWorked;
