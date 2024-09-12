/**
 * NETWORK:NETWORK_SET_ACTIVITY_SPECTATOR_MAX
 *
 * 0xD813155D5FA37C96

 * 
 * ------------------------------------------------------------------
 * @param {number} spectatorMax
 */
export function networkSetActivitySpectatorMax(spectatorMax: number): void {
	const networkSetActivitySpectatorMax_result = Citizen.invokeNative<void>('0xD813155D5FA37C96', spectatorMax);
	return networkSetActivitySpectatorMax_result;
}