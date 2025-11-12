/**
 * OBJECT:DOOR_SYSTEM_SET_AUTOMATIC_DISTANCE
 *
 * 0x57A602C0620BEFF2

 * 
 * `forceUpdate` on true invokes DOOR_SYSTEM_SET_DOOR_STATE otherwise requestDoor is unused.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} doorEnumHash
 * @param {number} automaticDistance
 * @param {boolean} network
 * @param {boolean} flushState
 */
export function doorSystemSetAutomaticDistance(doorEnumHash: number, automaticDistance: number, network: boolean = true, flushState: boolean = false): void {
	const doorSystemSetAutomaticDistance_result = Citizen.invokeNative<void>('0x57A602C0620BEFF2', doorEnumHash, automaticDistance, network, flushState);
	return doorSystemSetAutomaticDistance_result;
}