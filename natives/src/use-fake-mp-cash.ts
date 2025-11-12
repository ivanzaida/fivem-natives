/**
 * HUD:USE_FAKE_MP_CASH
 *
 * 0x97F5AFA09D818568

 * 
 * Related to displaying cash on the HUD
 * Always called before HUD::CHANGE_FAKE_MP_CASH in decompiled scripts
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} useFakeMPCash
 */
export function useFakeMpCash(useFakeMPCash: boolean): void {
	const useFakeMpCash_result = Citizen.invokeNative<void>('0x97F5AFA09D818568', useFakeMPCash);
	return useFakeMpCash_result;
}