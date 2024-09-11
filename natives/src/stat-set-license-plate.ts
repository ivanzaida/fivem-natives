import { EStatsenum } from '@ivanzaida/structures'

/**
 * STATS:STAT_SET_LICENSE_PLATE
 *
 * 0x9E1D4641E6A5C2F0

 * 
 * ------------------------------------------------------------------
 * @param {EStatsenum} keyHash
 * @param {string} licensePlate
 * @returns {boolean}  
 */
export function statSetLicensePlate(keyHash: EStatsenum | number, licensePlate: string): boolean {
	const statSetLicensePlate_result = Citizen.invokeNative<boolean>('0x9E1D4641E6A5C2F0', keyHash, licensePlate);
	return statSetLicensePlate_result;
}