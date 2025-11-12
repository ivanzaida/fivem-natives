import { PedIndex, EWeaponType } from '@ivanzaida/structures'

/**
 * WEAPON:SET_PED_GADGET
 *
 * 0xD483C8E87621AF64

 * 
 * p1/gadgetHash was always 0xFBAB5776 ("GADGET_PARACHUTE").
 * p2 is always true.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EWeaponType} gadgetType
 * @param {boolean} equip
 */
export function setPedGadget(ped: PedIndex, gadgetType: EWeaponType | number, equip: boolean): void {
	const setPedGadget_result = Citizen.invokeNative<void>('0xD483C8E87621AF64', ped, gadgetType, equip);
	return setPedGadget_result;
}