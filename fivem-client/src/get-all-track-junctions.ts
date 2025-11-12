/**
 * CFX:GET_ALL_TRACK_JUNCTIONS
 *
 * 0x81A08523

 * Returns all track junctions on the clientThe data returned adheres to the following structure:```[1, 2, 4, 6, 69, 420]```
 * 
 * ------------------------------------------------------------------
 * @returns {number}  An object containing a list of track junctions ids.
```
 */
export function getAllTrackJunctions(): number[] {
	const getAllTrackJunctions_result = Citizen.invokeNative<number[]>('0x81A08523', Citizen.resultAsObject());
	return getAllTrackJunctions_result;
}