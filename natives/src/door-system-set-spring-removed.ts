/**
 * OBJECT:DOOR_SYSTEM_SET_SPRING_REMOVED
 *
 * 0x2ED5915E42CF4212

 * 
 * Includes networking check: ownership vs. or the door itself isn't networked.
 * `forceUpdate` on true invokes DOOR_SYSTEM_SET_DOOR_STATE otherwise requestDoor is unused.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} doorEnumHash
 * @param {boolean} removeSpring
 * @param {boolean} network
 * @param {boolean} flushState
 */
export function doorSystemSetSpringRemoved(doorEnumHash: number, removeSpring: boolean, network: boolean = true, flushState: boolean = false): void {
	const doorSystemSetSpringRemoved_result = Citizen.invokeNative<void>('0x2ED5915E42CF4212', doorEnumHash, removeSpring, network, flushState);
	return doorSystemSetSpringRemoved_result;
}