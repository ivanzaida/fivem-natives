import { EDispatchType } from '@ivanzaida/structures'

/**
 * MISC:ENABLE_DISPATCH_SERVICE
 *
 * 0xCC1C92F7E1A3CE9D

 * 
 * Enables a particular dispatch service, all existing units will stop responding if not yet in combat.
 * 
 * https://alloc8or.re/gta5/doc/enums/DispatchType.txt
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EDispatchType} dispatchType
 * @param {boolean} enable
 */
export function enableDispatchService(dispatchType: EDispatchType | number, enable: boolean): void {
	const enableDispatchService_result = Citizen.invokeNative<void>('0xCC1C92F7E1A3CE9D', dispatchType, enable);
	return enableDispatchService_result;
}