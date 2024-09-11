/**
 * STATS:PLAYSTATS_PROP_CHANGE
 *
 * 0xC55C44E111865A0F

 * 
 * ------------------------------------------------------------------
 * @param {number} ped
 * @param {number} position
 * @param {number} newProp
 * @param {number} newText
 */
export function playstatsPropChange(ped: number, position: number, newProp: number, newText: number): void {
	const playstatsPropChange_result = Citizen.invokeNative<void>('0xC55C44E111865A0F', ped, position, newProp, newText);
	return playstatsPropChange_result;
}