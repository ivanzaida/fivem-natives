import { PedIndex } from '@ivanzaida/structures'

/**
 * WEAPON:IS_FLASH_LIGHT_ON
 *
 * 0x9E333ABC0077FDAB

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isFlashLightOn(ped: PedIndex): boolean {
	const isFlashLightOn_result = Citizen.invokeNative<boolean>('0x9E333ABC0077FDAB', ped);
	return isFlashLightOn_result;
}