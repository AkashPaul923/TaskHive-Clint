import React from "react";
import { FaCheckCircle, FaUsers } from "react-icons/fa";

const Featured = () => {
    return (
        <section className="py-16 px-6 text-center bg-gray-100">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">
                    Why Choose TaskHive?
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="p-6 bg-white shadow-lg rounded-lg">
                        <FaCheckCircle className="text-green-500 text-4xl mb-4 mx-auto" />
                        <h3 className="text-xl font-semibold mb-2">
                            Effortless Task Management
                        </h3>
                        <p>
                            Organize and track your tasks with ease, ensuring
                            maximum productivity.
                        </p>
                    </div>
                    <div className="p-6 bg-base-100 shadow-lg rounded-lg">
                        <FaUsers className="text-blue-500 text-4xl mb-4 mx-auto" />
                        <h3 className="text-xl font-semibold mb-2">
                            Collaborate Seamlessly
                        </h3>
                        <p>
                            Work with your team efficiently, assign tasks, and
                            track progress in real time.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;
