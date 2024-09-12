/**
 * MISC:START_SAVE_ARRAY_WITH_SIZE
 *
 * 0x54DF17092B1F59BA

 * Tells the game that all REGISTER_..._TO_SAVE commands up to the matching STOP_SAVE_ARRAY are within an instance
 * of this array. The game can save a bit of memory if you write a procedure to register each array e.g.
 * PROC RegisterContactDetailsArray(DetailsForOneContact &StartOfArray[], STRING NameOfInstanceOfArray)
 * START_SAVE_ARRAY(StartOfArray, NameOfInstanceOfArray)
 * TEXT_LABEL_31 ContactName
 * INT loop = 0
 * WHILE loop < ENUM_TO_INT(NUMBER_OF_CONTACTS)
 * eContacts loopAsEnum = INT_TO_ENUM(eContacts, loop)
 * SWITCH (loopAsEnum)
 * CASE CONTACT_BRIAN
 * ContactName = "CONTACT_BRIAN"
 * BREAK
 * CASE CONTACT_TONY
 * ContactName = "CONTACT_TONY"
 * BREAK
 * CASE CONTACT_BILLY
 * ContactName = "CONTACT_BILLY"
 * BREAK
 * DEFAULT
 * SCRIPT_ASSERT("RegisterContactDetailsArray - case missing for a contact")
 * ContactName = "ContactDetails"
 * ContactName += loop
 * BREAK
 * ENDSWITCH
 * Call another function to register a single element for saving
 * RegisterDetailsForOneContact(StartOfArray[loop], ContactName)
 * If your array is just an array of simple types like INTs then you probably don't need a separate function
 * and can just call REGISTER_INT_TO_SAVE (or whatever the appropriate command is) here
 * loop++
 * ENDWHILE
 * STOP_SAVE_ARRAY()
 * ENDPROC
 * You can then call your procedure to register each instance of your array.
 * 
 * ------------------------------------------------------------------
 * @param {DataView} arrayToSave [Ref]
 * @param {number} sizeOfStructNotCount
 * @param {string} nameOfArrayInstance
 */
export function startSaveArrayWithSize(arrayToSave: DataView /* ptr */, sizeOfStructNotCount: number, nameOfArrayInstance: string): void {
	const startSaveArrayWithSize_result = Citizen.invokeNative<void>('0x54DF17092B1F59BA', arrayToSave, sizeOfStructNotCount, nameOfArrayInstance);
	return startSaveArrayWithSize_result;
}