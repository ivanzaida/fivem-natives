/**
 * OBJECT:DOOR_SYSTEM_SET_HOLD_OPEN
 *
 * 0x0EBFE569715DB18F

 * 
 * Includes networking check: ownership vs. or the door itself isn't networked.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} doorEnumHash
 * @param {boolean} holdOpen
 */
export function doorSystemSetHoldOpen(doorEnumHash: number, holdOpen: boolean): void {
	const doorSystemSetHoldOpen_result = Citizen.invokeNative<void>('0x0EBFE569715DB18F', doorEnumHash, holdOpen);
	return doorSystemSetHoldOpen_result;
}