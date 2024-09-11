/**
 * CFX:SET_EMITTER_PROBE_LENGTH
 *
 * 0X8AA1F3C2

 * Allows StaticEmitter's without a linked entity to make use of environment features like occlusion and reverb even if they are located higher than 20.0 units above any static collision inside interiors.This native allows you to extend the probe range up to 150.0 units.
 * 
 * ------------------------------------------------------------------
 * @param {number} probeLength The desired probe length (20.0  150.0)
 */
export function setEmitterProbeLength(probeLength: number): void {
	const setEmitterProbeLength_result = Citizen.invokeNative<void>('0X8AA1F3C2', probeLength);
	return setEmitterProbeLength_result;
}