/**
 * INTERIOR:ENABLE_STADIUM_PROBES_THIS_FRAME
 *
 * 0xBC9CDE5AE8D32EF2

 * 
 * ------------------------------------------------------------------
 * @param {boolean} enable
 */
export function enableStadiumProbesThisFrame(enable: boolean): void {
	const enableStadiumProbesThisFrame_result = Citizen.invokeNative<void>('0xBC9CDE5AE8D32EF2', enable);
	return enableStadiumProbesThisFrame_result;
}