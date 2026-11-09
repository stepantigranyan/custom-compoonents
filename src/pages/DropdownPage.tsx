import { CaseSensitive } from 'lucide-react';
import { Dropdown } from '@/ui/dropdown/Dropdown';
import { DropdownItem } from '@/ui/dropdown/DropdownItem';
import { DropdownSeparator } from '@/ui/dropdown/DropdownSepator';
import { Button } from '@/ui/button/Button';

const DropdownPage = () => {
    return (
        <div className="flex flex-col gap-y-20">
            <div className="flex flex-col gap-y-5">
                <h1 className="text-4xl font-bold">DropDown</h1>
                <p>A dropdown list.</p>
            </div>
            <div className="flex flex-col gap-y-5">
                <h2 className="text-2xl font-bold">When to use</h2>
                <p className="break-all">
                    When there are more than a few options to choose from, you can wrap them in a DropDown. By hovering
                    or clicking on the trigger,
                    <br />a dropdown menu will appear, which allows you to choose an option and execute the relevant
                    action.
                </p>
            </div>
            <div className="flex flex-col gap-y-5">
                <h2 className="text-2xl font-bold">Examples</h2>
                <div className="grid grid-cols-2 gap-x-10">
                    <div className="flex flex-col gap-y-5">
                        <div className="p-5 flex flex-col gap-y-5 border border-solid border-gray-300 rounded-lg">
                            <p className="text-lg">The most basic dropdown menu.</p>
                            <div className="flex items-center flex-wrap gap-3">
                                <Dropdown placement="top" trigger={<Button>Hover</Button>}>
                                    <DropdownItem icon={<CaseSensitive size={15} />} iconPlacement="right">
                                        Option 1
                                    </DropdownItem>
                                    <DropdownItem>Option 2</DropdownItem>
                                    <DropdownItem>Option 3</DropdownItem>
                                    <DropdownSeparator />
                                    <DropdownItem model="danger">Delete</DropdownItem>
                                </Dropdown>
                            </div>
                        </div>
                        <div className="p-5 flex flex-col gap-y-5 border border-solid border-gray-300 rounded-lg">
                            <p className="text-lg">Support 12 placements. Lorem ipsum dolor sit</p>
                            <div className="flex flex-col gap-y-10">
                                <div className="flex items-center justify-around gap-x-2">
                                    <Dropdown placement="topLeft" trigger={<Button>Hover</Button>}>
                                        <DropdownItem>Lorem ipsum dolor sit 1</DropdownItem>
                                        <DropdownItem>Lorem ipsum dolor sit 2</DropdownItem>
                                        <DropdownItem>Lorem ipsum dolor sit 3</DropdownItem>
                                        <DropdownItem>Lorem ipsum dolor sit 4</DropdownItem>
                                    </Dropdown>
                                    <Dropdown placement="top" trigger={<Button>Hover</Button>}>
                                        <DropdownItem>Lorem ipsum dolor sit 1</DropdownItem>
                                        <DropdownItem>Lorem ipsum dolor sit 2</DropdownItem>
                                        <DropdownItem>Lorem ipsum dolor sit 3</DropdownItem>
                                        <DropdownItem>Lorem ipsum dolor sit 4</DropdownItem>
                                    </Dropdown>
                                    <Dropdown placement="topRight" trigger={<Button>Hover</Button>}>
                                        <DropdownItem>Lorem ipsum dolor sit 1</DropdownItem>
                                        <DropdownItem>Lorem ipsum dolor sit 2</DropdownItem>
                                        <DropdownItem>Lorem ipsum dolor sit 3</DropdownItem>
                                        <DropdownItem>Lorem ipsum dolor sit 4</DropdownItem>
                                    </Dropdown>
                                </div>
                                <div className="flex items-center justify-around gap-x-2">
                                    <Dropdown placement="leftTop" trigger={<Button>Hover</Button>}>
                                        <DropdownItem>Lorem ipsum dolor sit 1</DropdownItem>
                                        <DropdownItem>Lorem ipsum dolor sit 2</DropdownItem>
                                        <DropdownItem>Lorem ipsum dolor sit 3</DropdownItem>
                                        <DropdownItem>Lorem ipsum dolor sit 4</DropdownItem>
                                    </Dropdown>
                                    <Dropdown placement="left" trigger={<Button>Hover</Button>}>
                                        <DropdownItem>Lorem ipsum dolor sit 1</DropdownItem>
                                        <DropdownItem>Lorem ipsum dolor sit 2</DropdownItem>
                                        <DropdownItem>Lorem ipsum dolor sit 3</DropdownItem>
                                        <DropdownItem>Lorem ipsum dolor sit 4</DropdownItem>
                                    </Dropdown>
                                    <Dropdown placement="leftBottom" trigger={<Button>Hover</Button>}>
                                        <DropdownItem>Lorem ipsum dolor sit 1</DropdownItem>
                                        <DropdownItem>Lorem ipsum dolor sit 2</DropdownItem>
                                        <DropdownItem>Lorem ipsum dolor sit 3</DropdownItem>
                                        <DropdownItem>Lorem ipsum dolor sit 4</DropdownItem>
                                    </Dropdown>
                                </div>
                                <div className="flex items-center justify-around gap-x-2">
                                    <Dropdown placement="rightTop" trigger={<Button>Hover</Button>}>
                                        <DropdownItem>Lorem ipsum dolor sit 1</DropdownItem>
                                        <DropdownItem>Lorem ipsum dolor sit 2</DropdownItem>
                                        <DropdownItem>Lorem ipsum dolor sit 3</DropdownItem>
                                        <DropdownItem>Lorem ipsum dolor sit 4</DropdownItem>
                                    </Dropdown>
                                    <Dropdown placement="right" trigger={<Button>Hover</Button>}>
                                        <DropdownItem>Lorem ipsum dolor sit 1</DropdownItem>
                                        <DropdownItem>Lorem ipsum dolor sit 2</DropdownItem>
                                        <DropdownItem>Lorem ipsum dolor sit 3</DropdownItem>
                                        <DropdownItem>Lorem ipsum dolor sit 4</DropdownItem>
                                    </Dropdown>
                                    <Dropdown placement="rightBottom" trigger={<Button>Hover</Button>}>
                                        <DropdownItem>Lorem ipsum dolor sit 1</DropdownItem>
                                        <DropdownItem>Lorem ipsum dolor sit 2</DropdownItem>
                                        <DropdownItem>Lorem ipsum dolor sit 3</DropdownItem>
                                        <DropdownItem>Lorem ipsum dolor sit 4</DropdownItem>
                                    </Dropdown>
                                </div>
                                <div className="flex items-center justify-around gap-x-2">
                                    <Dropdown placement="bottomLeft" trigger={<Button>Hover</Button>}>
                                        <DropdownItem>Lorem ipsum dolor sit 1</DropdownItem>
                                        <DropdownItem>Lorem ipsum dolor sit 2</DropdownItem>
                                        <DropdownItem>Lorem ipsum dolor sit 3</DropdownItem>
                                        <DropdownItem>Lorem ipsum dolor sit 4</DropdownItem>
                                    </Dropdown>
                                    <Dropdown placement="bottom" trigger={<Button>Hover</Button>}>
                                        <DropdownItem>Lorem ipsum dolor sit 1</DropdownItem>
                                        <DropdownItem>Lorem ipsum dolor sit 2</DropdownItem>
                                        <DropdownItem>Lorem ipsum dolor sit 3</DropdownItem>
                                        <DropdownItem>Lorem ipsum dolor sit 4</DropdownItem>
                                    </Dropdown>
                                    <Dropdown placement="bottomRight" trigger={<Button>Hover</Button>}>
                                        <DropdownItem>Lorem ipsum dolor sit 1</DropdownItem>
                                        <DropdownItem>Lorem ipsum dolor sit 2</DropdownItem>
                                        <DropdownItem>Lorem ipsum dolor sit 3</DropdownItem>
                                        <DropdownItem>Lorem ipsum dolor sit 4</DropdownItem>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-5">
                        <div className="p-5 flex flex-col gap-y-5 border border-solid border-gray-300 rounded-lg">
                            <p className="text-lg">Cascading Menu</p>
                            <div className="flex items-center flex-wrap gap-3">
                                <Dropdown placement="topLeft" trigger={<Button>Hover</Button>}>
                                    <DropdownItem>Lorem ipsum dolor sit 1</DropdownItem>
                                    <DropdownItem>Lorem ipsum dolor sit 2</DropdownItem>
                                    <DropdownItem>Lorem ipsum dolor sit 3</DropdownItem>
                                    <DropdownItem>
                                        <Dropdown placement="rightTop" trigger={<span>Lorem ipsum dolor sit 4</span>}>
                                            <DropdownItem>Lorem ipsum dolor sit 1</DropdownItem>
                                            <DropdownItem>Lorem ipsum dolor sit 2</DropdownItem>
                                        </Dropdown>
                                    </DropdownItem>
                                </Dropdown>
                            </div>
                        </div>
                        <div className="p-5 flex flex-col gap-y-5 border border-solid border-gray-300 rounded-lg">
                            <p className="text-lg">There are 4 basic modes for menu items</p>
                            <div className="flex items-center flex-wrap gap-3">
                                <Dropdown placement="topLeft" trigger={<Button>Hover</Button>}>
                                    <DropdownItem model="default">Lorem ipsum dolor sit 1</DropdownItem>
                                    <DropdownItem model="danger">Lorem ipsum dolor sit 2</DropdownItem>
                                    <DropdownItem model="warning">Lorem ipsum dolor sit 3</DropdownItem>
                                    <DropdownItem model="disabled">Lorem ipsum dolor sit 4</DropdownItem>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DropdownPage;
