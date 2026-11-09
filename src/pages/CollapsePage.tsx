import { ArrowRight } from 'lucide-react';
import { Collapse } from '@/ui/collapse/Collapse';
import { CollapseItem } from '@/ui/collapse/CollapseItem';
import { CollapseItemHeader } from '@/ui/collapse/CollapseItemHeader';
import { CollapseItemBody } from '@/ui/collapse/CollapseItemBody';

const CollapsePage = () => {
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
                            <div>
                                <Collapse size="sm">
                                    <CollapseItem>
                                        <CollapseItemHeader>This is panel header 1</CollapseItemHeader>
                                        <CollapseItemBody>
                                            A dog is a type of domesticated animal. Known for its loyalty and
                                            faithfulness, it can be found as a welcome guest in many households across
                                            the world.
                                        </CollapseItemBody>
                                    </CollapseItem>
                                    <CollapseItem>
                                        <CollapseItemHeader>This is panel header 2</CollapseItemHeader>
                                        <CollapseItemBody>
                                            A dog is a type of domesticated animal. Known for its loyalty and
                                            faithfulness, it can be found as a welcome guest in many households across
                                            the world.2
                                        </CollapseItemBody>
                                    </CollapseItem>
                                    <CollapseItem>
                                        <CollapseItemHeader>This is panel header 3</CollapseItemHeader>
                                        <CollapseItemBody>
                                            A dog is a type of domesticated animal. Known for its loyalty and
                                            faithfulness, it can be found as a welcome guest in many households across
                                            the world.3
                                        </CollapseItemBody>
                                    </CollapseItem>
                                </Collapse>
                            </div>
                        </div>
                        <div className="p-5 flex flex-col gap-y-5 border border-solid border-gray-300 rounded-lg">
                            <p className="text-lg">
                                We support 3 size for panel.
                                <br />
                                <span className="text-sm text-gray-500">(sm, md, lg)</span>
                            </p>
                            <div className="flex flex-col gap-y-3">
                                <Collapse size="sm">
                                    <CollapseItem>
                                        <CollapseItemHeader>This is small size panel header</CollapseItemHeader>
                                        <CollapseItemBody>
                                            A dog is a type of domesticated animal. Known for its loyalty and
                                            faithfulness, it can be found as a welcome guest in many households across
                                            the world.
                                        </CollapseItemBody>
                                    </CollapseItem>
                                </Collapse>
                                <Collapse size="md">
                                    <CollapseItem>
                                        <CollapseItemHeader>This is medium size panel header</CollapseItemHeader>
                                        <CollapseItemBody>
                                            A dog is a type of domesticated animal. Known for its loyalty and
                                            faithfulness, it can be found as a welcome guest in many households across
                                            the world.
                                        </CollapseItemBody>
                                    </CollapseItem>
                                </Collapse>
                                <Collapse size="lg">
                                    <CollapseItem>
                                        <CollapseItemHeader>This is large size panel header</CollapseItemHeader>
                                        <CollapseItemBody>
                                            A dog is a type of domesticated animal. Known for its loyalty and
                                            faithfulness, it can be found as a welcome guest in many households across
                                            the world.
                                        </CollapseItemBody>
                                    </CollapseItem>
                                </Collapse>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-5">
                        <div className="p-5 flex flex-col gap-y-5 border border-solid border-gray-300 rounded-lg">
                            <p className="text-lg">Collapse is nested inside the Collapse.</p>
                            <div>
                                <Collapse size="sm">
                                    <CollapseItem>
                                        <CollapseItemHeader>This is panel header 1</CollapseItemHeader>
                                        <CollapseItemBody>
                                            <Collapse size="sm">
                                                <CollapseItem>
                                                    <CollapseItemHeader>This is panel nest panel</CollapseItemHeader>
                                                    <CollapseItemBody>
                                                        A dog is a type of domesticated animal. Known for its loyalty
                                                        and faithfulness, it can be found as a welcome guest in many
                                                        households across the world.
                                                    </CollapseItemBody>
                                                </CollapseItem>
                                            </Collapse>
                                        </CollapseItemBody>
                                    </CollapseItem>
                                    <CollapseItem>
                                        <CollapseItemHeader>This is panel header 2</CollapseItemHeader>
                                        <CollapseItemBody>
                                            A dog is a type of domesticated animal. Known for its loyalty and
                                            faithfulness, it can be found as a welcome guest in many households across
                                            the world.
                                        </CollapseItemBody>
                                    </CollapseItem>
                                    <CollapseItem>
                                        <CollapseItemHeader>This is panel header 3</CollapseItemHeader>
                                        <CollapseItemBody>
                                            A dog is a type of domesticated animal. Known for its loyalty and
                                            faithfulness, it can be found as a welcome guest in many households across
                                            the world.
                                        </CollapseItemBody>
                                    </CollapseItem>
                                </Collapse>
                            </div>
                        </div>
                        <div className="p-5 flex flex-col gap-y-5 border border-solid border-gray-300 rounded-lg">
                            <p className="text-lg">You can make collapse item open using open attribute</p>
                            <div>
                                <Collapse size="sm">
                                    <CollapseItem open={true}>
                                        <CollapseItemHeader>This is panel header 1</CollapseItemHeader>
                                        <CollapseItemBody>
                                            A dog is a type of domesticated animal. Known for its loyalty and
                                            faithfulness, it can be found as a welcome guest in many households across
                                            the world.
                                        </CollapseItemBody>
                                    </CollapseItem>
                                    <CollapseItem>
                                        <CollapseItemHeader>This is panel header 2</CollapseItemHeader>
                                        <CollapseItemBody>
                                            A dog is a type of domesticated animal. Known for its loyalty and
                                            faithfulness, it can be found as a welcome guest in many households across
                                            the world.
                                        </CollapseItemBody>
                                    </CollapseItem>
                                </Collapse>
                            </div>
                        </div>
                        <div className="p-5 flex flex-col gap-y-5 border border-solid border-gray-300 rounded-lg">
                            <p className="text-lg">You can change collapse header icon using icon attribute</p>
                            <div>
                                <Collapse icon={<ArrowRight size={20} />} size="sm">
                                    <CollapseItem>
                                        <CollapseItemHeader>This is panel header 1</CollapseItemHeader>
                                        <CollapseItemBody>
                                            A dog is a type of domesticated animal. Known for its loyalty and
                                            faithfulness, it can be found as a welcome guest in many households across
                                            the world.
                                        </CollapseItemBody>
                                    </CollapseItem>
                                    <CollapseItem>
                                        <CollapseItemHeader>This is panel header 2</CollapseItemHeader>
                                        <CollapseItemBody>
                                            A dog is a type of domesticated animal. Known for its loyalty and
                                            faithfulness, it can be found as a welcome guest in many households across
                                            the world.
                                        </CollapseItemBody>
                                    </CollapseItem>
                                </Collapse>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollapsePage;
