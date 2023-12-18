'use client';

import React from 'react';
import { animals } from '@/lib/data';
import { Select, SelectItem } from '@nextui-org/react';

const ContactSelect = () => {
  return (
    <div>
      <Select
        label="Select an animal"
        variant="underlined"
        className="max-w-xs"
      >
        {animals.map((animal) => (
          <SelectItem key={animal.value} value={animal.value}>
            {animal.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default ContactSelect;
