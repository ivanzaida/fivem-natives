/**
 * NETWORK:NETWORK_SET_MISSION_FINISHED
 *
 * 0x0A3E878F88F44843

 * 
 * ------------------------------------------------------------------
 */
export function networkSetMissionFinished(): void {
	const networkSetMissionFinished_result = Citizen.invokeNative<void>('0x0A3E878F88F44843', );
	return networkSetMissionFinished_result;
}