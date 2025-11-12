import { EControlType, EControlAction } from '@ivanzaida/structures'

/**
 * PAD:GET_DISABLED_CONTROL_UNBOUND_NORMAL
 *
 * 0xC3B77DE416935168

 * 
 * The "disabled" variant of GET_CONTROL_UNBOUND_NORMAL.
 * 
 * control: see IS_CONTROL_ENABLED
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EControlType} control
 * @param {EControlAction} action
 * @returns {number}  
 */
export function getDisabledControlUnboundNormal(control: EControlType | number, action: EControlAction | number): number {
	const getDisabledControlUnboundNormal_result = Citizen.invokeNative<number>('0xC3B77DE416935168', control, action);
	return getDisabledControlUnboundNormal_result;
}