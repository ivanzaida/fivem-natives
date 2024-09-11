import { BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:SHOW_FOR_SALE_ICON_ON_BLIP
 *
 * 0x082FBF1124B27D02

 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blip
 * @param {boolean} toggle
 */
export function showForSaleIconOnBlip(blip: BlipIndex, toggle: boolean): void {
	const showForSaleIconOnBlip_result = Citizen.invokeNative<void>('0x082FBF1124B27D02', blip, toggle);
	return showForSaleIconOnBlip_result;
}