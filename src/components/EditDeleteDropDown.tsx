type EditDeleteDropDownProp = {
    topicId: number;
    setEditId: (id: number) => void;
    setDeleteId: (id: number) => void;
    setOpenId: (id: number | null) => void;
}

export const EditDeleteDropDown = ({
    topicId,
    setEditId,
    setDeleteId,
    setOpenId
}: EditDeleteDropDownProp) => {
    return (
        <div
                  className="absolute right-3 mt-2 z-20 w-28 rounded-lg border border-sky-100 bg-white py-1 text-sm shadow-lg"
                  role="menu"
                >
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      setEditId(topicId);
                      setOpenId(null);
                    }}
                    className="block w-full px-3 py-2 text-left text-sky-700 hover:bg-sky-50"
                    role="menuitem"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      setDeleteId(topicId);
                      setOpenId(null);
                    }}
                    className="block w-full px-3 py-2 text-left text-rose-600 hover:bg-rose-50"
                    role="menuitem"
                  >
                    Delete
                  </button>
                </div>
    )
}