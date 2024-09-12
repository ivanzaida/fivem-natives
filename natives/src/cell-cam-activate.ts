/**
 * MOBILE:CELL_CAM_ACTIVATE
 *
 * 0xFF7028E54EB0EA84

 * 
 * ------------------------------------------------------------------
 * @param {boolean} enablePhotoUpdate
 * @param {boolean} goFirstPerson
 */
export function cellCamActivate(enablePhotoUpdate: boolean, goFirstPerson: boolean): void {
	const cellCamActivate_result = Citizen.invokeNative<void>('0xFF7028E54EB0EA84', enablePhotoUpdate, goFirstPerson);
	return cellCamActivate_result;
}