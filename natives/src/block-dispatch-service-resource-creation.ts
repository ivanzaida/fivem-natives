import { EDispatchType } from '@ivanzaida/structures'

/**
 * MISC:BLOCK_DISPATCH_SERVICE_RESOURCE_CREATION
 *
 * 0xB3BB215FCE55E6A9

 * 
 * Prevents a particular dispatch service from creating new vehicles but allows existing peds/vehicles to respond
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EDispatchType} dispatchType
 * @param {boolean} block
 */
export function blockDispatchServiceResourceCreation(dispatchType: EDispatchType | number, block: boolean): void {
	const blockDispatchServiceResourceCreation_result = Citizen.invokeNative<void>('0xB3BB215FCE55E6A9', dispatchType, block);
	return blockDispatchServiceResourceCreation_result;
}