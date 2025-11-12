import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_HELMET_PROP_INDEX
 *
 * 0x8112F193D4649FEA

 * 
 * List of component/props ID
 * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} overwriteHelmetProp
 * @param {boolean} includeBicycles
 */
export function setPedHelmetPropIndex(ped: PedIndex, overwriteHelmetProp: number = 1, includeBicycles: boolean = true): void {
	const setPedHelmetPropIndex_result = Citizen.invokeNative<void>('0x8112F193D4649FEA', ped, overwriteHelmetProp, includeBicycles);
	return setPedHelmetPropIndex_result;
}