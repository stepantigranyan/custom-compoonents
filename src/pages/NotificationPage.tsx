import { useState } from 'react';
import { NotificationGroup } from '@/ui/notification/notification.tsx';
import { Button } from '@/ui/button/button.tsx';

import { v4 as uuidv4 } from 'uuid';

const NotificationPage = () => {
    const [ntfc, setNtfc] = useState([]);

    return (
        <div className="flex flex-col gap-y-20">
            <div className="flex flex-col gap-y-5">
                <h1 className="text-4xl font-bold">Collapse</h1>
                <p>A content area which can be collapsed and expanded.</p>
            </div>
            <div className="flex flex-col gap-y-5">
                <h2 className="text-2xl font-bold">When to use</h2>
                <ul className="flex flex-col gap-y-2 list-disc list-inside">
                    <li>Can be used to group or hide complex regions to keep the page clean.</li>
                    <li>
                        Accordion is a special kind of Collapse, which allows only one panel to be expanded at a time.
                    </li>
                </ul>
            </div>
            <div className="flex flex-col gap-y-5">
                <h2 className="text-2xl font-bold">Examples</h2>
                <div className="grid grid-cols-2 gap-x-10">
                    <div className="flex flex-col gap-y-5">
                        <div className="p-5 flex flex-col gap-y-5 border border-solid border-gray-300 rounded-lg">
                            <p className="text-lg">
                                By default, any number of panels can be expanded at a time. The first panel is expanded
                                in this example.
                            </p>
                            <div className="flex items-center gap-x-2">
                                <NotificationGroup
                                    position="topLeft"
                                    trigger={
                                        <Button onClick={() => setNtfc((prev) => [{ title: uuidv4() }, ...prev])}>
                                            Send message
                                        </Button>
                                    }
                                    notifications={ntfc}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-5"></div>
                </div>
            </div>
        </div>
    );
};

export default NotificationPage;
