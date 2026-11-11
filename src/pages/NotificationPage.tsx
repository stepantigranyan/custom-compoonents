import { Button } from '@/ui/button/Button.tsx';
import { useNotification } from '@/hooks/useNotification.ts';

const NotificationPage = () => {
    const { notify, dismiss, remove } = useNotification();

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
                                <Button
                                    onClick={() => {
                                        notify({
                                            data: {
                                                title: 'Default',
                                                message: 'Default Notification',
                                            },
                                            options: {
                                                position: 'bottomLeft',
                                            },
                                        });
                                    }}
                                >
                                    Add Notification
                                </Button>
                            </div>
                        </div>
                        <div className="p-5 flex flex-col gap-y-5 border border-solid border-gray-300 rounded-lg">
                            <p className="text-lg">Variants</p>
                            <div className="flex items-center gap-x-2">
                                <Button
                                    onClick={() => {
                                        notify({
                                            data: {
                                                title: 'Default',
                                                message: 'Default Notification',
                                            },
                                            options: {
                                                variant: 'default',
                                            },
                                        });
                                    }}
                                >
                                    Default
                                </Button>
                                <Button
                                    color="green"
                                    onClick={() => {
                                        notify({
                                            data: {
                                                title: 'Success',
                                                message: 'Success Notification',
                                            },
                                            options: {
                                                variant: 'success',
                                            },
                                        });
                                    }}
                                >
                                    Success
                                </Button>
                                <Button
                                    color="red"
                                    onClick={() => {
                                        notify({
                                            data: {
                                                title: 'Destructive',
                                                message: 'Destructive Notification',
                                            },
                                            options: {
                                                variant: 'destructive',
                                            },
                                        });
                                    }}
                                >
                                    Destructive
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-5">
                        <div className="p-5 flex flex-col gap-y-5 border border-solid border-gray-300 rounded-lg">
                            <p className="text-lg">Add actions</p>
                            <div className="flex items-center gap-x-2">
                                <Button
                                    onClick={() => {
                                        const id = notify({
                                            data: {
                                                title: 'Notification With Some Actions',
                                                message:
                                                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid at aut molestiae odit voluptates. Corporis dolores exercitationem quaerat sapiente.',
                                            },
                                            options: {
                                                actions: [
                                                    {
                                                        title: 'Delete',
                                                        color: 'red',
                                                        variant: 'filled',
                                                        onClick: () => {
                                                            remove(id);
                                                        },
                                                    },
                                                    {
                                                        title: 'Submit',
                                                        color: 'blue',
                                                        variant: 'solid',
                                                        onClick: () => {
                                                            dismiss(id);
                                                        },
                                                    },
                                                ],
                                            },
                                        });
                                    }}
                                >
                                    Notification with actions
                                </Button>
                            </div>
                        </div>
                        <div className="p-5 flex flex-col gap-y-5 border border-solid border-gray-300 rounded-lg">
                            <p className="text-lg">Change notification existing duration.</p>
                            <div className="flex items-center gap-x-2">
                                <Button
                                    onClick={() => {
                                        notify({
                                            data: {
                                                title: 'Notification',
                                                message: 'This notification will disappear after 6 seconds',
                                            },
                                            options: {
                                                duration: 6000,
                                            },
                                        });
                                    }}
                                >
                                    Notification
                                </Button>
                            </div>
                        </div>
                        <div className="p-5 flex flex-col gap-y-5 border border-solid border-gray-300 rounded-lg">
                            <p className="text-lg">Change notification adding position.</p>
                            <div className="flex flex-col items-center gap-y-2">
                                <div className="flex gap-x-2 items-center justify-center">
                                    <Button
                                        onClick={() => {
                                            notify({
                                                data: {
                                                    title: 'Notification',
                                                    message:
                                                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, non.',
                                                },
                                                options: {
                                                    position: 'topLeft',
                                                },
                                            });
                                        }}
                                    >
                                        Top Left
                                    </Button>
                                    <Button
                                        onClick={() => {
                                            notify({
                                                data: {
                                                    title: 'Notification',
                                                    message:
                                                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, non.',
                                                },
                                                options: {
                                                    position: 'top',
                                                },
                                            });
                                        }}
                                    >
                                        Top
                                    </Button>
                                    <Button
                                        onClick={() => {
                                            notify({
                                                data: {
                                                    title: 'Notification',
                                                    message:
                                                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, non.',
                                                },
                                                options: {
                                                    position: 'topRight',
                                                },
                                            });
                                        }}
                                    >
                                        Top Right
                                    </Button>
                                </div>
                                <div className="flex items-center gap-x-2 justify-center">
                                    <Button
                                        onClick={() => {
                                            notify({
                                                data: {
                                                    title: 'Notification',
                                                    message:
                                                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, non.',
                                                },
                                                options: {
                                                    position: 'bottomLeft',
                                                },
                                            });
                                        }}
                                    >
                                        Bottom Left
                                    </Button>
                                    <Button
                                        onClick={() => {
                                            notify({
                                                data: {
                                                    title: 'Notification',
                                                    message:
                                                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, non.',
                                                },
                                                options: {
                                                    position: 'bottom',
                                                },
                                            });
                                        }}
                                    >
                                        Bottom
                                    </Button>
                                    <Button
                                        onClick={() => {
                                            notify({
                                                data: {
                                                    title: 'Notification',
                                                    message:
                                                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, non.',
                                                },
                                                options: {
                                                    position: 'bottomRight',
                                                },
                                            });
                                        }}
                                    >
                                        Bottom Right
                                    </Button>
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
