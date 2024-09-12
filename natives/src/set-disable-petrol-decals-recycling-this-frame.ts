/**
 * GRAPHICS:SET_DISABLE_PETROL_DECALS_RECYCLING_THIS_FRAME
 *
 * 0x6D268E74310FA45D

 * 
 * ------------------------------------------------------------------
 */
export function setDisablePetrolDecalsRecyclingThisFrame(): void {
	const setDisablePetrolDecalsRecyclingThisFrame_result = Citizen.invokeNative<void>('0x6D268E74310FA45D', );
	return setDisablePetrolDecalsRecyclingThisFrame_result;
}