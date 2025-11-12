/**
 * PATHFIND:SET_ALLOW_STREAM_HEIST_ISLAND_NODES
 *
 * 0x6FAD8BFDFFCEDD65

 * 
 * Set to TRUE to allow heist island road nodes from being
 * loaded, FALSE to disable
 * 
 * Activates Cayo Perico path nodes if passed `1`. GPS navigation will start working, maybe more stuff will change, not sure. It seems if you try to unload (pass `0`) when close to the island, your game might crash.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} allow
 */
export function setAllowStreamHeistIslandNodes(allow: boolean): void {
	const setAllowStreamHeistIslandNodes_result = Citizen.invokeNative<void>('0x6FAD8BFDFFCEDD65', allow);
	return setAllowStreamHeistIslandNodes_result;
}