import { Notification } from '@/ui/notification/Notification.tsx';
import { Button } from '@/ui/button/Button.tsx';

const NotificationPage = () => {
    return (
        <div className="flex flex-col gap-y-20">
            <div className="flex flex-col gap-y-5">
                <h1 className="text-4xl font-bold">Notification</h1>
                <p>Prompt notification message globally.</p>
            </div>
            <div className="flex flex-col gap-y-5">
                <h2 className="text-2xl font-bold">When to use</h2>
                <p>
                    To display a notification message at any of the four corners of the viewport. Typically it can be
                    used in the following cases:
                </p>
                <ul className="flex flex-col gap-y-2 list-disc list-inside">
                    <li>A notification that is pushed by the application.</li>
                    <li>A notification with complex content.</li>
                    <li>
                        A notification providing a feedback based on the user interaction. Or it may show some details
                        about upcoming steps the user may have to follow.
                    </li>
                </ul>
            </div>
            <div className="flex flex-col gap-y-5">
                <h2 className="text-2xl font-bold">Examples</h2>
                <div className="grid grid-cols-2 gap-x-10">
                    <div className="flex flex-col gap-y-5">
                        <div className="p-5 flex flex-col gap-y-5 border border-solid border-gray-300 rounded-lg">
                            <p className="text-lg">Basic example</p>
                            <div className="flex items-center gap-x-2">
                                <Notification
                                    data={{
                                        title: 'Notification',
                                        description: 'Default notification',
                                        variant: 'default',
                                    }}
                                    trigger={<Button>Default</Button>}
                                />
                            </div>
                        </div>
                        <div className="p-5 flex flex-col gap-y-5 border border-solid border-gray-300 rounded-lg">
                            <p className="text-lg">
                                Stack configuration, enabled by default. Notifications will be stacked when the amount
                                is over threshold. Up to 3 notifications are shown in the collapsed stack.
                            </p>
                            <div className="flex items-center gap-x-2">
                                <Notification
                                    limit={10}
                                    data={{
                                        title: 'Notification',
                                        description: 'Default notification',
                                        variant: 'default',
                                    }}
                                    trigger={<Button>Limit 10</Button>}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-5">
                        <div className="p-5 flex flex-col gap-y-5 border border-solid border-gray-300 rounded-lg">
                            <p className="text-lg">
                                A notification box can appear from the top bottom topLeft topRight bottomLeft or
                                bottomRight of the viewport via position.
                            </p>
                            <div className="flex flex-col items-center gap-y-2">
                                <div className="flex items-center justify-center gap-x-2">
                                    <Notification
                                        data={{
                                            title: 'Notification Top Left',
                                            description: 'Default notification',
                                            variant: 'default',
                                        }}
                                        position="topLeft"
                                        trigger={<Button>Top Left</Button>}
                                    />
                                    <Notification
                                        data={{
                                            title: 'Notification Top',
                                            description: 'Default notification',
                                            variant: 'default',
                                        }}
                                        position="top"
                                        trigger={<Button>Top</Button>}
                                    />
                                    <Notification
                                        data={{
                                            title: 'Notification Top Right',
                                            description: 'Default notification',
                                            variant: 'default',
                                        }}
                                        position="topRight"
                                        trigger={<Button>Top Right</Button>}
                                    />
                                </div>
                                <div className="flex items-center justify-center gap-x-2">
                                    <Notification
                                        data={{
                                            title: 'Notification Bottom Left',
                                            description: 'Default notification',
                                            variant: 'default',
                                        }}
                                        position="bottomLeft"
                                        trigger={<Button>Bottom Left</Button>}
                                    />
                                    <Notification
                                        data={{
                                            title: 'Notification Bottom',
                                            description: 'Default notification',
                                            variant: 'default',
                                        }}
                                        position="bottom"
                                        trigger={<Button>Bottom</Button>}
                                    />
                                    <Notification
                                        data={{
                                            title: 'Notification Bottom Right',
                                            description: 'Default notification',
                                            variant: 'default',
                                        }}
                                        position="bottomRight"
                                        trigger={<Button>Bottom Right</Button>}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="p-5 flex flex-col gap-y-5 border border-solid border-gray-300 rounded-lg">
                            <p className="text-lg">
                                A notification box can appear from the top bottom topLeft topRight bottomLeft or
                                bottomRight of the viewport via position.
                            </p>
                            <div className="flex flex-col items-center gap-y-2">
                                <div className="flex items-center justify-center gap-x-2">
                                    <Notification
                                        data={{
                                            title: 'Notification Bottom Left',
                                            description: 'Default notification',
                                            variant: 'default',
                                        }}
                                        position="bottomLeft"
                                        trigger={<Button>Default</Button>}
                                    />
                                    <Notification
                                        data={{
                                            title: 'Destructive',
                                            description: 'Destructive notification',
                                            variant: 'destructive',
                                        }}
                                        position="bottomLeft"
                                        trigger={<Button color="red">Destructive</Button>}
                                    />
                                    <Notification
                                        data={{
                                            title: 'Success',
                                            description: 'Success notification',
                                            variant: 'success',
                                        }}
                                        position="bottomLeft"
                                        trigger={<Button color="green">Success</Button>}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotificationPage;
