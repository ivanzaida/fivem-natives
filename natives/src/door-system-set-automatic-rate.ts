/**
 * OBJECT:DOOR_SYSTEM_SET_AUTOMATIC_RATE
 *
 * 0xDD0EDCD573B965E2

 * 
 * Includes networking check: ownership vs. or the door itself isn't networked.
 * `forceUpdate` on true invokes DOOR_SYSTEM_SET_DOOR_STATE otherwise requestDoor is unused.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} doorEnumHash
 * @param {number} automaticRate
 * @param {boolean} network
 * @param {boolean} flushState
 */
export function doorSystemSetAutomaticRate(doorEnumHash: number, automaticRate: number, network: boolean = true, flushState: boolean = false): void {
	const doorSystemSetAutomaticRate_result = Citizen.invokeNative<void>('0xDD0EDCD573B965E2', doorEnumHash, automaticRate, network, flushState);
	return doorSystemSetAutomaticRate_result;
}