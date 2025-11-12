/**
 * SYSTEM:TIMESTEP
 *
 * 0x0000000050597EE2

 * 
 * Gets the current frame time.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function timestep(): number {
	const timestep_result = Citizen.invokeNative<number>('0x0000000050597EE2', );
	return timestep_result;
}