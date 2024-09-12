/**
 * NETWORK:NETWORK_GET_ACTIVITY_PLAYER_NUM
 *
 * 0x148F075BF593134E

 * 
 * ------------------------------------------------------------------
 * @param {boolean} spectator
 * @returns {number}  
 */
export function networkGetActivityPlayerNum(spectator: boolean): number {
	const networkGetActivityPlayerNum_result = Citizen.invokeNative<number>('0x148F075BF593134E', spectator);
	return networkGetActivityPlayerNum_result;
}