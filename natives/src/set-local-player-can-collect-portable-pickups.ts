/**
 * OBJECT:SET_LOCAL_PLAYER_CAN_COLLECT_PORTABLE_PICKUPS
 *
 * 0x2053D6988D24922A

 * 
 * ------------------------------------------------------------------
 * @param {boolean} canCollect
 */
export function setLocalPlayerCanCollectPortablePickups(canCollect: boolean): void {
	const setLocalPlayerCanCollectPortablePickups_result = Citizen.invokeNative<void>('0x2053D6988D24922A', canCollect);
	return setLocalPlayerCanCollectPortablePickups_result;
}