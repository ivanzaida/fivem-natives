import { PedIndex } from '@ivanzaida/structures'

/**
 * STREAMING:SWITCH_TO_MULTI_SECONDPART
 *
 * 0xB4EDA6C252467FB1

 * 
 * pan and descend to the destination ped during player switch (when going from SP to MP)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} newPed
 */
export function switchToMultiSecondpart(newPed: PedIndex): void {
	const switchToMultiSecondpart_result = Citizen.invokeNative<void>('0xB4EDA6C252467FB1', newPed);
	return switchToMultiSecondpart_result;
}