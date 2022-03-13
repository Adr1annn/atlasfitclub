

const Modal = ({ closeModal }) => {
  return  <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-gradient-to-r from-black">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between px-8 pt-5 pb-2 rounded-t">
                    <h3 className="text-4xl md:text-6xl font-semibold text-primary">
                      COMING SOON
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none absolute right-0 -top-2"
                      onClick={closeModal}
                    >
                      <span className="bg-transparent text-primary h-6 w-6 text-2xl md:text-3xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  <p className="md:text-xl font-semibold text-center pb-5 text-primary">Stay tuned for something amazing</p>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
}

export default Modal