import { Drawer, DrawerHeader, DrawerBody } from '@/ui/drawer/drawer.tsx';
import { Button } from '@/ui/button/button.tsx';

const DrawerPage = () => {
    return (
        <div className="flex flex-col gap-y-20">
            <div className="flex flex-col gap-y-5">
                <h1 className="text-4xl font-bold">Drawer</h1>
                <p>A panel that slides out from the edge of the screen.</p>
            </div>
            <div className="flex flex-col gap-y-5">
                <h2 className="text-2xl font-bold">When to use</h2>
                <p className="break-all">
                    A Drawer is a panel that is typically overlaid on top of a page and slides in from the side. It
                    contains a set of information or actions.
                    <br />
                    Since the user can interact with the Drawer without leaving the current page, tasks can be achieved
                    more efficiently within the same context.
                </p>
                <ul className="flex flex-col gap-y-2 list-disc list-inside">
                    <li>Use a Form to create or edit a set of information.</li>
                    <li>
                        Processing subtasks. When subtasks are too heavy for a Popover and we still want to keep the
                        subtasks in the context of the main task, Drawer comes very handy.
                    </li>
                    <li>When the same Form is needed in multiple places.</li>
                </ul>
            </div>
            <div className="flex flex-col gap-y-5">
                <h2 className="text-2xl font-bold">Examples</h2>
                <div className="grid grid-cols-2 gap-x-10">
                    <div className="flex flex-col gap-y-5">
                        <div className="p-5 flex flex-col gap-y-5 border border-solid border-gray-300 rounded-lg">
                            <p className="text-lg">Basic Drawer</p>
                            <div className="flex items-center flex-wrap gap-3">
                                <Drawer position="right" trigger={<Button>Open</Button>}>
                                    <DrawerHeader closeButtonPosition="right">
                                        <h2 className="text-lg">Basic Drawer</h2>
                                    </DrawerHeader>
                                    <DrawerBody>
                                        <ul>
                                            <li>Some content</li>
                                            <li>Some content</li>
                                            <li>Some content</li>
                                            <li>Some content</li>
                                        </ul>
                                    </DrawerBody>
                                </Drawer>
                            </div>
                        </div>
                        <div className="p-5 flex flex-col gap-y-5 border border-solid border-gray-300 rounded-lg">
                            <p className="text-lg">
                                Resizable drawer that allows users to adjust the drawer's width or height by dragging
                                the edge.
                            </p>
                            <div className="flex items-center flex-wrap gap-3">
                                <Drawer position="left" resize={true} trigger={<Button>Resize Drawer</Button>}>
                                    <DrawerHeader>
                                        <h2 className="text-lg">Resizable Drawer</h2>
                                    </DrawerHeader>
                                </Drawer>
                            </div>
                        </div>
                        <div className="p-5 flex flex-col gap-y-5 border border-solid border-gray-300 rounded-lg">
                            <p className="text-lg">Mask effect.</p>
                            <div className="flex items-center flex-wrap gap-3">
                                <Drawer position="left" maskType="blur" trigger={<Button>Blur</Button>}>
                                    <DrawerHeader>
                                        <h2 className="text-lg">Blur mask</h2>
                                    </DrawerHeader>
                                </Drawer>
                                <Drawer position="left" maskType="dimmed" trigger={<Button>Dimmed</Button>}>
                                    <DrawerHeader>
                                        <h2 className="text-lg">Dimmed mask</h2>
                                    </DrawerHeader>
                                </Drawer>
                                <Drawer position="left" maskType="none" trigger={<Button>None</Button>}>
                                    <DrawerHeader>
                                        <h2 className="text-lg">None mask</h2>
                                    </DrawerHeader>
                                </Drawer>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-5">
                        <div className="p-5 flex flex-col gap-y-5 border border-solid border-gray-300 rounded-lg">
                            <p className="text-lg">
                                You can set the color and variant attributes at the same time can derive more variant
                                buttons.
                            </p>
                            <div className="flex items-center flex-wrap gap-3">
                                <Drawer position="left" trigger={<Button>Left Drawer</Button>}>
                                    <DrawerHeader>
                                        <h2 className="text-lg">Left Drawer</h2>
                                    </DrawerHeader>
                                </Drawer>
                                <Drawer position="top" trigger={<Button>Top Drawer</Button>}>
                                    <DrawerHeader>
                                        <h2 className="text-lg">Top Drawer</h2>
                                    </DrawerHeader>
                                </Drawer>
                                <Drawer position="right" trigger={<Button>Right Drawer</Button>}>
                                    <DrawerHeader>
                                        <h2 className="text-lg">Right Drawer</h2>
                                    </DrawerHeader>
                                </Drawer>
                                <Drawer position="bottom" trigger={<Button>Bottom Drawer</Button>}>
                                    <DrawerHeader>
                                        <h2 className="text-lg">Bottom Drawer</h2>
                                    </DrawerHeader>
                                </Drawer>
                            </div>
                        </div>
                        <div className="p-5 flex flex-col gap-y-5 border border-solid border-gray-300 rounded-lg">
                            <p className="text-lg">
                                You can remove close button using showCloseButton attribute.
                                <br />
                                Or change position using closeButonPosition
                            </p>
                            <div className="flex items-center flex-wrap gap-3">
                                <Drawer position="right" trigger={<Button>Open</Button>}>
                                    <DrawerHeader showCloseButton={false}>
                                        <h2 className="text-lg">Drawer without close button</h2>
                                    </DrawerHeader>
                                </Drawer>
                                <Drawer position="left" trigger={<Button>Open</Button>}>
                                    <DrawerHeader closeButtonPosition={'left'}>
                                        <h2 className="text-lg">Close Button Left position</h2>
                                    </DrawerHeader>
                                </Drawer>
                            </div>
                        </div>
                        <div className="p-5 flex flex-col gap-y-5 border border-solid border-gray-300 rounded-lg">
                            <p className="text-lg">Render in current dom. custom container,</p>
                            <div className="flex items-center flex-wrap gap-3">
                                <div
                                    id="drawer-inside-render"
                                    className="relative border border-solid border-gray-300 rounded-md overflow-hidden w-full h-100 flex flex-col items-center justify-center gap-y-3"
                                >
                                    <h2 className="text-lg">Rendered inside component.</h2>
                                    <Drawer
                                        target="drawer-inside-render"
                                        position="right"
                                        trigger={<Button>Open</Button>}
                                    >
                                        <DrawerHeader>
                                            <h2 className="text-lg">Hello</h2>
                                        </DrawerHeader>
                                    </Drawer>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DrawerPage;
