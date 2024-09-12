/**
 * STATS:_PLAYSTATS_SHOPMENU_NAV
 *
 * 0xB56CE5A91FCC8552

 * 
 * ------------------------------------------------------------------
 * @param {unknown} p0
 * @param {unknown} p1
 * @param {unknown} p2
 */
export function playstatsShopmenuNav(p0: unknown, p1: unknown, p2: unknown): void {
	const playstatsShopmenuNav_result = Citizen.invokeNative<void>('0xB56CE5A91FCC8552', p0, p1, p2);
	return playstatsShopmenuNav_result;
}