import { PedIndex } from '@ivanzaida/structures'

/**
 * WEAPON:SET_PED_INFINITE_AMMO_CLIP
 *
 * 0x53A38286A3AC16C1

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} infinite
 */
export function setPedInfiniteAmmoClip(ped: PedIndex, infinite: boolean): void {
	const setPedInfiniteAmmoClip_result = Citizen.invokeNative<void>('0x53A38286A3AC16C1', ped, infinite);
	return setPedInfiniteAmmoClip_result;
}