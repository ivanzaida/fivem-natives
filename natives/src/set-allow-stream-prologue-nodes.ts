/**
 * PATHFIND:SET_ALLOW_STREAM_PROLOGUE_NODES
 *
 * 0x14B872A3D2879E35

 * 
 * Set to TRUE to allow prologue road nodes from being
 * loaded, FALSE to disable
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} allow
 */
export function setAllowStreamPrologueNodes(allow: boolean): void {
	const setAllowStreamPrologueNodes_result = Citizen.invokeNative<void>('0x14B872A3D2879E35', allow);
	return setAllowStreamPrologueNodes_result;
}