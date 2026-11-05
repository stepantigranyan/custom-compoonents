import { CaseSensitive } from 'lucide-react';
import { DropDown, DropDownItem, DropDownSeparator } from '@/ui/dropdown/dropdown.tsx';
import { Button } from '@/ui/button/button.tsx';

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
                                <DropDown placement="top" trigger={<Button>Hover</Button>}>
                                    <DropDownItem icon={<CaseSensitive size={15} />} iconPlacement="right">
                                        Option 1
                                    </DropDownItem>
                                    <DropDownItem>Option 2</DropDownItem>
                                    <DropDownItem>Option 3</DropDownItem>
                                    <DropDownSeparator />
                                    <DropDownItem model="danger">Delete</DropDownItem>
                                </DropDown>
                            </div>
                        </div>
                        <div className="p-5 flex flex-col gap-y-5 border border-solid border-gray-300 rounded-lg">
                            <p className="text-lg">Support 12 placements. Lorem ipsum dolor sit</p>
                            <div className="flex flex-col gap-y-10">
                                <div className="flex items-center justify-around gap-x-2">
                                    <DropDown placement="topLeft" trigger={<Button>Hover</Button>}>
                                        <DropDownItem>Lorem ipsum dolor sit 1</DropDownItem>
                                        <DropDownItem>Lorem ipsum dolor sit 2</DropDownItem>
                                        <DropDownItem>Lorem ipsum dolor sit 3</DropDownItem>
                                        <DropDownItem>Lorem ipsum dolor sit 4</DropDownItem>
                                    </DropDown>
                                    <DropDown placement="top" trigger={<Button>Hover</Button>}>
                                        <DropDownItem>Lorem ipsum dolor sit 1</DropDownItem>
                                        <DropDownItem>Lorem ipsum dolor sit 2</DropDownItem>
                                        <DropDownItem>Lorem ipsum dolor sit 3</DropDownItem>
                                        <DropDownItem>Lorem ipsum dolor sit 4</DropDownItem>
                                    </DropDown>
                                    <DropDown placement="topRight" trigger={<Button>Hover</Button>}>
                                        <DropDownItem>Lorem ipsum dolor sit 1</DropDownItem>
                                        <DropDownItem>Lorem ipsum dolor sit 2</DropDownItem>
                                        <DropDownItem>Lorem ipsum dolor sit 3</DropDownItem>
                                        <DropDownItem>Lorem ipsum dolor sit 4</DropDownItem>
                                    </DropDown>
                                </div>
                                <div className="flex items-center justify-around gap-x-2">
                                    <DropDown placement="leftTop" trigger={<Button>Hover</Button>}>
                                        <DropDownItem>Lorem ipsum dolor sit 1</DropDownItem>
                                        <DropDownItem>Lorem ipsum dolor sit 2</DropDownItem>
                                        <DropDownItem>Lorem ipsum dolor sit 3</DropDownItem>
                                        <DropDownItem>Lorem ipsum dolor sit 4</DropDownItem>
                                    </DropDown>
                                    <DropDown placement="left" trigger={<Button>Hover</Button>}>
                                        <DropDownItem>Lorem ipsum dolor sit 1</DropDownItem>
                                        <DropDownItem>Lorem ipsum dolor sit 2</DropDownItem>
                                        <DropDownItem>Lorem ipsum dolor sit 3</DropDownItem>
                                        <DropDownItem>Lorem ipsum dolor sit 4</DropDownItem>
                                    </DropDown>
                                    <DropDown placement="leftBottom" trigger={<Button>Hover</Button>}>
                                        <DropDownItem>Lorem ipsum dolor sit 1</DropDownItem>
                                        <DropDownItem>Lorem ipsum dolor sit 2</DropDownItem>
                                        <DropDownItem>Lorem ipsum dolor sit 3</DropDownItem>
                                        <DropDownItem>Lorem ipsum dolor sit 4</DropDownItem>
                                    </DropDown>
                                </div>
                                <div className="flex items-center justify-around gap-x-2">
                                    <DropDown placement="rightTop" trigger={<Button>Hover</Button>}>
                                        <DropDownItem>Lorem ipsum dolor sit 1</DropDownItem>
                                        <DropDownItem>Lorem ipsum dolor sit 2</DropDownItem>
                                        <DropDownItem>Lorem ipsum dolor sit 3</DropDownItem>
                                        <DropDownItem>Lorem ipsum dolor sit 4</DropDownItem>
                                    </DropDown>
                                    <DropDown placement="right" trigger={<Button>Hover</Button>}>
                                        <DropDownItem>Lorem ipsum dolor sit 1</DropDownItem>
                                        <DropDownItem>Lorem ipsum dolor sit 2</DropDownItem>
                                        <DropDownItem>Lorem ipsum dolor sit 3</DropDownItem>
                                        <DropDownItem>Lorem ipsum dolor sit 4</DropDownItem>
                                    </DropDown>
                                    <DropDown placement="rightBottom" trigger={<Button>Hover</Button>}>
                                        <DropDownItem>Lorem ipsum dolor sit 1</DropDownItem>
                                        <DropDownItem>Lorem ipsum dolor sit 2</DropDownItem>
                                        <DropDownItem>Lorem ipsum dolor sit 3</DropDownItem>
                                        <DropDownItem>Lorem ipsum dolor sit 4</DropDownItem>
                                    </DropDown>
                                </div>
                                <div className="flex items-center justify-around gap-x-2">
                                    <DropDown placement="bottomLeft" trigger={<Button>Hover</Button>}>
                                        <DropDownItem>Lorem ipsum dolor sit 1</DropDownItem>
                                        <DropDownItem>Lorem ipsum dolor sit 2</DropDownItem>
                                        <DropDownItem>Lorem ipsum dolor sit 3</DropDownItem>
                                        <DropDownItem>Lorem ipsum dolor sit 4</DropDownItem>
                                    </DropDown>
                                    <DropDown placement="bottom" trigger={<Button>Hover</Button>}>
                                        <DropDownItem>Lorem ipsum dolor sit 1</DropDownItem>
                                        <DropDownItem>Lorem ipsum dolor sit 2</DropDownItem>
                                        <DropDownItem>Lorem ipsum dolor sit 3</DropDownItem>
                                        <DropDownItem>Lorem ipsum dolor sit 4</DropDownItem>
                                    </DropDown>
                                    <DropDown placement="bottomRight" trigger={<Button>Hover</Button>}>
                                        <DropDownItem>Lorem ipsum dolor sit 1</DropDownItem>
                                        <DropDownItem>Lorem ipsum dolor sit 2</DropDownItem>
                                        <DropDownItem>Lorem ipsum dolor sit 3</DropDownItem>
                                        <DropDownItem>Lorem ipsum dolor sit 4</DropDownItem>
                                    </DropDown>
                                </div>
                            </div>
                        </div>
                        <div className="p-5 flex flex-col gap-y-5 border border-solid border-gray-300 rounded-lg">
                            <p className="text-lg">There are 4 basic modes for menu items</p>
                            <div className="flex items-center flex-wrap gap-3">
                                <DropDown placement="topLeft" trigger={<Button>Hover</Button>}>
                                    <DropDownItem model="default">Lorem ipsum dolor sit 1</DropDownItem>
                                    <DropDownItem model="danger">Lorem ipsum dolor sit 2</DropDownItem>
                                    <DropDownItem model="warning">Lorem ipsum dolor sit 3</DropDownItem>
                                    <DropDownItem model="disabled">Lorem ipsum dolor sit 4</DropDownItem>
                                </DropDown>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-5">
                        <div className="p-5 flex flex-col gap-y-5 border border-solid border-gray-300 rounded-lg">
                            <p className="text-lg">Cascading Menu</p>
                            <div className="flex items-center flex-wrap gap-3">
                                <DropDown placement="topLeft" trigger={<Button>Hover</Button>}>
                                    <DropDownItem>Lorem ipsum dolor sit 1</DropDownItem>
                                    <DropDownItem>Lorem ipsum dolor sit 2</DropDownItem>
                                    <DropDownItem>Lorem ipsum dolor sit 3</DropDownItem>
                                    <DropDownItem>
                                        <DropDown placement="rightTop" trigger={<span>Lorem ipsum dolor sit 4</span>}>
                                            <DropDownItem>Lorem ipsum dolor sit 1</DropDownItem>
                                            <DropDownItem>Lorem ipsum dolor sit 2</DropDownItem>
                                        </DropDown>
                                    </DropDownItem>
                                </DropDown>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DropdownPage;
