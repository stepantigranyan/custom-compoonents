import { Modal } from '@/ui/modal/Modal';
import { ModalHeader } from '@/ui/modal/ModalHeader';
import { ModalBody } from '@/ui/modal/ModalBody';
import { ModalActions } from '@/ui/modal/ModalActions';
import { Button } from '@/ui/button/Button';

const SpinnerPage = () => {
    return (
        <div className="flex flex-col gap-y-20">
            <div className="flex flex-col gap-y-5">
                <h1 className="text-4xl font-bold">Modal</h1>
                <p>Display a modal dialog box, providing a title, content area, and action buttons.</p>
            </div>
            <div className="flex flex-col gap-y-5">
                <h2 className="text-2xl font-bold">When to use</h2>
                When requiring users to interact with the application, but without jumping to a new page and
                interrupting the user's workflow,
                <br />
                you can use Modal to create a new floating layer over the current page to get user feedback or display
                information.
            </div>
            <div className="flex flex-col gap-y-5">
                <h2 className="text-2xl font-bold">Examples</h2>
                <div className="grid grid-cols-2 gap-x-10">
                    <div className="flex flex-col gap-y-5">
                        <div className="p-5 flex flex-col gap-y-5 border border-solid border-gray-300 rounded-lg">
                            <p className="text-lg">Simplest Usage.</p>
                            <div className="flex items-center flex-wrap gap-3">
                                <Modal trigger={<Button>Open</Button>}>
                                    <ModalHeader>
                                        <h2 className="text-lg font-bold">Helo!!!</h2>
                                    </ModalHeader>
                                    <ModalBody>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse et explicabo
                                            fugiat id impedit inventore magni minus nemo officia officiis quasi quos
                                            saepe, veritatis. Architecto beatae blanditiis doloribus earum ex minus,
                                            necessitatibus omnis placeat quae tempora voluptate voluptates? Consequuntur
                                            error facilis laborum nam sit? Amet dolorem ducimus et nemo velit!
                                        </p>
                                    </ModalBody>
                                </Modal>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-5">
                            <div className="p-5 flex flex-col gap-y-5 border border-solid border-gray-300 rounded-lg">
                                <p className="text-lg">Render in current dom. custom container,</p>
                                <div className="flex items-center flex-wrap gap-3">
                                    <div
                                        id="modal-inside-render"
                                        className="relative border border-solid border-gray-300 rounded-md overflow-hidden w-full h-100 flex flex-col items-center justify-center gap-y-3"
                                    >
                                        <h2 className="text-lg">Rendered inside component.</h2>
                                        <Modal target="modal-inside-render" trigger={<Button>Open</Button>}>
                                            <ModalHeader>
                                                <h2 className="text-lg">Inside Component</h2>
                                            </ModalHeader>
                                            <ModalBody>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
                                                    error illo iste labore perspiciatis quibusdam quis repudiandae sequi
                                                    temporibus voluptates.
                                                </p>
                                            </ModalBody>
                                        </Modal>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-5">
                        <div className="p-5 flex flex-col gap-y-5 border border-solid border-gray-300 rounded-lg">
                            <p className="text-lg">Mask effect.</p>
                            <div className="flex items-center gap-3">
                                <Modal maskType="blur" trigger={<Button>Blur</Button>}>
                                    <ModalHeader>
                                        <h2 className="text-lg">Hello</h2>
                                    </ModalHeader>
                                    <ModalBody>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid error illo
                                            iste labore perspiciatis quibusdam quis repudiandae sequi temporibus
                                            voluptates.
                                        </p>
                                    </ModalBody>
                                </Modal>
                                <Modal maskType="dimmed" trigger={<Button>Dimmed</Button>}>
                                    <ModalHeader>
                                        <h2 className="text-lg">Hello</h2>
                                    </ModalHeader>
                                    <ModalBody>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid error illo
                                            iste labore perspiciatis quibusdam quis repudiandae sequi temporibus
                                            voluptates.
                                        </p>
                                    </ModalBody>
                                </Modal>
                                <Modal maskType="none" trigger={<Button>None</Button>}>
                                    <ModalHeader>
                                        <h2 className="text-lg">Hello</h2>
                                    </ModalHeader>
                                    <ModalBody>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid error illo
                                            iste labore perspiciatis quibusdam quis repudiandae sequi temporibus
                                            voluptates.
                                        </p>
                                    </ModalBody>
                                </Modal>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-5">
                            <div className="p-5 flex flex-col gap-y-5 border border-solid border-gray-300 rounded-lg">
                                <p className="text-lg">You can also add action buttons.</p>
                                <div className="flex flex-col items-center gap-3">
                                    <Modal trigger={<Button>Open</Button>}>
                                        <ModalHeader>
                                            <h2 className="text-lg font-bold">Helo!!!</h2>
                                        </ModalHeader>
                                        <ModalBody>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse et
                                                explicabo fugiat id impedit inventore magni minus nemo officia officiis
                                                quasi quos saepe, veritatis. Architecto beatae blanditiis doloribus
                                                earum ex minus, necessitatibus omnis placeat quae tempora voluptate
                                                voluptates? Consequuntur error facilis laborum nam sit? Amet dolorem
                                                ducimus et nemo velit!
                                            </p>
                                        </ModalBody>
                                        <ModalActions
                                            submit={<Button size="sm">Submit</Button>}
                                            cancel={
                                                <Button size="sm" variant="filled" color="gray">
                                                    Cancel
                                                </Button>
                                            }
                                        />
                                    </Modal>
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
