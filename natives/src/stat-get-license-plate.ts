import { EStatsenum } from '@ivanzaida/structures'

/**
 * STATS:STAT_GET_LICENSE_PLATE
 *
 * 0x586035D0F620ADEE

 * 
 * ------------------------------------------------------------------
 * @param {EStatsenum} keyHash
 * @returns {string}  
 */
export function statGetLicensePlate(keyHash: EStatsenum | number): string {
	const statGetLicensePlate_result = Citizen.invokeNative<string>('0x586035D0F620ADEE', keyHash);
	return statGetLicensePlate_result;
}