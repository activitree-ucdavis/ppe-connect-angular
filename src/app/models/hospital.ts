import { Address } from './address';
import { ContactInfo } from './contactInfo';

export interface Hospital {
    id?: string;
    name: string;
    address: Address;
    contactInfo: ContactInfo;
    description: string;
}