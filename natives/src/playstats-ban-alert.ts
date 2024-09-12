/**
 * STATS:PLAYSTATS_BAN_ALERT
 *
 * 0x89CB07C992FD7482

 * 
 * ------------------------------------------------------------------
 * @param {number} optionSelected
 */
export function playstatsBanAlert(optionSelected: number): void {
	const playstatsBanAlert_result = Citizen.invokeNative<void>('0x89CB07C992FD7482', optionSelected);
	return playstatsBanAlert_result;
}