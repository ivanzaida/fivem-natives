import { PedIndex, EWeaponType } from '@ivanzaida/structures'

/**
 * WEAPON:GET_IS_PED_GADGET_EQUIPPED
 *
 * 0x08DAD6B08438A17C

 * 
 * gadgetHash - was always 0xFBAB5776 ("GADGET_PARACHUTE").
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EWeaponType} gadgetType
 * @returns {boolean}  
 */
export function getIsPedGadgetEquipped(ped: PedIndex, gadgetType: EWeaponType | number): boolean {
	const getIsPedGadgetEquipped_result = Citizen.invokeNative<boolean>('0x08DAD6B08438A17C', ped, gadgetType);
	return getIsPedGadgetEquipped_result;
}