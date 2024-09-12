import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_DISABLE_HIGH_FALL_DEATH
 *
 * 0x94FC2CFCFFCE172C

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} disableFallDeath
 */
export function setDisableHighFallDeath(ped: PedIndex, disableFallDeath: boolean): void {
	const setDisableHighFallDeath_result = Citizen.invokeNative<void>('0x94FC2CFCFFCE172C', ped, disableFallDeath);
	return setDisableHighFallDeath_result;
}