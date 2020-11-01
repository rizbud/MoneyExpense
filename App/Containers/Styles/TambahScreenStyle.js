import { connect } from '../../Themes/OsmiProvider'

export default connect({
  container: "bg-gray-e5 flex px-4",
  header: "text-gray-4f mb-4 opensans-bold text-lg w-192",
  form: "pt-6 flex",
  catGroup: "mb-5 flex",
  label: "mb-2 opensans-bold text-gray-4f",
  selectCat: "row flex items-center",
  icon: "p-5 bg-gray-332 rounded-full w-36 h-36 items-center justify-center",
  cat: "flex ml-2 opensans text-gray-4f",
  ico: "bg-gray-332 rounded-full p-1 items-center justify-center",
  btnSave: "flex mt-3 items-center p-3 bg-teal rounded-12",
  btnLabel: "text-white opensans-bold",

  // modal
  modal: "justify-end m-0",
  modalContainer: "bg-white rounded-top-12 py-4",
  titleModal: "text-base flex opensans-bold px-5",
  closeBtn: "flex-end px-5"
})