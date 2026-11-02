import { Search, X } from 'lucide-react';
import { Button } from '../ui/button.tsx';

const ButtonPage = () => {
    return (
        <div className="flex flex-col gap-y-20">
            <div className="flex flex-col gap-y-5">
                <h1 className="text-4xl font-bold">Button</h1>
                <p>To trigger an operation.</p>
            </div>
            <div className="flex flex-col gap-y-5">
                <h2 className="text-2xl font-bold">When to use</h2>
                <p className="break-all">
                    A button means an operation (or a series of operations). Clicking a button will trigger its
                    corresponding business logic.
                    <br />
                    In custom components we provide 4 variants of button.
                </p>
                <ul className="flex flex-col gap-y-2 list-disc list-inside">
                    <li>Solid button</li>
                    <li>Outlined button</li>
                    <li>Ghost button</li>
                    <li>Filled button</li>
                </ul>
            </div>
            <div className="flex flex-col gap-y-5">
                <h2 className="text-2xl font-bold">Examples</h2>
                <div className="grid grid-cols-2 gap-x-10">
                    <div className="flex flex-col gap-y-5">
                        <div className="p-5 flex flex-col gap-y-5 border border-solid border-gray-300 rounded-lg">
                            <p className="text-lg">
                                We support three sizes of buttons: small, medium and large. If a large or small button
                                is desired, set the size property to either large or small respectively. Omit the size
                                property for a button with the default medium size.
                            </p>
                            <div className="flex items-center flex-wrap gap-3">
                                <Button size="xs">Extra small</Button>
                                <Button size="sm">Small</Button>
                                <Button size="md">Medium</Button>
                                <Button size="lg">Large</Button>
                                <Button size="xl">Extra large</Button>
                            </div>
                        </div>
                        <div className="p-5 flex flex-col gap-y-5 border border-solid border-gray-300 rounded-lg">
                            <p className="text-lg">You can change border radius using radius property.</p>
                            <div className="flex items-center flex-wrap gap-3">
                                <Button size="sm" rounded="sm">
                                    Rounded sm
                                </Button>
                                <Button size="sm" rounded="md">
                                    Rounded md
                                </Button>
                                <Button size="sm" rounded="lg">
                                    Rounded lg
                                </Button>
                                <Button size="sm" rounded="full">
                                    Rounded full
                                </Button>
                            </div>
                        </div>
                        <div className="p-5 flex flex-col gap-y-5 border border-solid border-gray-300 rounded-lg">
                            <p className="text-lg">
                                To mark a button as disabled, add the disabled property to the Button.
                            </p>
                            <div className="flex flex-col gap-y-4">
                                <div className="flex items-center gap-3">
                                    <Button size="sm" variant="solid" color="blue">
                                        Solid
                                    </Button>
                                    <Button disabled={true} size="sm" variant="solid" color="blue">
                                        Primary
                                    </Button>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Button size="sm" variant="outline" color="blue">
                                        Outlined
                                    </Button>
                                    <Button disabled={true} size="sm" variant="outline" color="green">
                                        Outlined
                                    </Button>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Button size="sm" variant="ghost" color="blue">
                                        Ghost
                                    </Button>
                                    <Button disabled={true} size="sm" variant="ghost" color="purple">
                                        Ghost
                                    </Button>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Button size="sm" variant="filled" color="blue">
                                        Filled
                                    </Button>
                                    <Button disabled={true} size="sm" variant="filled" color="purple">
                                        Filled
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-5">
                        <div className="p-5 flex flex-col gap-y-5 border border-solid border-gray-300 rounded-lg">
                            <p className="text-lg">
                                You can set the color and variant attributes at the same time can derive more variant
                                buttons.
                            </p>
                            <div className="flex flex-col gap-y-4">
                                <div className="flex items-center flex-wrap gap-3">
                                    <Button size="sm" color="black" variant="solid">
                                        Solid
                                    </Button>
                                    <Button size="sm" color="black" variant="outline">
                                        Outlined
                                    </Button>
                                    <Button size="sm" color="black" variant="ghost">
                                        Ghost
                                    </Button>
                                    <Button size="sm" color="black" variant="filled">
                                        Filled
                                    </Button>
                                </div>
                                <div className="flex items-center flex-wrap gap-3">
                                    <Button size="sm" color="gray" variant="solid">
                                        Solid
                                    </Button>
                                    <Button size="sm" color="gray" variant="outline">
                                        Outlined
                                    </Button>
                                    <Button size="sm" color="gray" variant="ghost">
                                        Ghost
                                    </Button>
                                    <Button size="sm" color="gray" variant="filled">
                                        Filled
                                    </Button>
                                </div>
                                <div className="flex items-center flex-wrap gap-3">
                                    <Button size="sm" color="red" variant="solid">
                                        Solid
                                    </Button>
                                    <Button size="sm" color="red" variant="outline">
                                        Outlined
                                    </Button>
                                    <Button size="sm" color="red" variant="ghost">
                                        Ghost
                                    </Button>
                                    <Button size="sm" color="red" variant="filled">
                                        Filled
                                    </Button>
                                </div>
                                <div className="flex items-center flex-wrap gap-3">
                                    <Button size="sm" color="green" variant="solid">
                                        Solid
                                    </Button>
                                    <Button size="sm" color="green" variant="outline">
                                        Outlined
                                    </Button>
                                    <Button size="sm" color="green" variant="ghost">
                                        Ghost
                                    </Button>
                                    <Button size="sm" color="green" variant="filled">
                                        Filled
                                    </Button>
                                </div>
                                <div className="flex items-center flex-wrap gap-3">
                                    <Button size="sm" color="blue" variant="solid">
                                        Solid
                                    </Button>
                                    <Button size="sm" color="blue" variant="outline">
                                        Outlined
                                    </Button>
                                    <Button size="sm" color="blue" variant="ghost">
                                        Ghost
                                    </Button>
                                    <Button size="sm" color="blue" variant="filled">
                                        Filled
                                    </Button>
                                </div>
                                <div className="flex items-center flex-wrap gap-3">
                                    <Button size="sm" color="yellow" variant="solid">
                                        Solid
                                    </Button>
                                    <Button size="sm" color="yellow" variant="outline">
                                        Outlined
                                    </Button>
                                    <Button size="sm" color="yellow" variant="ghost">
                                        Ghost
                                    </Button>
                                    <Button size="sm" color="yellow" variant="filled">
                                        Filled
                                    </Button>
                                </div>
                                <div className="flex items-center flex-wrap gap-3">
                                    <Button size="sm" color="pink" variant="solid">
                                        Solid
                                    </Button>
                                    <Button size="sm" color="pink" variant="outline">
                                        Outlined
                                    </Button>
                                    <Button size="sm" color="pink" variant="ghost">
                                        Ghost
                                    </Button>
                                    <Button size="sm" color="pink" variant="filled">
                                        Filled
                                    </Button>
                                </div>
                                <div className="flex items-center flex-wrap gap-3">
                                    <Button size="sm" color="purple" variant="solid">
                                        Solid
                                    </Button>
                                    <Button size="sm" color="purple" variant="outline">
                                        Outlined
                                    </Button>
                                    <Button size="sm" color="purple" variant="ghost">
                                        Ghost
                                    </Button>
                                    <Button size="sm" color="purple" variant="filled">
                                        Filled
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="p-5 flex flex-col gap-y-5 border border-solid border-gray-300 rounded-lg">
                            <p className="text-lg">
                                You can set the position of a button's icon by setting the iconPlacement to start or end
                                respectively.
                            </p>
                            <div className="flex items-center flex-wrap gap-3">
                                <Button size="sm" icon={<Search className="w-4 h-4" />}>
                                    Search
                                </Button>
                                <Button size="sm" iconPlacement="right" icon={<X className="w-4 h-4" />}>
                                    Delete
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ButtonPage;
