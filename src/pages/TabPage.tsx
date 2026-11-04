import { Tab, TabPage as TP } from '@/ui/tab/tab.tsx';
import { Leaf, Earth, CarFront } from 'lucide-react'

export const TabPage = () => {
    return (
        <div className="flex flex-col gap-y-20">
            <div className="flex flex-col gap-y-5">
                <h1 className="text-4xl font-bold">Tabs</h1>
                <p>Tabs make it easy to explore and switch between different views.</p>
            </div>
            <div className="flex flex-col gap-y-5">
                <h2 className="text-2xl font-bold">Examples</h2>
                <div className="grid grid-cols-2 gap-x-10">
                    <div className="flex flex-col gap-y-5">
                        <div className="p-5 flex flex-col gap-y-5 border border-solid border-gray-300 rounded-lg">
                            <p className="text-lg">Default activate first tab.</p>
                            <div className="flex items-center flex-wrap gap-3">
                                <Tab
                                    data={[
                                        { key: '1', title: 'Tab 1', children: <h1>Tab 1 page</h1> },
                                        { key: '2', title: 'Tab 2', children: <h1>Tab 2 page</h1> },
                                        { key: '3', title: 'Tab 3', children: <h1>Tab 3 page</h1> },
                                    ]}
                                >
                                    <TP className="w-full min-h-20" />
                                </Tab>
                            </div>
                        </div>
                        <div className="p-5 flex flex-col gap-y-5 border border-solid border-gray-300 rounded-lg">
                            <p className="text-lg">Choose buttons placement.</p>
                            <div className="flex items-center flex-wrap gap-3">
                                <Tab
                                    position="start"
                                    data={[
                                        { key: '1', title: 'Tab 1', children: <h1>Tab 1 page</h1> },
                                        { key: '2', title: 'Tab 2', children: <h1>Tab 2 page</h1> },
                                        { key: '3', title: 'Tab 3', children: <h1>Tab 3 page</h1> },
                                    ]}
                                >
                                    <TP className="w-full min-h-20" />
                                </Tab>
                                <Tab
                                    position="center"
                                    data={[
                                        { key: '1', title: 'Tab 1', children: <h1>Tab 1 page</h1> },
                                        { key: '2', title: 'Tab 2', children: <h1>Tab 2 page</h1> },
                                        { key: '3', title: 'Tab 3', children: <h1>Tab 3 page</h1> },
                                    ]}
                                >
                                    <TP className="w-full min-h-20" />
                                </Tab>
                                <Tab
                                    position="end"
                                    data={[
                                        { key: '1', title: 'Tab 1', children: <h1>Tab 1 page</h1> },
                                        { key: '2', title: 'Tab 2', children: <h1>Tab 2 page</h1> },
                                        { key: '3', title: 'Tab 3', children: <h1>Tab 3 page</h1> },
                                    ]}
                                >
                                    <TP className="w-full min-h-20" />
                                </Tab>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-5">
                        <div className="p-5 flex flex-col gap-y-5 border border-solid border-gray-300 rounded-lg">
                            <p className="text-lg">You can also choose direction.</p>
                            <div className="flex flex-col gap-y-4">
                                <div className="flex flex-col items-center gap-3">
                                    <Tab
                                        direction="horizontal"
                                        data={[
                                            { key: '1', title: 'Tab 1', children: <h1>Tab 1 page</h1> },
                                            { key: '2', title: 'Tab 2', children: <h1>Tab 2 page</h1> },
                                            { key: '3', title: 'Tab 3', children: <h1>Tab 3 page</h1> },
                                        ]}
                                    >
                                        <TP className="w-full min-h-20" />
                                    </Tab>
                                    <Tab
                                        direction="vertical"
                                        position="start"
                                        data={[
                                            { key: '1', title: 'Tab 1', children: <h1>Tab 1 page</h1> },
                                            { key: '2', title: 'Tab 2', children: <h1>Tab 2 page</h1> },
                                            { key: '3', title: 'Tab 3', children: <h1>Tab 3 page</h1> },
                                        ]}
                                    >
                                        <TP className="w-full h-50" />
                                    </Tab>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-5">
                            <div className="p-5 flex flex-col gap-y-5 border border-solid border-gray-300 rounded-lg">
                                <p className="text-lg">Tabs With Icons</p>
                                <div className="flex flex-col gap-y-4">
                                    <Tab
                                        direction="horizontal"
                                        data={[
                                            { key: '1', title: 'Tab 1', icon: <Leaf size={15}/>,  children: <h1>Tab 1 page</h1> },
                                            { key: '2', title: 'Tab 2', icon: <Earth size={15}/>, children: <h1>Tab 2 page</h1> },
                                            { key: '3', title: 'Tab 3', icon: <CarFront size={15}/>, children: <h1>Tab 3 page</h1> },
                                        ]}
                                    >
                                        <TP className="w-full min-h-20" />
                                    </Tab>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
