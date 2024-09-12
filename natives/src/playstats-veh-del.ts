/**
 * STATS:PLAYSTATS_VEH_DEL
 *
 * 0x10A691F5756416D0

 * 
 * ------------------------------------------------------------------
 */
export function playstatsVehDel(): void {
	const playstatsVehDel_result = Citizen.invokeNative<void>('0x10A691F5756416D0', );
	return playstatsVehDel_result;
}