import { Spinner } from '@/ui/spinner/spinner.tsx';

const SpinnerPage = () => {
    return (
        <div className="flex flex-col gap-y-20">
            <div className="flex flex-col gap-y-5">
                <h1 className="text-4xl font-bold">Spinner</h1>
                <p>Used for the loading status of a page or a block.</p>
            </div>
            <div className="flex flex-col gap-y-5">
                <h2 className="text-2xl font-bold">Examples</h2>
                <div className="grid grid-cols-2 gap-x-10">
                    <div className="flex flex-col gap-y-5">
                        <div className="p-5 flex flex-col gap-y-5 border border-solid border-gray-300 rounded-lg">
                            <p className="text-lg">
                                We support three sizes of spinners: small, medium and large. If a large or small button
                                is desired, set the size property to either large or small respectively. Omit the size
                                property for a spinner.
                                <br />
                                <span className="text-sm text-gray-500">(sm, md, lg)</span>
                            </p>
                            <div className="flex items-center flex-wrap gap-3">
                                <Spinner size="sm" />
                                <Spinner size="md" />
                                <Spinner size="lg" />
                            </div>
                        </div>
                        <div className="p-5 flex flex-col gap-y-5 border border-solid border-gray-300 rounded-lg">
                            <p className="text-lg">
                                You can change spinner variant using variant attribute.
                                <br />
                                <span className="text-sm text-gray-500">(segment, dashed, arc)</span>
                            </p>
                            <div className="flex items-center flex-wrap gap-3">
                                <Spinner variant="segment" />
                                <Spinner variant="dashed" />
                                <Spinner variant="arc" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-5">
                        <div className="p-5 flex flex-col gap-y-5 border border-solid border-gray-300 rounded-lg">
                            <p className="text-lg">
                                You can set the rotating speed for spinner using speed attribute.
                                <br />
                                <span className="text-sm text-gray-500">(slow, medium, fast)</span>
                            </p>
                            <div className="flex flex-col gap-y-4">
                                <div className="flex items-center flex-wrap gap-3">
                                    <Spinner speed="slow" />
                                    <Spinner speed="medium" />
                                    <Spinner speed="fast" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-5">
                            <div className="p-5 flex flex-col gap-y-5 border border-solid border-gray-300 rounded-lg">
                                <p className="text-lg">
                                    You can set the color for spinner using color attribute. By default it takes
                                    parent's font color.
                                    <br />
                                    <span className="text-sm text-gray-500">
                                        (black, gray, blue, yellow, red, green, pink, purple)
                                    </span>
                                </p>
                                <div className="flex flex-col gap-y-4">
                                    <div className="flex items-center flex-wrap gap-3">
                                        <Spinner color="black" />
                                        <Spinner color="gray" />
                                        <Spinner color="blue" />
                                        <Spinner color="yellow" />
                                        <Spinner color="red" />
                                        <Spinner color="green" />
                                        <Spinner color="pink" />
                                        <Spinner color="purple" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpinnerPage;
