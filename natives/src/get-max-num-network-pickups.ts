/**
 * NETWORK:GET_MAX_NUM_NETWORK_PICKUPS
 *
 * 0x90F32A57D0D76E38

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getMaxNumNetworkPickups(): number {
	const getMaxNumNetworkPickups_result = Citizen.invokeNative<number>('0x90F32A57D0D76E38', );
	return getMaxNumNetworkPickups_result;
}