import { Empty } from '@/ui/empty/Empty';
import { Button } from '@/ui/button/Button';

const EmptyPage = () => {
    return (
        <div className="flex flex-col gap-y-20">
            <div className="flex flex-col gap-y-5">
                <h1 className="text-4xl font-bold">Empty</h1>
                <p>Empty state placeholder..</p>
            </div>
            <div className="flex flex-col gap-y-5">
                <h2 className="text-2xl font-bold">When to use</h2>
                <ul className="flex flex-col gap-y-2 list-disc list-inside">
                    <li>When there is no data provided, display for friendly tips.</li>
                    <li>User tutorial to create something in fresh new situation.</li>
                </ul>
            </div>
            <div className="flex flex-col gap-y-5">
                <h2 className="text-2xl font-bold">Examples</h2>
                <div className="grid grid-cols-2 gap-x-10">
                    <div className="flex flex-col gap-y-5">
                        <div className="p-5 flex flex-col gap-y-5 border border-solid border-gray-300 rounded-lg">
                            <p className="text-lg">Simplest Usage.</p>
                            <div className="flex items-center flex-wrap gap-3">
                                <Empty title="No data" description="No data provided" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-5">
                            <div className="p-5 flex flex-col gap-y-5 border border-solid border-gray-300 rounded-lg">
                                <p className="text-lg">
                                    You can customize the semantic dom style of Empty by passing objects/functions
                                    through classNames and styles.
                                </p>
                                <div className="flex flex-col items-center gap-3">
                                    <div className="w-full h-50">
                                        <Empty
                                            className="flex flex-col gap-y-3"
                                            title="No users"
                                            description="No users found."
                                        >
                                            <Button>Create one</Button>
                                        </Empty>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-5">
                            <div className="p-5 flex flex-col gap-y-5 border border-solid border-gray-300 rounded-lg">
                                <p className="text-lg">You can also add img for empty state and customize it.</p>
                                <div className="flex flex-col items-center gap-3">
                                    <div className="w-full">
                                        <Empty
                                            className="flex flex-col gap-y-3"
                                            title="No users"
                                            description="No users found."
                                            imgVariant="notFound"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-5">
                        <div className="p-5 flex flex-col gap-y-5 border border-solid border-gray-300 rounded-lg">
                            <p className="text-lg">
                                You can customize the semantic dom style of Empty by passing objects/functions through
                                classNames and styles.
                            </p>
                            <div className="flex flex-col items-center gap-3">
                                <div className="w-full h-50">
                                    <Empty className="border border-dashed bg-gray-200 rounded-lg" />
                                </div>
                                <div className="w-full h-50">
                                    <Empty className="border border-solid border-blue-100 bg-blue-100 rounded-lg" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-5">
                            <div className="p-5 flex flex-col gap-y-5 border border-solid border-gray-300 rounded-lg">
                                <p className="text-lg">You can also add img for empty state and customize it.</p>
                                <div className="flex flex-col items-center gap-3">
                                    <div className="w-full">
                                        <Empty
                                            className="flex flex-col gap-y-3"
                                            title="No users"
                                            imgVariant="default"
                                        />
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

export default EmptyPage;
