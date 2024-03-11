import React from 'react';
import Select from './Select'; // Import as a named import

function Title({...props },ref) {
  const items = [
    { value: 'Mr', label: 'Mr' },
    { value: 'Mrs', label: 'Mrs' },
    { value: 'Miss', label: 'Miss' },
    { value: 'Ms', label: 'Ms' },
    { value: 'Dr', label: 'Dr' },
    { value: 'Prof', label: 'Prof' },
    { value: 'Rev', label: 'Rev' },
    { value: 'Capt', label: 'Capt' },
    { value: 'Lt', label: 'Lt' },
    { value: 'Col', label: 'Col' },
    { value: 'Maj', label: 'Maj' },
    { value: 'Cmdr', label: 'Cmdr' },
    { value: 'Sgt', label: 'Sgt' },
    { value: 'Adm', label: 'Adm' },
    { value: 'Mstr', label: 'Mstr' },
    { value: 'Mx', label: 'Mx' },
    { value: 'Other', label: 'Other' }
  ];

  return (
    <>
      <Select
        labelvalue={'Title'}
        items={items}
        {...props}
        ref={ref}
      />
    </>
  );
}

export default React.forwardRef(Title);
