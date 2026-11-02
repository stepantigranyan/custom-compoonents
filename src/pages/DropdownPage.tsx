// import { Link } from 'react-router'
//
// import {Search, CaseSensitive, X} from 'lucide-react';
// import { Dropdown } from "../ui/dropdown.tsx";
// import { Button } from '../ui/button.tsx';
//
// const menuExample1 = [
//     {
//         key: '11',
//         label: <Link to='/dropdown'>1st menu item </Link>,
//     },
//     {
//         key: '12',
//         label: <Link to='/dropdown'>2nd menu item </Link>,
//         model: 'disabled'
//     },
//     {
//         key: '13',
//         label: <Link to='/dropdown'>3rd menu item</Link>,
//         model: 'warning'
//     },
//     {
//         key: '14',
//         label: <Link to='/dropdown'>3rd menu item</Link>,
//         model: 'danger'
//     },
// ];
//
// const menuExample2 = [
//     {
//         id: '21',
//         label: <Link to='/dropdown'>1st menu item </Link>,
//     },
//     {
//         id: '22',
//         label: <Link to='/dropdown'>2nd menu item </Link>,
//     },
//     {
//         id: '23',
//         label: <Link to='/dropdown'>3rd menu item</Link>,
//     },
// ]
//
// const DropdownPage = () => {
//     return (
//         <div className="flex flex-col gap-y-20">
//             <div className="flex flex-col gap-y-5">
//                 <h1 className="text-4xl font-bold">Dropdown</h1>
//                 <p>A dropdown list.</p>
//             </div>
//             <div className="flex flex-col gap-y-5">
//                 <h2 className="text-2xl font-bold">When to use</h2>
//                 <p className="break-all">
//                     When there are more than a few options to choose from, you
//                     can wrap them in a Dropdown. By hovering or clicking on the
//                     trigger,
//                     <br />a dropdown menu will appear, which allows you to
//                     choose an option and execute the relevant action.
//                 </p>
//             </div>
//             <div className="flex flex-col gap-y-5">
//                 <h2 className="text-2xl font-bold">Examples</h2>
//                 <div className="grid grid-cols-2 gap-x-10">
//                     <div className="flex flex-col gap-y-5">
//                         <div className="p-5 flex flex-col gap-y-5 border border-solid border-gray-300 rounded-lg">
//                             <p className="text-lg">
//                                 The most basic dropdown menu.
//                             </p>
//                             <div className="flex items-center flex-wrap gap-3">
//                                 <Dropdown menu={menuExample1} placement='bottom'>
//                                     <Button variant='ghost' color='blue'>Hover me</Button>
//                                 </Dropdown>
//                             </div>
//                         </div>
//                         <div className="p-5 flex flex-col gap-y-5 border border-solid border-gray-300 rounded-lg">
//                             <p className="text-lg">
//                                 Support 12 placements.
//                             </p>
//                             <div className='flex flex-col gap-y-2'>
//                                 <div className="flex items-center flex-wrap gap-3">
//                                     <Dropdown menu={menuExample2} placement='topLeft'>
//                                         <Button variant='ghost' color='black'>Top Left</Button>
//                                     </Dropdown>
//                                     <Dropdown menu={menuExample2} placement='top'>
//                                         <Button variant='ghost' color='black'>Top</Button>
//                                     </Dropdown>
//                                     <Dropdown menu={menuExample2} placement='topRight'>
//                                         <Button variant='ghost' color='black'>Top Right</Button>
//                                     </Dropdown>
//                                 </div>
//                                 <div className="flex items-center flex-wrap gap-3">
//                                     <Dropdown menu={menuExample2} placement='leftTop'>
//                                         <Button variant='ghost' color='black'>Left Top</Button>
//                                     </Dropdown>
//                                     <Dropdown menu={menuExample2} placement='left'>
//                                         <Button variant='ghost' color='black'>Left</Button>
//                                     </Dropdown>
//                                     <Dropdown menu={menuExample2} placement='leftBottom'>
//                                         <Button variant='ghost' color='black'>Left Bottom</Button>
//                                     </Dropdown>
//                                 </div>
//                                 <div className="flex items-center flex-wrap gap-3">
//                                     <Dropdown menu={menuExample2} placement='rightTop'>
//                                         <Button variant='ghost' color='black'>Right Top</Button>
//                                     </Dropdown>
//                                     <Dropdown menu={menuExample2} placement='right'>
//                                         <Button variant='ghost' color='black'>Right</Button>
//                                     </Dropdown>
//                                     <Dropdown menu={menuExample2} placement='rightBottom'>
//                                         <Button variant='ghost' color='black'>Right Bottom</Button>
//                                     </Dropdown>
//                                 </div>
//                                 <div className="flex items-center flex-wrap gap-3">
//                                     <Dropdown menu={menuExample2} placement='bottomLeft'>
//                                         <Button variant='ghost' color='black'>Bottom Left</Button>
//                                     </Dropdown>
//                                     <Dropdown menu={menuExample2} placement='bottom'>
//                                         <Button variant='ghost' color='black'>Bottom</Button>
//                                     </Dropdown>
//                                     <Dropdown menu={menuExample2} placement='bottomRight'>
//                                         <Button variant='ghost' color='black'>Bottom Right</Button>
//                                     </Dropdown>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="p-5 flex flex-col gap-y-5 border border-solid border-gray-300 rounded-lg">
//                             <p className="text-lg">
//                                 You can change a shape using shape property.
//                             </p>
//                             <div className="flex items-center flex-wrap gap-3">
//                                 <Button
//                                     shape="rectangle"
//                                     model="primary"
//                                     size="sm"
//                                 >
//                                     Primary
//                                 </Button>
//                                 <Button
//                                     shape="circle"
//                                     model="primary"
//                                     size="xs"
//                                 >
//                                     <CaseSensitive className="w-5 h-5"></CaseSensitive>
//                                 </Button>
//                                 <Button
//                                     shape="square"
//                                     model="primary"
//                                     size="xs"
//                                 >
//                                     <Search className="w-5 h-5" />
//                                 </Button>
//                             </div>
//                         </div>
//                         <div className="p-5 flex flex-col gap-y-5 border border-solid border-gray-300 rounded-lg">
//                             <p className="text-lg">
//                                 You can set the position of a button's icon by
//                                 setting the iconPlacement to start or end
//                                 respectively.
//                             </p>
//                             <div className="flex items-center flex-wrap gap-3">
//                                 <Button
//                                     shape="rectangle"
//                                     model="primary"
//                                     size="sm"
//                                     icon={<Search className="w-4 h-4" />}
//                                 >
//                                     Search
//                                 </Button>
//                                 <Button
//                                     shape="rectangle"
//                                     model="danger"
//                                     size="sm"
//                                     iconPlacement="right"
//                                     icon={<X className="w-4 h-4" />}
//                                 >
//                                     Delete
//                                 </Button>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="flex flex-col gap-y-5">
//                         <div className="p-5 flex flex-col gap-y-5 border border-solid border-gray-300 rounded-lg">
//                             <p className="text-lg">
//                                 You can set the color and variant attributes at
//                                 the same time can derive more variant buttons.
//                             </p>
//                             <div className="flex flex-col gap-y-4">
//                                 <div className="flex items-center flex-wrap gap-3">
//                                     <Button
//                                         size="sm"
//                                         color="black"
//                                         variant="solid"
//                                     >
//                                         Solid
//                                     </Button>
//                                     <Button
//                                         size="sm"
//                                         color="black"
//                                         variant="outline"
//                                     >
//                                         Outlined
//                                     </Button>
//                                     <Button
//                                         size="sm"
//                                         color="black"
//                                         variant="ghost"
//                                     >
//                                         Ghost
//                                     </Button>
//                                     <Button
//                                         size="sm"
//                                         color="black"
//                                         variant="filled"
//                                     >
//                                         Filled
//                                     </Button>
//                                 </div>
//                                 <div className="flex items-center flex-wrap gap-3">
//                                     <Button
//                                         size="sm"
//                                         color="gray"
//                                         variant="solid"
//                                     >
//                                         Solid
//                                     </Button>
//                                     <Button
//                                         size="sm"
//                                         color="gray"
//                                         variant="outline"
//                                     >
//                                         Outlined
//                                     </Button>
//                                     <Button
//                                         size="sm"
//                                         color="gray"
//                                         variant="ghost"
//                                     >
//                                         Ghost
//                                     </Button>
//                                     <Button
//                                         size="sm"
//                                         color="gray"
//                                         variant="filled"
//                                     >
//                                         Filled
//                                     </Button>
//                                 </div>
//                                 <div className="flex items-center flex-wrap gap-3">
//                                     <Button
//                                         size="sm"
//                                         color="red"
//                                         variant="solid"
//                                     >
//                                         Solid
//                                     </Button>
//                                     <Button
//                                         size="sm"
//                                         color="red"
//                                         variant="outline"
//                                     >
//                                         Outlined
//                                     </Button>
//                                     <Button
//                                         size="sm"
//                                         color="red"
//                                         variant="ghost"
//                                     >
//                                         Ghost
//                                     </Button>
//                                     <Button
//                                         size="sm"
//                                         color="red"
//                                         variant="filled"
//                                     >
//                                         Filled
//                                     </Button>
//                                 </div>
//                                 <div className="flex items-center flex-wrap gap-3">
//                                     <Button
//                                         size="sm"
//                                         color="green"
//                                         variant="solid"
//                                     >
//                                         Solid
//                                     </Button>
//                                     <Button
//                                         size="sm"
//                                         color="green"
//                                         variant="outline"
//                                     >
//                                         Outlined
//                                     </Button>
//                                     <Button
//                                         size="sm"
//                                         color="green"
//                                         variant="ghost"
//                                     >
//                                         Ghost
//                                     </Button>
//                                     <Button
//                                         size="sm"
//                                         color="green"
//                                         variant="filled"
//                                     >
//                                         Filled
//                                     </Button>
//                                 </div>
//                                 <div className="flex items-center flex-wrap gap-3">
//                                     <Button
//                                         size="sm"
//                                         color="blue"
//                                         variant="solid"
//                                     >
//                                         Solid
//                                     </Button>
//                                     <Button
//                                         size="sm"
//                                         color="blue"
//                                         variant="outline"
//                                     >
//                                         Outlined
//                                     </Button>
//                                     <Button
//                                         size="sm"
//                                         color="blue"
//                                         variant="ghost"
//                                     >
//                                         Ghost
//                                     </Button>
//                                     <Button
//                                         size="sm"
//                                         color="blue"
//                                         variant="filled"
//                                     >
//                                         Filled
//                                     </Button>
//                                 </div>
//                                 <div className="flex items-center flex-wrap gap-3">
//                                     <Button
//                                         size="sm"
//                                         color="yellow"
//                                         variant="solid"
//                                     >
//                                         Solid
//                                     </Button>
//                                     <Button
//                                         size="sm"
//                                         color="yellow"
//                                         variant="outline"
//                                     >
//                                         Outlined
//                                     </Button>
//                                     <Button
//                                         size="sm"
//                                         color="yellow"
//                                         variant="ghost"
//                                     >
//                                         Ghost
//                                     </Button>
//                                     <Button
//                                         size="sm"
//                                         color="yellow"
//                                         variant="filled"
//                                     >
//                                         Filled
//                                     </Button>
//                                 </div>
//                                 <div className="flex items-center flex-wrap gap-3">
//                                     <Button
//                                         size="sm"
//                                         color="pink"
//                                         variant="solid"
//                                     >
//                                         Solid
//                                     </Button>
//                                     <Button
//                                         size="sm"
//                                         color="pink"
//                                         variant="outline"
//                                     >
//                                         Outlined
//                                     </Button>
//                                     <Button
//                                         size="sm"
//                                         color="pink"
//                                         variant="ghost"
//                                     >
//                                         Ghost
//                                     </Button>
//                                     <Button
//                                         size="sm"
//                                         color="pink"
//                                         variant="filled"
//                                     >
//                                         Filled
//                                     </Button>
//                                 </div>
//                                 <div className="flex items-center flex-wrap gap-3">
//                                     <Button
//                                         size="sm"
//                                         color="purple"
//                                         variant="solid"
//                                     >
//                                         Solid
//                                     </Button>
//                                     <Button
//                                         size="sm"
//                                         color="purple"
//                                         variant="outline"
//                                     >
//                                         Outlined
//                                     </Button>
//                                     <Button
//                                         size="sm"
//                                         color="purple"
//                                         variant="ghost"
//                                     >
//                                         Ghost
//                                     </Button>
//                                     <Button
//                                         size="sm"
//                                         color="purple"
//                                         variant="filled"
//                                     >
//                                         Filled
//                                     </Button>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="p-5 flex flex-col gap-y-5 border border-solid border-gray-300 rounded-lg">
//                             <p className="text-lg">
//                                 To mark a button as disabled, add the disabled
//                                 property to the Button.
//                             </p>
//                             <div className="flex flex-col gap-y-4">
//                                 <div className="flex items-center gap-3">
//                                     <Button
//                                         size="sm"
//                                         variant="solid"
//                                         color="blue"
//                                     >
//                                         Solid
//                                     </Button>
//                                     <Button
//                                         disabled={true}
//                                         size="sm"
//                                         variant="solid"
//                                         color="blue"
//                                     >
//                                         Primary
//                                     </Button>
//                                 </div>
//                                 <div className="flex items-center gap-3">
//                                     <Button
//                                         size="sm"
//                                         variant="outline"
//                                         color="blue"
//                                     >
//                                         Outlined
//                                     </Button>
//                                     <Button
//                                         disabled={true}
//                                         size="sm"
//                                         variant="outline"
//                                         color="green"
//                                     >
//                                         Outlined
//                                     </Button>
//                                 </div>
//                                 <div className="flex items-center gap-3">
//                                     <Button
//                                         size="sm"
//                                         variant="ghost"
//                                         color="blue"
//                                     >
//                                         Ghost
//                                     </Button>
//                                     <Button
//                                         disabled={true}
//                                         size="sm"
//                                         variant="ghost"
//                                         color="purple"
//                                     >
//                                         Ghost
//                                     </Button>
//                                 </div>
//                                 <div className="flex items-center gap-3">
//                                     <Button
//                                         size="sm"
//                                         variant="filled"
//                                         color="blue"
//                                     >
//                                         Filled
//                                     </Button>
//                                     <Button
//                                         disabled={true}
//                                         size="sm"
//                                         variant="filled"
//                                         color="purple"
//                                     >
//                                         Filled
//                                     </Button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default DropdownPage;
