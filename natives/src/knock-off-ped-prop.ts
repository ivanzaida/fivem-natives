import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:KNOCK_OFF_PED_PROP
 *
 * 0xE19C037272259115

 * 
 * List of component/props ID
 * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} damaged
 * @param {boolean} hats
 * @param {boolean} glasses
 * @param {boolean} helmets
 */
export function knockOffPedProp(ped: PedIndex, damaged: boolean, hats: boolean, glasses: boolean, helmets: boolean): void {
	const knockOffPedProp_result = Citizen.invokeNative<void>('0xE19C037272259115', ped, damaged, hats, glasses, helmets);
	return knockOffPedProp_result;
}