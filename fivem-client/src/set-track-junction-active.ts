/**
 * CFX:SET_TRACK_JUNCTION_ACTIVE
 *
 * 0x537B449D

 * Sets the state of a track junction.
 * 
 * ------------------------------------------------------------------
 * @param {number} junctionIndex The junctions index
 * @param {boolean} state Toggles the state of the junction
 * @returns {boolean}  Returns if it succeeds setting the junctions state or not
 */
export function setTrackJunctionActive(junctionIndex: number, state: boolean): boolean {
	const setTrackJunctionActive_result = Citizen.invokeNative<boolean>('0x537B449D', junctionIndex, state);
	return setTrackJunctionActive_result;
}