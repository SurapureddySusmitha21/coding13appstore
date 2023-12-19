// Write your code here
import './index.css'

const TabItem = props => {
  const {TabDetailList, onclickTabItem, isActive} = props
  const {tabId, displayText} = TabDetailList

  const getClickbtn = () => {
    onclickTabItem(tabId)
  }
  const activeTabBtnClassName = isActive ? 'active-tab-btn' : 'a'

  return (
    <li className="list-container">
      <button
        type="button"
        className={`button-${activeTabBtnClassName}`}
        onClick={getClickbtn}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
