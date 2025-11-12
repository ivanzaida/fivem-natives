import { PedIndex } from '@ivanzaida/structures'

/**
 * MISC:ENABLE_TENNIS_MODE
 *
 * 0x311543257CA6E66E

 * 
 * Turns on tennis navigation changes for a ped
 * 
 * Makes the ped jump around like they're in a tennis match
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} enable
 * @param {boolean} useFemaleClipSet
 */
export function enableTennisMode(ped: PedIndex, enable: boolean, useFemaleClipSet: boolean = false): void {
	const enableTennisMode_result = Citizen.invokeNative<void>('0x311543257CA6E66E', ped, enable, useFemaleClipSet);
	return enableTennisMode_result;
}