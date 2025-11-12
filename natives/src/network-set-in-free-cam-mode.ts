/**
 * NETWORK:NETWORK_SET_IN_FREE_CAM_MODE
 *
 * 0x0A83667A5D36A4FF

 * 
 * Set the local in free cam Mode. This is used to ensure remote machines track
 * where the free cam is looking
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} inFreeCamMode
 */
export function networkSetInFreeCamMode(inFreeCamMode: boolean): void {
	const networkSetInFreeCamMode_result = Citizen.invokeNative<void>('0x0A83667A5D36A4FF', inFreeCamMode);
	return networkSetInFreeCamMode_result;
}