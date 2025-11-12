/**
 * OBJECT:DOOR_SYSTEM_SET_OPEN_RATIO
 *
 * 0x3A15B21067339E98

 * 
 * Sets the ajar angle of a door.
 * Ranges from -1.0 to 1.0, and 0.0 is closed / default.
 * `forceUpdate` on true invokes DOOR_SYSTEM_SET_DOOR_STATE otherwise requestDoor is unused.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} doorEnumHash
 * @param {number} openRatio
 * @param {boolean} network
 * @param {boolean} flushState
 */
export function doorSystemSetOpenRatio(doorEnumHash: number, openRatio: number, network: boolean = true, flushState: boolean = false): void {
	const doorSystemSetOpenRatio_result = Citizen.invokeNative<void>('0x3A15B21067339E98', doorEnumHash, openRatio, network, flushState);
	return doorSystemSetOpenRatio_result;
}