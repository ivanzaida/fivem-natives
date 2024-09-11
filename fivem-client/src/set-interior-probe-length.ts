/**
 * CFX:SET_INTERIOR_PROBE_LENGTH
 *
 * 0X423F7E39

 * Overwrite the games default CPortalTracker interior detection range.This fixes potentially unwanted behaviour in the base game and allows you to build custom interiors with larger ceiling heights without running into graphical glitches.By default CPortalTracker will probe 4 units downward trying to reach collisions that are part of the interior the entity is in.If no collision can be found 16 units are used in some circumstances.There are 30+ hard coded special cases, only some of them exposed via script (for example `ENABLE_STADIUM_PROBES_THIS_FRAME`).This native allows you to extend the probe range up to 150 units which is the same value the game uses for the `xs_arena_interior`
 * 
 * ------------------------------------------------------------------
 * @param {number} probeLength The desired probe length (0.0  150.0)
 */
export function setInteriorProbeLength(probeLength: number): void {
	const setInteriorProbeLength_result = Citizen.invokeNative<void>('0X423F7E39', probeLength);
	return setInteriorProbeLength_result;
}