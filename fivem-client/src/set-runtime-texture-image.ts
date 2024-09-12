/**
 * CFX:SET_RUNTIME_TEXTURE_IMAGE
 *
 * 0x28FC4ECB

 * Replaces the pixel data in a runtime texture with the image data from a file in the current resource, or a data URL.If the bitmap is a different size compared to the existing texture, it will be resampled.This command may end up executed asynchronously, and only update the texture data at a later time.
 * 
 * ------------------------------------------------------------------
 * @param {number} tex A runtime texture handle.
 * @param {string} fileName The file name of an image to load, or a base64 "data
 * @returns {boolean}  TRUE for success, FALSE for failure.
 */
export function setRuntimeTextureImage(tex: number, fileName: string): boolean {
	const setRuntimeTextureImage_result = Citizen.invokeNative<boolean>('0x28FC4ECB', tex, fileName);
	return setRuntimeTextureImage_result;
}