import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:IS_FLASH_LIGHT_ON
 *
 * 0x76876154

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isFlashLightOn(ped: PedIndex): boolean {
	const isFlashLightOn_result = Citizen.invokeNative<boolean>('0x76876154', ped);
	return isFlashLightOn_result;
}