

export const SimpleField = ({ colSpan, number, label, small, allBorder, borderDefault }) => {


  const colSpanObj = {
    1: 'col-span-1',
    2: 'col-span-2',
    3: 'col-span-3',
    4: 'col-span-4',
    5: 'col-span-5',
    6: 'col-span-6',
    7: 'col-span-7',
    8: 'col-span-8',
    9: 'col-span-9',
    10: 'col-span-10',
    11: 'col-span-11',
    12: 'col-span-12',
  }

  return (
    <div className={`${colSpanObj[colSpan]} flex items-center mr-1`}>
      <span className="font-bold text-xs mr-2">{number}{number != '' && '.'}</span>
      <label className="text-neutral-800 font-semibold text-xs mr-2 whitespace-nowrap">{label}</label>
      <input className={`flex-grow w-6 h-4 text-xs ${small ? 'text-center' : 'pl-3'}  bg-transparent ${allBorder ? 'border' : 'border-b'} border-neutral-800 focus:outline-none`} />
    </div>
  );
};

