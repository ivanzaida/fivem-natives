/**
 * VEHICLE:SET_GROUND_EFFECT_REDUCES_DRAG
 *
 * 0x430A7631A84C9BE7

 * 
 * ------------------------------------------------------------------
 * @param {boolean} reduceDrag
 */
export function setGroundEffectReducesDrag(reduceDrag: boolean): void {
	const setGroundEffectReducesDrag_result = Citizen.invokeNative<void>('0x430A7631A84C9BE7', reduceDrag);
	return setGroundEffectReducesDrag_result;
}