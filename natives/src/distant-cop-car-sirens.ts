/**
 * AUDIO:DISTANT_COP_CAR_SIRENS
 *
 * 0xEA602FA4CD3530B8

 * 
 * If value is set to true, and ambient siren sound will be played.
 * Appears to enable/disable an audio flag.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} play
 */
export function distantCopCarSirens(play: boolean): void {
	const distantCopCarSirens_result = Citizen.invokeNative<void>('0xEA602FA4CD3530B8', play);
	return distantCopCarSirens_result;
}