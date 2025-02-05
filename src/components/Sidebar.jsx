import { useState, useCallback } from "react"

/**
 * Renders an array of strings passed in that can be filtered and added to as an
 * unordered list.
 * @returns Component
 */
export default function Sidebar({ initialMenuItems }) {
  // todo 2

  let [menuItems, setMenuItems] = useState(initialMenuItems)
  let [newMenuItem, setNewMenuItem] = useState("")
  let [filter, setFilter] = useState("")

  // todo 3
  let addMenuItem = useCallback(() => {
    if (newMenuItem.trim() !== "") {
      setMenuItems((prevMenuItems) => [newMenuItem, ...prevMenuItems])
      setNewMenuItem("")
    }
  }, [newMenuItem])

  // todo 4
  const filteredMenuItems = menuItems.filter((item) =>
    item.toLowerCase().includes(filter.toLowerCase()) 
  )

  //todo 1
  return (
    <div>
       <ul> 
        {filteredMenuItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <br />
      <input
        type="text"
        id="newMenuItemValue"
        value={newMenuItem}
        onChange={(event) => setNewMenuItem(event.target.value)}
      ></input>
      <br />
      <button onClick={addMenuItem}>Add Item</button>
      <br />
      <input
        id="filter"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        placeholder="Filter by..."
      />
    </div>
  )
}
